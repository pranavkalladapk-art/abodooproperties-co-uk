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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abodoo Properties | UK Property Services" },
      { name: "description", content: "Abodoo Properties helps UK landlords and investors maximise rental income through Rent-to-SA, HMO, BRRRR and refurbishment strategies. Get a free property assessment today." },
      { property: "og:title", content: "Abodoo Properties | UK Property Services" },
      { property: "og:description", content: "Abodoo Properties helps UK landlords and investors maximise rental income through Rent-to-SA, HMO, BRRRR and refurbishment strategies. Get a free property assessment today." },
      { property: "og:url", content: "https://abodooproperties.co.uk/" },
    ],
    links: [
      { rel: "canonical", href: "https://abodooproperties.co.uk/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Abodoo Properties",
          url: "https://abodooproperties.co.uk",
          logo: "https://abodooproperties.co.uk/assets/logo-h1ELlTa1.png",
          description: "Abodoo Properties helps UK landlords and investors maximise rental income through Rent-to-SA, HMO, BRRRR and refurbishment strategies.",
          telephone: "+447442526283",
          email: "Info@abodooproperties.co.uk",
          areaServed: "United Kingdom",
          sameAs: [
            "https://www.linkedin.com/company/abodooproperties",
            "https://www.instagram.com/abodooproperties",
            "https://www.tiktok.com/@abodooproperties",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { q: "What is Rent to Serviced Accommodation (R2SA)?", a: "R2SA is a model where we lease your property at a fixed monthly rent agreed in advance, subject to contract terms, and operate it as a serviced apartment. You receive a consistent payment each month while we manage guests, cleaning, and operations." },
            { q: "Is rent-to-rent legal?", a: "Yes, when structured correctly and with the appropriate landlord, lender, and freeholder permissions. We operate in line with applicable tenancy, licensing, and local short-let regulations." },
            { q: "Do I need permission from my mortgage lender or freeholder?", a: "In many cases, yes. We recommend confirming any mortgage, leasehold, and insurance restrictions before signing an agreement, and we are happy to support you through that process." },
            { q: "Are all properties suitable?", a: "No. Suitability depends on location, building rules, licensing requirements, and local demand. We assess each property individually before offering terms." },
            { q: "What happens if there is damage to the property?", a: "We carry out regular inspections, guest screening, and professional cleaning between stays. Any issues are addressed in line with the management agreement and the relevant operating insurance." },
            { q: "How are income figures calculated?", a: "Indicative figures are based on market research, comparable listings, occupancy trends, and operational costs. They are estimates, not guaranteed earnings, and actual performance may vary." },
            { q: "What happens if the property sits empty?", a: "Under a fixed-rent agreement, your rent is paid for the term regardless of occupancy, in line with the contract. For management clients, we use dynamic pricing and multi-channel marketing to minimise voids." },
            { q: "Where do you market properties?", a: "Depending on the property and local regulations, we may market accommodation through platforms such as Airbnb, Booking.com, and direct corporate channels." },
            { q: "What areas do you operate in?", a: "We currently focus on London, Manchester, Leeds, Sheffield, and Nottingham, and assess additional UK locations on a case-by-case basis. Contact us to discuss your specific area." },
            { q: "How quickly can a property be set up?", a: "Most properties go live within a few weeks of signing, subject to compliance checks, furnishing, and any required permissions. Refurbishment-led projects take longer depending on scope." },
            { q: "What compliance and certifications do you handle?", a: "We coordinate Gas Safety certificates, Electrical Installation Condition Reports (EICRs), Energy Performance Certificates (EPCs), HMO licensing where required, and applicable council short-let registrations." },
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
