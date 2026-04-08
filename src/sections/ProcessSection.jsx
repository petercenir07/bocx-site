import processImage from "../assets/images/process-flow.svg";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { processSteps } from "../data/siteContent";

function ProcessSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A structured delivery path from discovery through sustainment."
          description="Every engagement is framed to reduce ambiguity, elevate assurance, and keep stakeholders aligned as systems move from planning to operational support."
          align="center"
        />

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionImage
            src={processImage}
            alt="Abstract digital workflow visual"
            eyebrow="Five-Stage Flow"
            title="Assess, design, secure, deploy, and maintain with controlled momentum."
            imageClassName="aspect-[1.08/1]"
          />

          <div className="space-y-4">
            {processSteps.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="section-shell panel-glow rounded-[1.5rem] bg-white/4 px-5 py-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
                        <Icon className="h-5 w-5 text-cyan" strokeWidth={1.6} />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
