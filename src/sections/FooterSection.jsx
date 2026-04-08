import footerTexture from "../assets/images/footer-texture.svg";
import Container from "../components/Container";
import LogoMark from "../components/LogoMark";
import { navLinks } from "../data/siteContent";

function FooterSection() {
  return (
    <footer
      className="relative border-t border-white/10 py-10"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5, 8, 13, 0.82), rgba(5, 8, 13, 0.96)), url(${footerTexture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <a href="#home" className="inline-block" aria-label="BOCX Inc. home">
            <LogoMark />
          </a>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            BlackOps Cybersecurity Consortium Inc. is a cybersecurity and IT consulting firm built to support defense, government, healthcare, and other high-trust environments.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-400 sm:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <p>Security-first consulting, engineering, and sustainment for mission-critical environments.</p>
          <p>© {new Date().getFullYear()} BOCX Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
