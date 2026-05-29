import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPage from '@/components/LegalPage';

const URL = 'https://abodooproperties.co.uk/terms';

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service — Abodoo Properties' },
      { name: 'description', content: 'Terms governing the use of the Abodoo Properties website and any indicative information provided.' },
      { property: 'og:title', content: 'Terms of Service — Abodoo Properties' },
      { property: 'og:description', content: 'Terms governing the use of the Abodoo Properties website and any indicative information provided.' },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: () => (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms govern your use of the Abodoo Properties website."
        sections={[
          { h: 'Indicative information', p: 'Income figures, returns, and example properties shown on this site are illustrative only. They are not offers, guarantees, or financial advice. Any agreement is subject to a separate written contract.' },
          { h: 'No financial advice', p: 'Nothing on this site constitutes financial, investment, tax, or legal advice. You should take independent professional advice before entering into any property arrangement.' },
          { h: 'Use of the site', p: 'You agree to use this site lawfully and not to misuse the contact forms, content, or imagery published here.' },
        ]}
      />
      <Footer />
    </main>
  ),
});
