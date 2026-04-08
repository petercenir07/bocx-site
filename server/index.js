import { randomUUID } from "node:crypto";
import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "data");
const submissionsPath = path.join(dataDir, "contact-submissions.ndjson");
const distDir = path.join(rootDir, "dist");
const host = "127.0.0.1";
const port = Number(process.env.PORT || 8787);
const serveDist = process.argv.includes("--serve-dist");

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function normalizeText(value, maxLength) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function validateSubmission(payload) {
  const submission = {
    name: normalizeText(payload.name, 120),
    organization: normalizeText(payload.organization, 160),
    email: normalizeText(payload.email, 160).toLowerCase(),
    serviceInterest: normalizeText(payload.serviceInterest, 160),
    message: String(payload.message || "").trim().slice(0, 4000),
  };

  const errors = {};

  if (submission.name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (submission.organization.length < 2) {
    errors.organization = "Please enter your organization.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    errors.email = "Please enter a valid work email.";
  }

  if (submission.serviceInterest.length < 2) {
    errors.serviceInterest = "Please tell us what service you need.";
  }

  if (submission.message.length < 20) {
    errors.message = "Please provide more detail about your requirements.";
  }

  return {
    submission,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

async function persistSubmission(submission, request) {
  await fs.mkdir(dataDir, { recursive: true });

  const record = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    ip:
      request.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
      request.socket.remoteAddress ||
      "unknown",
    userAgent: request.headers["user-agent"] || "unknown",
    ...submission,
  };

  await fs.appendFile(submissionsPath, `${JSON.stringify(record)}\n`, "utf8");
}

async function readRequestBody(request) {
  let rawBody = "";

  for await (const chunk of request) {
    rawBody += chunk;

    if (rawBody.length > 1_000_000) {
      throw new Error("Request body too large.");
    }
  }

  if (!rawBody) {
    return {};
  }

  return JSON.parse(rawBody);
}

async function serveStaticFile(filePath, response) {
  try {
    const contents = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType =
      extension === ".html"
        ? "text/html; charset=utf-8"
        : extension === ".js"
          ? "text/javascript; charset=utf-8"
          : extension === ".css"
            ? "text/css; charset=utf-8"
            : extension === ".svg"
              ? "image/svg+xml"
              : extension === ".json"
                ? "application/json; charset=utf-8"
                : "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    response.end(contents);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);

  if (request.method === "POST" && url.pathname === "/api/contact") {
    try {
      const payload = await readRequestBody(request);
      const { submission, errors, isValid } = validateSubmission(payload);

      if (!isValid) {
        return sendJson(response, 400, {
          ok: false,
          message: "Please correct the highlighted fields and try again.",
          errors,
        });
      }

      await persistSubmission(submission, request);

      return sendJson(response, 200, {
        ok: true,
        message:
          "Consultation request received. BOCX can now review the details you submitted.",
      });
    } catch (error) {
      return sendJson(response, 500, {
        ok: false,
        message:
          error instanceof SyntaxError
            ? "The request payload was invalid."
            : "The consultation request could not be processed right now.",
      });
    }
  }

  if (request.method === "GET" && url.pathname === "/api/contact/health") {
    return sendJson(response, 200, { ok: true });
  }

  if (serveDist && request.method === "GET") {
    const cleanPath = path.normalize(url.pathname.replace(/^\/+/, ""));
    const requestedPath =
      url.pathname === "/"
        ? path.join(distDir, "index.html")
        : path.resolve(distDir, cleanPath);

    try {
      if (!requestedPath.startsWith(distDir)) {
        throw new Error("Invalid path.");
      }

      const stats = await fs.stat(requestedPath);

      if (stats.isFile()) {
        return serveStaticFile(requestedPath, response);
      }
    } catch {
      return serveStaticFile(path.join(distDir, "index.html"), response);
    }
  }

  response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ ok: false, message: "Not found." }));
});

server.listen(port, host, () => {
  const modeLabel = serveDist ? "API + static site" : "API only";
  console.log(`BOCX contact server running (${modeLabel}) at http://${host}:${port}`);
  console.log(`Submissions will be stored in ${submissionsPath}`);
});
