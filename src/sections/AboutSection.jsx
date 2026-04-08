import { CheckCircle2 } from "lucide-react";
import aboutImage from "../assets/images/about-operations-photo.webp";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { aboutPoints } from "../data/siteContent";

const sectors = ["Defense", "Government", "Healthcare"];

function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionImage
          src={aboutImage}
          alt="Security operations team monitoring a mission-critical environment"
          eyebrow="Integrated Delivery"
          title="Operational visibility, secure coordination, and disciplined delivery in high-trust environments."
          className="order-2 lg:order-1"
          imageClassName="aspect-[1.08/1] object-[center_38%]"
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About BOCX"
            title="A cybersecurity and IT consulting firm designed for secure modernization across critical environments."
            description="BOCX supports military operations, government systems, and healthcare infrastructure through integrated consulting, engineering, and sustainment services built for continuity, security, and control."
          />

          <div className="mt-6 space-y-4">
            {aboutPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.08} className="rounded-[1.35rem] border border-white/10 bg-white/4 px-5 py-4 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="mt-6 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-200"
              >
                {sector}
              </span>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
