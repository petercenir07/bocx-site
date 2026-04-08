import servicesImage from "../assets/images/services-healthcare-monitor.webp";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "../components/SectionImage";
import { services } from "../data/siteContent";

function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Services"
            title="Cybersecurity and IT services built for resilient, high-availability operations."
            description="From architecture and assurance to field execution and O&M, BOCX structures delivery around critical systems, infrastructure resilience, and dependable operational continuity."
          />

          <SectionImage
            src={servicesImage}
            alt="Clinical monitoring equipment representing resilient healthcare infrastructure"
            eyebrow="Security-Centered"
            title="Real-world critical systems demand secure delivery, resilient infrastructure, and continuous visibility."
            imageClassName="aspect-[1.35/1] object-[center_42%]"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="section-shell panel-glow h-full rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
                    <Icon className="h-6 w-6 text-cyan" strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
