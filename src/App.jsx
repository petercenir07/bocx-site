import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import CtaSection from "./sections/CtaSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import IndustriesSection from "./sections/IndustriesSection";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";
import StatsSection from "./sections/StatsSection";
import WhyChooseSection from "./sections/WhyChooseSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-white">
      <Navbar />

      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-8rem] top-[34rem] h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[160px]" />
        <div className="pointer-events-none absolute left-[-8rem] top-[110rem] h-[24rem] w-[24rem] rounded-full bg-slate-glow/10 blur-[160px]" />

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Industries */}
        <IndustriesSection />

        {/* Why Choose BOCX */}
        <WhyChooseSection />

        {/* Process */}
        <ProcessSection />

        {/* Stats / Trust */}
        <StatsSection />

        {/* CTA */}
        <CtaSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
