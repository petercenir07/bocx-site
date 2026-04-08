import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import healthcareImage from "../assets/images/industries-commercial.svg";
import governmentImage from "../assets/images/industries-government.svg";
import militaryImage from "../assets/images/industries-military.svg";
import { industries } from "../data/siteContent";

const imageMap = {
  military: militaryImage,
  government: governmentImage,
  healthcare: healthcareImage,
};

function IndustriesSection() {
  return (
    <section id="industries" className="relative py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for sectors where security, reliability, and operational readiness are non-negotiable."
          description="BOCX supports defense, government, and healthcare organizations with consulting and engineering services aligned to secure operations and resilient infrastructure."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon, imageKey }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="section-shell panel-glow overflow-hidden rounded-[1.8rem] bg-white/4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/30">
                <div className="relative overflow-hidden border-b border-white/10">
                  <img
                    src={imageMap[imageKey]}
                    alt={`${title} operations visual`}
                    className="aspect-[1.24/1] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.08),rgba(4,7,12,0.62))]" />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
                    <Icon className="h-5 w-5 text-cyan" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default IndustriesSection;
