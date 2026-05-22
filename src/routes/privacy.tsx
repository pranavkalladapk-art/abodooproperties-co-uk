import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalPage from '@/components/LegalPage';

const URL = 'https://abodoo-zenith.lovable.app/privacy';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Abodoo Properties' },
      { name: 'description', content: 'How Abodoo Properties handles personal data submitted through this website.' },
      { property: 'og:title', content: 'Privacy Policy — Abodoo Properties' },
      { property: 'og:description', content: 'How Abodoo Properties handles personal data submitted through this website.' },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: () => (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This page describes how Abodoo Properties collects, uses, and protects personal data submitted through this website."
        sections={[
          { h: 'Information we collect', p: 'When you submit an enquiry, we collect the contact details and property information you provide so we can respond to your request.' },
          { h: 'How we use it', p: 'We use your information solely to respond to your enquiry, provide assessments, and — where you have agreed — send relevant follow-up communications. We do not sell personal data.' },
          { h: 'Your rights', p: 'You may request access to, correction of, or deletion of your personal data at any time by contacting Info@abodooproperties.co.uk.' },
        ]}
      />
      <Footer />
    </main>
  ),
});
