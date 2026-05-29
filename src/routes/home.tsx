import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/home";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Home — Abodoo Properties" },
      { name: "description", content: "Abodoo Properties turns UK homes into high-performing income assets through guaranteed Rent-to-SA, strategic flips, and full-service management." },
      { property: "og:title", content: "Home — Abodoo Properties" },
      { property: "og:description", content: "Guaranteed monthly income, expert management, and proven flip returns across the United Kingdom." },
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
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
