import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero/Hero";
import AboutSection from "@/components/home/About/AboutSection";
import ServicesSection from "@/components/home/Services/ServicesSection";
import StatsSection from "@/components/home/Stats/StatsSection";
import TeamSection from "@/components/home/Team/TeamSection";
import ProjectsSection from "@/components/home/Events/EventsSection";
import PricingSection from "@/components/home/Pricing/PricingSection";
import FaqSection from "@/components/home/Faq/FaqSection";
import CTASection from "@/components/home/CTA/CTASection";

export default function Home() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const targetId =
      state?.scrollTo ||
      (pathname !== "/" ? pathname.replace("/", "") : null);

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 80);
        return () => clearTimeout(timer);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, state]);

  return (
    <>
      <Navbar />
      <main className="bg-stone-50">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TeamSection />
        <ProjectsSection />
        <PricingSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
