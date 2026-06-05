import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyAbodooSection from "@/components/WhyAbodooSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import InsightsSection from "@/components/InsightsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/home";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Abodoo Properties | UK Property Services" },
      { name: "description", content: "Abodoo Properties helps UK landlords and investors maximise rental income through Rent-to-SA, HMO, BRRRR and refurbishment strategies. Get a free property assessment today." },
      { property: "og:title", content: "Abodoo Properties | UK Property Services" },
      { property: "og:description", content: "Abodoo Properties helps UK landlords and investors maximise rental income through Rent-to-SA, HMO, BRRRR and refurbishment strategies. Get a free property assessment today." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <WhyAbodooSection />
      <WhoWeWorkWithSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
