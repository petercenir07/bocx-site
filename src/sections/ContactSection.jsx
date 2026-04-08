import { Building2, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useMemo, useState } from "react";
import contactImage from "../assets/images/contact-office.svg";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { contactDetails } from "../data/siteContent";

const initialForm = {
  name: "",
  organization: "",
  email: "",
  serviceInterest: "",
  message: "",
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const isSubmitting = submitState.status === "submitting";
  const messageLength = useMemo(() => form.message.trim().length, [form.message]);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validateForm() {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (form.organization.trim().length < 2) {
      nextErrors.organization = "Please enter your organization.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid work email.";
    }

    if (form.serviceInterest.trim().length < 2) {
      nextErrors.serviceInterest = "Please tell us what service you need.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = "Please provide more detail about your requirements.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState({
        status: "error",
        message: "Please correct the highlighted fields and try again.",
      });
      return;
    }

    setErrors({});
    setSubmitState({
      status: "submitting",
      message: "Submitting your consultation request...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        setErrors(payload.errors || {});
        throw new Error(
          payload.message || "The consultation request could not be processed.",
        );
      }

      setForm(initialForm);
      setSubmitState({
        status: "success",
        message:
          payload.message ||
          "Consultation request received. BOCX can now review the details you submitted.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The consultation request could not be processed.",
      });
    }
  }

  function fieldClass(name) {
    return errors[name] ? "input-shell border-rose-400/70" : "input-shell";
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start a confidential conversation about secure, mission-critical operations."
            description="Share the scope, environment, and objectives you are navigating. BOCX can align the right consultation path for cybersecurity, engineering, assurance, or long-term support across enterprise and public sector settings."
          />

          <div className="mt-6 space-y-3">
            {contactDetails.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <div className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/4 px-4 py-3 backdrop-blur-md">
                  <Building2 className="mt-0.5 h-5 w-5 text-cyan" />
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6">
            <SectionImage
              src={contactImage}
              alt="Executive office visual"
              eyebrow="Executive-Grade Intake"
              title="Purpose-built to reinforce credibility and responsiveness from the first interaction."
              imageClassName="aspect-[1.24/1]"
            />
          </div>
        </div>

        <Reveal>
          <GlassCard className="panel-glow rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/50 p-6 sm:p-7">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Request Consultation
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Provide a brief overview and BOCX can respond with aligned next steps
                for consultation and program scoping.
              </p>

              <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      className={fieldClass("name")}
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={updateField}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-rose-300">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      className={fieldClass("organization")}
                      type="text"
                      name="organization"
                      placeholder="Organization"
                      value={form.organization}
                      onChange={updateField}
                      aria-invalid={Boolean(errors.organization)}
                    />
                    {errors.organization && (
                      <p className="mt-2 text-sm text-rose-300">
                        {errors.organization}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    className={fieldClass("email")}
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={form.email}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    className={fieldClass("serviceInterest")}
                    type="text"
                    name="serviceInterest"
                    placeholder="Service Interest"
                    value={form.serviceInterest}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.serviceInterest)}
                  />
                  {errors.serviceInterest && (
                    <p className="mt-2 text-sm text-rose-300">
                      {errors.serviceInterest}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your environment, priorities, or mission requirements."
                    value={form.message}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.message)}
                    className={`${fieldClass("message")} min-h-36 resize-y`}
                  />
                  <div className="mt-2 flex items-center justify-between gap-4">
                    {errors.message ? (
                      <p className="text-sm text-rose-300">{errors.message}</p>
                    ) : (
                      <p className="text-sm text-slate-400">
                        Share enough detail for BOCX to route the request correctly.
                      </p>
                    )}
                    <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      {messageLength}/4000
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan/40 bg-cyan/15 px-6 py-3.5 text-sm font-semibold tracking-[0.02em] text-white transition duration-300 hover:border-cyan hover:bg-cyan/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Submitting Request
                    </>
                  ) : (
                    <>
                      Submit Consultation Request
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {submitState.message && (
                  <div
                    className={`flex items-start gap-3 rounded-[1.2rem] border px-4 py-3 text-sm leading-7 ${
                      submitState.status === "success"
                        ? "border-cyan/30 bg-cyan/10 text-slate-100"
                        : submitState.status === "error"
                          ? "border-rose-400/30 bg-rose-400/10 text-rose-100"
                          : "border-white/10 bg-white/5 text-slate-200"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {submitState.status === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    ) : submitState.status === "submitting" ? (
                      <LoaderCircle className="mt-0.5 h-5 w-5 shrink-0 animate-spin text-cyan" />
                    ) : (
                      <Send className="mt-0.5 h-5 w-5 shrink-0" />
                    )}
                    <p>{submitState.message}</p>
                  </div>
                )}
              </form>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}

export default ContactSection;
