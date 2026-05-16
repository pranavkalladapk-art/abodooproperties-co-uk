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
      { property: "og:url", content: "https://abodoo-zenith.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://abodoo-zenith.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Abodoo Properties",
          image: "https://abodoo-zenith.lovable.app/",
          url: "https://abodoo-zenith.lovable.app/",
          telephone: "+44 (0) 121 000 0000",
          email: "hello@abodooproperties.co.uk",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
          areaServed: ["London", "Manchester", "Leeds", "Sheffield", "Nottingham"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { q: "What is Rent to Serviced Accommodation (R2SA)?", a: "R2SA is a model where we lease your property directly at an agreed monthly rent — typically above standard market rate — and operate it as a premium serviced apartment. You receive guaranteed income with no tenant management, while we generate revenue through higher nightly rates." },
            { q: "Do I need to own the property outright to work with you?", a: "No. For R2SA we lease from landlords — so as long as you hold the property and your mortgage or freeholder permits short-term lets, we can work together. For flipping and joint ventures, we work with investors deploying capital into specific projects." },
            { q: "What happens if the property sits empty?", a: "Under our R2SA model your income is guaranteed regardless of occupancy — we take on that commercial risk entirely. For management clients we actively market the property and use dynamic pricing tools to minimise any void periods." },
            { q: "What areas do you currently operate in?", a: "We operate across London, Manchester, Leeds, Sheffield, and Nottingham. We are expanding to additional cities through 2025 — contact us to discuss your specific location and we'll advise on feasibility." },
            { q: "How quickly can you get my property earning?", a: "Most R2SA and management properties are fully set up and live within 10–14 days of signing. Flip projects depend on refurbishment scope, but we typically complete within 4–8 months from acquisition to sale." },
            { q: "What compliance and certifications do you handle?", a: "We manage Gas Safety certificates, Electrical Installation Condition Reports (EICRs), Energy Performance Certificates (EPCs), HMO licensing where required, and all relevant council short-let registrations. You will not need to chase any paperwork." },
          ].map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
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
