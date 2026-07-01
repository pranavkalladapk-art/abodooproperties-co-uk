import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  Home,
  KeyRound,
  TrendingUp,
  Building2,
  Compass,
  Target,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import logo from '@/assets/logo.png';

const PAGE_URL = 'https://abodooproperties.co.uk/services';
const PAGE_TITLE = 'Our Services — Abodoo Properties';
const PAGE_DESC =
  'Four proven UK property strategies — Rent-to-HMO, Serviced Accommodation, BRRR Projects, and Refurbishment & Resale — operated end-to-end by Abodoo Properties.';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: 'description', content: PAGE_DESC },
      { property: 'og:title', content: PAGE_TITLE },
      { property: 'og:description', content: PAGE_DESC },
      { property: 'og:url', content: PAGE_URL },
    ],
    links: [{ rel: 'canonical', href: PAGE_URL }],
  }),
  component: ServicesPage,
});

const BG = '#0d1117';
const SURFACE = '#141c28';
const GOLD = '#c9a84c';
const TEXT = '#F8F6F2';
const MUTED = '#9aa3b2';

type Service = {
  slug: 'rent-to-hmo' | 'serviced-accommodation' | 'brrr-projects' | 'refurbishment-resale';
  title: string;
  Icon: LucideIcon;
  description: string;
  highlights: string[];
};

const services: Service[] = [
  {
    slug: 'rent-to-hmo',
    title: 'Rent-to-HMO',
    Icon: Home,
    description:
      "Transforming standard properties into high-yield shared accommodation. We lease, operate, and manage each home as a fully compliant HMO so owners earn above-market rent with zero day-to-day involvement.",
    highlights: [
      'Fixed-rent agreements above standard AST rates, subject to suitability',
      'Full HMO licensing, compliance, and inspections handled',
      'Vetted professional tenants and ongoing management',
    ],
  },
  {
    slug: 'serviced-accommodation',
    title: 'Serviced Accommodation',
    Icon: KeyRound,
    description:
      'Premium short-term rentals operated like a boutique hotel — listed across Booking.com, Airbnb, and direct corporate channels. Hotel-grade housekeeping and dynamic pricing drive consistently high occupancy.',
    highlights: [
      'Potential for higher gross income vs. long-let, depending on location and demand',
      'Multi-channel listings with dynamic revenue management',
      'Cleaning, linen, guest support, and insurance included',
    ],
  },
  {
    slug: 'brrr-projects',
    title: 'BRRR Projects',
    Icon: TrendingUp,
    description:
      'Buy, Refurbish, Rent, Refinance — a proven framework for compounding a leveraged UK portfolio. We source under-valued stock, add value through refurbishment, and recycle capital into the next deal.',
    highlights: [
      'Sourced, refurbished, and tenanted by one team',
      'Capital recycled through refinance for compound growth',
      'Transparent monthly reporting on every project',
    ],
  },
  {
    slug: 'refurbishment-resale',
    title: 'Refurbishment & Resale',
    Icon: Building2,
    description:
      'Value-add renovation projects engineered for a clean exit. Every acquisition is modelled against a defined sale before contracts exchange — fixed-price scopes and weekly reporting keep projects predictable.',
    highlights: [
      'End-to-end project management — no operational burden',
      'Vetted contractors and fixed-price scopes of work',
      'Each project underwritten to a target return range agreed before exchange',
    ],
  },
];

const process: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Compass,
    title: 'Discover',
    body: 'A short consultation to understand your capital position, timeline, and income vs. growth goals.',
  },
  {
    Icon: Target,
    title: 'Match',
    body: 'We recommend the strategy — or blend of strategies — that best fits your circumstances and risk profile.',
  },
  {
    Icon: Wrench,
    title: 'Manage',
    body: 'Our in-house team executes the plan end-to-end: sourcing, refurb, lettings, compliance, and reporting.',
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: 72,
        padding: '0 max(20px, 4vw)',
        background: 'rgba(13,17,23,0.85)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(201,168,76,0.14)',
      }}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-inter text-[13px]"
        style={{ color: 'rgba(248,246,242,0.75)' }}
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <Link to="/services" className="flex items-center gap-2">
        <img src={logo} alt="Abodoo" style={{ height: 36, width: 'auto', display: 'block' }} />
        <span
          className="font-inter font-semibold tracking-widest text-[15px]"
          style={{ color: TEXT }}
        >
          ABODOO
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-7">
        <Link
          to="/services"
          className="font-inter text-[13px] tracking-wide"
          style={{ color: GOLD }}
        >
          Services
        </Link>
        <Link
          to="/strategies"
          className="font-inter text-[13px] tracking-wide"
          style={{ color: 'rgba(248,246,242,0.85)' }}
        >
          Strategies
        </Link>
        <Link
          to="/"
          hash="contact"
          className="font-inter text-[13px] tracking-wide"
          style={{ color: 'rgba(248,246,242,0.85)' }}
        >
          Contact
        </Link>
      </div>

      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md"
        style={{ border: '1px solid rgba(201,168,76,0.3)', color: GOLD }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          className="md:hidden absolute left-0 right-0 top-full flex flex-col"
          style={{
            background: 'rgba(13,17,23,0.98)',
            borderBottom: '1px solid rgba(201,168,76,0.14)',
          }}
        >
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="font-inter text-[15px] px-6 py-4 border-b"
            style={{ color: GOLD, borderColor: 'rgba(201,168,76,0.08)' }}
          >
            Services
          </Link>
          <Link
            to="/strategies"
            onClick={() => setOpen(false)}
            className="font-inter text-[15px] px-6 py-4 border-b"
            style={{ color: 'rgba(248,246,242,0.85)', borderColor: 'rgba(201,168,76,0.08)' }}
          >
            Strategies
          </Link>
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="font-inter text-[15px] px-6 py-4"
            style={{ color: 'rgba(248,246,242,0.85)' }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-inter uppercase"
      style={{ color: GOLD, fontSize: 11, letterSpacing: '0.28em' }}
    >
      {children}
    </span>
  );
}

function Section({
  children,
  background,
  padding = '100px max(24px, 5vw)',
  divider = true,
}: {
  children: React.ReactNode;
  background?: string;
  padding?: string;
  divider?: boolean;
}) {
  return (
    <section
      style={{
        padding,
        background,
        borderTop: divider ? '1px solid rgba(201,168,76,0.1)' : undefined,
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function ServicesPage() {
  return (
    <main style={{ background: BG, color: TEXT, minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          padding: '160px max(24px, 5vw) 80px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08), transparent 60%), #0d1117',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <Eyebrow>Our Services</Eyebrow>
            <h1
              className="font-playfair"
              style={{
                fontSize: 'clamp(38px, 5.6vw, 62px)',
                lineHeight: 1.08,
                color: TEXT,
                margin: '20px 0 22px',
                maxWidth: 880,
              }}
            >
              Four proven strategies. One trusted partner.
            </h1>
            <p
              className="font-inter"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: MUTED,
                maxWidth: 720,
              }}
            >
              Every Abodoo client is matched to the strategy that maximises their property&rsquo;s
              income potential. From hands-off Rent-to-HMO to end-to-end resale projects, we
              operate each model in-house — sourcing, compliance, lettings, and reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <Section background="#0f1620">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
          {services.map(({ slug, title, Icon, description, highlights }) => (
            <div
              key={slug}
              className="flex flex-col"
              style={{
                background: SURFACE,
                border: '1px solid rgba(201,168,76,0.16)',
                borderRadius: 16,
                padding: 'clamp(28px, 3vw, 38px)',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: GOLD,
                  marginBottom: 22,
                }}
              >
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h2
                className="font-playfair"
                style={{ fontSize: 26, color: TEXT, marginBottom: 14, lineHeight: 1.25 }}
              >
                {title}
              </h2>
              <p
                className="font-inter"
                style={{
                  fontSize: 15,
                  color: MUTED,
                  lineHeight: 1.75,
                  marginBottom: 22,
                }}
              >
                {description}
              </p>
              <ul className="flex flex-col" style={{ gap: 12, marginBottom: 28 }}>
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 font-inter"
                    style={{ fontSize: 14, color: 'rgba(248,246,242,0.82)', lineHeight: 1.6 }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: GOLD,
                        marginTop: 8,
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to="/strategies/$slug"
                params={{ slug }}
                className="inline-flex items-center gap-2 font-inter text-[14px] mt-auto"
                style={{ color: GOLD }}
              >
                Learn more
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* How we work with you */}
      <Section background={BG}>
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>How we work with you</Eyebrow>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 40px)',
              color: TEXT,
              lineHeight: 1.15,
              marginTop: 14,
              maxWidth: 640,
            }}
          >
            A simple three-step engagement.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {process.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              style={{
                background: SURFACE,
                border: '1px solid rgba(201,168,76,0.14)',
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    border: '1px solid rgba(201,168,76,0.35)',
                    color: GOLD,
                  }}
                >
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <span
                  className="font-playfair"
                  style={{ fontSize: 24, color: GOLD, lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3
                className="font-playfair"
                style={{ fontSize: 20, color: TEXT, marginBottom: 10, lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                className="font-inter"
                style={{ fontSize: 14, color: MUTED, lineHeight: 1.7 }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA banner */}
      <Section background="#0f1620" padding="80px max(24px, 5vw)">
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          style={{
            gap: 28,
            padding: 'clamp(32px, 4vw, 52px)',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.14), rgba(201,168,76,0.02))',
            border: `1px solid ${GOLD}`,
            borderRadius: 16,
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h2
              className="font-playfair"
              style={{
                fontSize: 'clamp(26px, 3.2vw, 34px)',
                color: TEXT,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Not sure which strategy fits?
            </h2>
            <p
              className="font-inter"
              style={{ fontSize: 15, color: MUTED, lineHeight: 1.7 }}
            >
              Book a free 20-minute consultation. We&rsquo;ll review your goals and recommend the
              right service — even if that means doing nothing right now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 font-inter font-medium"
              style={{
                background: GOLD,
                color: BG,
                padding: '14px 26px',
                borderRadius: 8,
                fontSize: 14,
                letterSpacing: '0.04em',
              }}
            >
              Book a consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-inter font-medium"
              style={{
                border: `1px solid rgba(201,168,76,0.45)`,
                color: GOLD,
                padding: '13px 24px',
                borderRadius: 8,
                fontSize: 14,
                letterSpacing: '0.04em',
              }}
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </div>
      </Section>

      <footer
        style={{
          padding: '40px max(24px, 5vw)',
          background: '#060e1c',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          textAlign: 'center',
        }}
        className="font-inter text-[13px]"
      >
        <span style={{ color: 'rgba(248,246,242,0.7)' }}>
          &copy; 2026 Abodoo Properties &middot; London, United Kingdom
        </span>
      </footer>
    </main>
  );
}
