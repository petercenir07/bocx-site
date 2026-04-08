import trustImage from "../assets/images/why-choose-trust.svg";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { whyChooseItems } from "../data/siteContent";

function WhyChooseSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <SectionHeading
            eyebrow="Why Choose BOCX"
            title="A security-first consulting partner built for high-trust environments."
            description="BOCX combines technical rigor, disciplined delivery, and operational awareness to support mission-critical systems from assessment through sustainment."
          />

          <div className="mt-8 space-y-4">
            {whyChooseItems.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06} className="rounded-[1.45rem] border border-white/10 bg-white/4 px-5 py-5 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
                    <Icon className="h-5 w-5 text-cyan" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionImage
          src={trustImage}
          alt="Abstract trust and security visual"
          eyebrow="Executive Trust"
          title="Designed to communicate disciplined execution, security-first thinking, and operational trust."
          imageClassName="aspect-[1.02/1]"
        />
      </Container>
    </section>
  );
}

export default WhyChooseSection;
