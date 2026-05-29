import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abodoo Properties" },
      { name: "description", content: "Get in touch with Abodoo Properties for a free assessment of your UK property income potential." },
      { property: "og:title", content: "Contact — Abodoo Properties" },
      { property: "og:description", content: "Get in touch with Abodoo Properties for a free assessment of your UK property income potential." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <div style={{ paddingTop: 74 }}>
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
