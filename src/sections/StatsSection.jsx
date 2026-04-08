import { CheckCircle2 } from "lucide-react";
import statsImage from "../assets/images/stats-dashboard.svg";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { stats, trustPoints } from "../data/siteContent";

function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionImage
          src={statsImage}
          alt="Premium analytics dashboard visual"
          eyebrow="Operational Confidence"
          title="Confidence is reinforced through security discipline, measurable delivery, and operational readiness."
          imageClassName="aspect-[1.08/1]"
        />

        <div>
          <SectionHeading
            eyebrow="Stats & Trust"
            title="Operational readiness, security discipline, and executive trust reflected in every engagement."
            description="This experience emphasizes the qualities high-trust environments expect: secure delivery, resilient infrastructure thinking, and sustained accountability."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <div className="section-shell panel-glow rounded-[1.45rem] bg-white/4 px-5 py-5 backdrop-blur-md">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {trustPoints.map((point, index) => (
              <Reveal key={point} delay={0.15 + index * 0.06}>
                <div className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan" />
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;
