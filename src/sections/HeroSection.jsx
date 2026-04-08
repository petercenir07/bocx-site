import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "../assets/images/hero-visual.svg";
import Container from "../components/Container";
import HeroVisual from "../components/HeroVisual";
import PrimaryButton from "../components/PrimaryButton";
import Reveal from "../components/Reveal";
import { heroHighlights } from "../data/siteContent";

function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 sm:pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_center,rgba(89,216,255,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-24 h-[36rem] w-[36rem] rounded-full bg-cyan/12 blur-[180px]" />

      <Container className="relative grid min-h-[88svh] items-center gap-12 pb-14 lg:grid-cols-[1.02fr_0.98fr] lg:pb-18">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan">
              <ShieldCheck className="h-4 w-4" />
              Cybersecurity, IT, and Assurance
            </span>
          </Reveal>

          <Reveal delay={0.08} className="mt-7 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.94]">
              Cybersecurity and IT consulting built for <span className="text-gradient">high-trust environments</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.14} className="mt-6 max-w-2xl">
            <p className="text-lg leading-8 text-slate-300 sm:text-xl">
              Engineered for mission-critical environments across defense, healthcare, and government sectors. BlackOps Cybersecurity Consortium Inc. delivers cybersecurity, information technology, information assurance, engineering consulting, and sustainment support for organizations that depend on secure, reliable operations.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#contact" className="gap-2 px-6 py-3.5">
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <PrimaryButton href="#services" variant="ghost" className="px-6 py-3.5">
              Explore Services
            </PrimaryButton>
          </Reveal>

          <Reveal delay={0.26} className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-md"
              >
                <div className="mb-3 h-px w-14 bg-gradient-to-r from-cyan to-transparent" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroVisual image={heroImage} />
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
