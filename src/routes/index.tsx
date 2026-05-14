import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyAbodooSection from "@/components/WhyAbodooSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import PropertiesSection from "@/components/PropertiesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abodoo Properties — UK Property Income Specialists" },
      { name: "description", content: "Abodoo Properties turns UK homes into high-performing income assets through guaranteed Rent-to-SA, strategic flips, and full-service management." },
      { property: "og:title", content: "Abodoo Properties — UK Property Income Specialists" },
      { property: "og:description", content: "Guaranteed monthly income, expert management, and proven flip returns across the United Kingdom." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <WhyAbodooSection />
      <WhoWeWorkWithSection />
      <PropertiesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
