import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Abodoo Properties" },
      { name: "description", content: "Answers to common questions about Rent-to-SA, compliance, income, and how Abodoo Properties operates across the UK." },
      { property: "og:title", content: "FAQ — Abodoo Properties" },
      { property: "og:description", content: "Answers to common questions about Rent-to-SA, compliance, income, and how Abodoo Properties operates across the UK." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <div style={{ paddingTop: 74 }}>
        <FAQSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
