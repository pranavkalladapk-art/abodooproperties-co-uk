import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPage from '@/components/LegalPage';

const URL = 'https://abodoo-zenith.lovable.app/cookies';

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: 'Cookies — Abodoo Properties' },
      { name: 'description', content: 'How Abodoo Properties uses cookies and similar technologies on this website.' },
      { property: 'og:title', content: 'Cookies — Abodoo Properties' },
      { property: 'og:description', content: 'How Abodoo Properties uses cookies and similar technologies on this website.' },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: () => (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <LegalPage
        eyebrow="Legal"
        title="Cookies"
        intro="This page explains how cookies and similar technologies are used on the Abodoo Properties website."
        sections={[
          { h: 'Essential cookies', p: 'We use a small number of essential cookies that are required for the site to function correctly.' },
          { h: 'Analytics', p: 'We may use aggregated analytics to understand how visitors interact with the site so we can improve it. No identifying personal information is shared with third parties for marketing.' },
          { h: 'Your choices', p: 'You can control or delete cookies through your browser settings at any time.' },
        ]}
      />
      <Footer />
    </main>
  ),
});
