import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/how";

export const Route = createFileRoute("/how")({
  head: () => ({
    meta: [
      { title: "How It Works — Abodoo Properties" },
      { name: "description", content: "Our simple, transparent process for turning your UK property into a high-performing income asset." },
      { property: "og:title", content: "How It Works — Abodoo Properties" },
      { property: "og:description", content: "Our simple, transparent process for turning your UK property into a high-performing income asset." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <div style={{ paddingTop: 74 }}>
        <HowItWorksSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
