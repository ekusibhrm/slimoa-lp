import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LifestylePhoto from "@/components/LifestylePhoto";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 pb-20 sm:pb-24">
        <Hero />
        <Reveal>
          <LifestylePhoto />
        </Reveal>
        <Reveal>
          <PainPoints />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
