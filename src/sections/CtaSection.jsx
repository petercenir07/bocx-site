import { ArrowRight } from "lucide-react";
import ctaBackground from "../assets/images/cta-background.svg";
import Container from "../components/Container";
import PrimaryButton from "../components/PrimaryButton";
import Reveal from "../components/Reveal";

function CtaSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <div
            className="section-shell panel-glow relative overflow-hidden rounded-[2.2rem] border border-white/10 px-6 py-14 sm:px-10 lg:px-14 lg:py-18"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(6, 10, 15, 0.42), rgba(6, 10, 15, 0.82)), url(${ctaBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,216,255,0.18),transparent_34%)]" />
            <div className="relative max-w-3xl">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-cyan">
                Secure Partnership
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.2rem]">
                Partner with BOCX to strengthen secure, mission-critical operations.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                BOCX supports enterprise and public sector organizations seeking cybersecurity, IT consulting, and sustainment services aligned to resilient systems, secure delivery, and long-term operational readiness.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact" className="gap-2 px-6 py-3.5">
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <PrimaryButton href="#about" variant="ghost" className="px-6 py-3.5">
                  Learn More About BOCX
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default CtaSection;
