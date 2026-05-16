import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  Home,
  Wallet,
  Zap,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  Check,
  Minus,
  Phone,
} from 'lucide-react';
import logo from '@/assets/logo.png';
import { strategyNav } from '@/components/StrategyPageLayout';

const PAGE_URL = 'https://abodoo-zenith.lovable.app/strategies/rent-to-hmo';
const PAGE_TITLE = 'Rent-to-HMO — Abodoo Properties';
const PAGE_DESC =
  "One of the UK's most powerful cash flow strategies — lease, sublet by the room, and generate £500–£2,000+ per month per property without ownership.";

export const Route = createFileRoute('/strategies_/rent-to-hmo')({
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
  component: RentToHmoPage,
});

const BG = '#0d1117';
const SURFACE = '#141c28';
const GOLD = '#c9a84c';
const TEXT = '#F8F6F2';
const MUTED = '#9aa3b2';

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

      <Link to="/strategies" className="hidden sm:flex items-center gap-2">
        <img src={logo} alt="Abodoo" style={{ height: 36, width: 'auto', display: 'block' }} />
        <span
          className="font-inter font-semibold tracking-widest text-[15px]"
          style={{ color: TEXT }}
        >
          ABODOO
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-7">
        {strategyNav.map((s) => {
          const isActive = s.slug === 'rent-to-hmo';
          return (
            <Link
              key={s.slug}
              to="/strategies/$slug"
              params={{ slug: s.slug }}
              className="font-inter text-[13px] tracking-wide"
              style={{ color: isActive ? GOLD : 'rgba(248,246,242,0.65)' }}
            >
              {s.title}
            </Link>
          );
        })}
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
          {strategyNav.map((s) => (
            <Link
              key={s.slug}
              to="/strategies/$slug"
              params={{ slug: s.slug }}
              onClick={() => setOpen(false)}
              className="font-inter text-[15px] px-6 py-4 border-b"
              style={{
                color: s.slug === 'rent-to-hmo' ? GOLD : 'rgba(248,246,242,0.85)',
                borderColor: 'rgba(201,168,76,0.08)',
              }}
            >
              {s.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

const benefits = [
  { Icon: Home, title: 'No mortgage needed', body: 'Control a property and generate income without buying it.' },
  { Icon: Wallet, title: 'Strong cash flow', body: 'Monthly profits from the rent-to-rent spread across multiple rooms.' },
  { Icon: Zap, title: 'Fast to implement', body: 'Deals can be secured and generating income within weeks.' },
  { Icon: ClipboardList, title: 'Low capital required', body: 'Start with a fraction of what property purchase would cost.' },
  { Icon: ShieldCheck, title: 'Landlord security', body: 'Landlords receive guaranteed rent — a true win-win arrangement.' },
  { Icon: TrendingUp, title: 'Scalable model', body: 'Replicate across multiple properties to build a portfolio fast.' },
];

const steps = [
  'Find a suitable property with 3+ bedrooms.',
  'Negotiate a lease agreement with the landlord (typically 2–5 years).',
  'Obtain correct HMO licencing if required by the council.',
  'Refurbish and furnish rooms to a high standard.',
  'Market and fill rooms with quality tenants.',
  'Collect rent, pay the landlord, keep the difference.',
];

const fitYes = [
  'You want cash flow without a mortgage',
  'You have time to manage tenants — or a team to do it',
  'You can invest £5k–£20k in setup costs',
  'You\u2019re focused on income over capital growth',
];

const fitNo = [
  'You want to own the underlying asset',
  'You prefer a fully hands-off investment',
  'You\u2019re not comfortable with tenant management',
];

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

function GoldButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
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
      {children}
    </a>
  );
}

function OutlineButton({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
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
      {children}
    </Link>
  );
}

function RentToHmoPage() {
  return (
    <main style={{ background: BG, color: TEXT, minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          padding: '160px max(24px, 5vw) 90px',
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
            <Eyebrow>Investment Strategy</Eyebrow>
            <h1
              className="font-playfair"
              style={{
                fontSize: 'clamp(40px, 6vw, 68px)',
                lineHeight: 1.05,
                color: TEXT,
                margin: '20px 0 22px',
                maxWidth: 820,
              }}
            >
              Rent-to-HMO
            </h1>
            <p
              className="font-inter"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: MUTED,
                maxWidth: 720,
                marginBottom: 36,
              }}
            >
              One of the UK&rsquo;s most powerful cash flow strategies for property investors
              seeking strong monthly returns without purchasing assets.
            </p>
            <div>
              <GoldButton href="/#contact">
                <Phone size={16} />
                Book a Consultation
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Rent-to-HMO? */}
      <Section background="#0f1620">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2
              className="font-playfair"
              style={{
                fontSize: 'clamp(28px, 3.6vw, 40px)',
                lineHeight: 1.15,
                color: TEXT,
                marginTop: 14,
              }}
            >
              What is Rent-to-HMO?
            </h2>
          </div>
          <div className="flex flex-col" style={{ gap: 20 }}>
            <p className="font-inter" style={{ fontSize: 16, lineHeight: 1.85, color: MUTED }}>
              Rent-to-HMO involves leasing a property from a landlord at a fixed monthly rent,
              then legally subletting individual rooms to multiple tenants. The investor acts as
              the master tenant, managing the property as a House in Multiple Occupation (HMO).
            </p>
            <p className="font-inter" style={{ fontSize: 16, lineHeight: 1.85, color: MUTED }}>
              The difference between the room rents collected and the fixed lease cost is the
              investor&rsquo;s profit &mdash; often generating &pound;500&ndash;&pound;2,000+ per
              month per property without ownership.
            </p>
            <p className="font-inter" style={{ fontSize: 16, lineHeight: 1.85, color: MUTED }}>
              For landlords, the model delivers guaranteed monthly rent and a professionally
              maintained property. For investors, it&rsquo;s one of the fastest routes to
              meaningful, recurring cash flow in UK property &mdash; without tying up large
              amounts of capital.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background={BG}>
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>Why investors choose it</Eyebrow>
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
            Key benefits
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 20 }}
        >
          {benefits.map(({ Icon, title, body }) => (
            <div
              key={title}
              style={{
                background: SURFACE,
                border: '1px solid rgba(201,168,76,0.16)',
                borderRadius: 14,
                padding: 28,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: GOLD,
                  marginBottom: 20,
                }}
              >
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <h3
                className="font-playfair"
                style={{ fontSize: 19, color: TEXT, marginBottom: 10, lineHeight: 1.3 }}
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

      {/* How it works — timeline */}
      <Section background="#0f1620">
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>Process</Eyebrow>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 40px)',
              color: TEXT,
              lineHeight: 1.15,
              marginTop: 14,
            }}
          >
            How it works
          </h2>
        </div>

        <ol className="flex flex-col" style={{ gap: 0, position: 'relative' }}>
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex items-start gap-5"
              style={{
                padding: '20px 0',
                borderBottom:
                  i === steps.length - 1 ? 'none' : '1px solid rgba(201,168,76,0.1)',
              }}
            >
              <div
                className="flex items-center justify-center font-playfair shrink-0"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  border: `1px solid ${GOLD}`,
                  color: GOLD,
                  fontSize: 18,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p
                className="font-inter"
                style={{
                  fontSize: 16,
                  color: 'rgba(248,246,242,0.85)',
                  lineHeight: 1.6,
                  paddingTop: 11,
                }}
              >
                {s}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Is this right for you */}
      <Section background={BG}>
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>Fit</Eyebrow>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 40px)',
              color: TEXT,
              lineHeight: 1.15,
              marginTop: 14,
            }}
          >
            Is this right for you?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 24 }}>
          <div
            style={{
              background: SURFACE,
              border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: 14,
              padding: 32,
            }}
          >
            <h3
              className="font-playfair"
              style={{ fontSize: 22, color: TEXT, marginBottom: 20 }}
            >
              This works well if&hellip;
            </h3>
            <ul className="flex flex-col" style={{ gap: 14 }}>
              {fitYes.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 font-inter"
                  style={{ fontSize: 15, color: 'rgba(248,246,242,0.82)', lineHeight: 1.6 }}
                >
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.15)',
                      color: GOLD,
                      marginTop: 2,
                    }}
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: SURFACE,
              border: '1px solid rgba(248,246,242,0.08)',
              borderRadius: 14,
              padding: 32,
            }}
          >
            <h3
              className="font-playfair"
              style={{ fontSize: 22, color: TEXT, marginBottom: 20 }}
            >
              This may not suit you if&hellip;
            </h3>
            <ul className="flex flex-col" style={{ gap: 14 }}>
              {fitNo.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 font-inter"
                  style={{ fontSize: 15, color: MUTED, lineHeight: 1.6 }}
                >
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'rgba(248,246,242,0.06)',
                      color: MUTED,
                      marginTop: 2,
                    }}
                  >
                    <Minus size={13} strokeWidth={2.5} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
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
              Ready to explore Rent-to-HMO?
            </h2>
            <p
              className="font-inter"
              style={{ fontSize: 15, color: MUTED, lineHeight: 1.7 }}
            >
              We source, set up and manage Rent-to-HMO deals on your behalf. Book a free
              strategy call to find out if this model fits your goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <GoldButton href="/#contact">
              Book a Free Call
              <ArrowRight size={16} />
            </GoldButton>
            <OutlineButton to="/strategies">
              <ArrowLeft size={16} />
              View Other Strategies
            </OutlineButton>
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
        <span style={{ color: 'rgba(248,246,242,0.42)' }}>
          &copy; 2025 Abodoo Properties &middot; London, United Kingdom
        </span>
      </footer>
    </main>
  );
}
