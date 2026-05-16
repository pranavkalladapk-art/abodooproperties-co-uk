import { useEffect, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowLeft, type LucideIcon } from 'lucide-react';
import logo from '@/assets/logo.png';

export type StrategyNavItem = { slug: string; title: string };

export const strategyNav: StrategyNavItem[] = [
  { slug: 'rent-to-hmo', title: 'Rent-to-HMO' },
  { slug: 'serviced-accommodation', title: 'Serviced Accommodation' },
  { slug: 'brrr-projects', title: 'BRRR Projects' },
  { slug: 'refurbishment-resale', title: 'Refurbishment & Resale' },
];

export type StrategyStep = { title: string; body: string };

export type StrategyPageProps = {
  slug: string;
  index: number; // 0-based for "Strategy 0N" label
  title: string;
  lead: string;
  Icon: LucideIcon;
  paragraphs: string[];
  benefits: string[];
  steps: StrategyStep[];
};

function StrategyNavbar({ activeSlug }: { activeSlug: string }) {
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
      <Link to="/strategies" className="flex items-center gap-2">
        <img src={logo} alt="Abodoo" style={{ height: 36, width: 'auto', display: 'block' }} />
        <span
          className="font-inter font-semibold tracking-widest text-[15px]"
          style={{ color: '#F8F6F2' }}
        >
          ABODOO
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {strategyNav.map((s) => {
          const isActive = s.slug === activeSlug;
          return (
            <Link
              key={s.slug}
              to="/strategies/$slug"
              params={{ slug: s.slug }}
              className="font-inter text-[13px] tracking-wide transition-colors"
              style={{ color: isActive ? '#c9a84c' : 'rgba(248,246,242,0.65)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive ? '#c9a84c' : 'rgba(248,246,242,0.65)')
              }
            >
              {s.title}
            </Link>
          );
        })}
      </div>

      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md"
        style={{ border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c' }}
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
                color: s.slug === activeSlug ? '#c9a84c' : 'rgba(248,246,242,0.85)',
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

function SectionWrap({
  children,
  background,
  padding = '100px max(24px, 5vw)',
}: {
  children: ReactNode;
  background?: string;
  padding?: string;
}) {
  return (
    <section style={{ padding, background, borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

export default function StrategyPageLayout({
  slug,
  index,
  title,
  lead,
  Icon,
  paragraphs,
  benefits,
  steps,
}: StrategyPageProps) {
  return (
    <main style={{ background: '#0d1117', color: '#F8F6F2', minHeight: '100vh' }}>
      <StrategyNavbar activeSlug={slug} />

      {/* Hero */}
      <section
        style={{
          padding: '160px max(24px, 5vw) 80px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08), transparent 60%), #0d1117',
        }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <Link
            to="/strategies"
            className="inline-flex items-center gap-1.5 font-inter text-[13px]"
            style={{ color: 'rgba(248,246,242,0.55)', marginBottom: 32 }}
          >
            <ArrowLeft size={14} />
            All strategies
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                border: '1px solid rgba(201,168,76,0.35)',
                color: '#c9a84c',
                marginBottom: 26,
              }}
            >
              <Icon size={26} strokeWidth={1.5} />
            </div>
            <span
              className="font-inter uppercase"
              style={{
                color: '#c9a84c',
                fontSize: 11,
                letterSpacing: '0.28em',
                marginBottom: 18,
              }}
            >
              Strategy {String(index + 1).padStart(2, '0')}
            </span>
            <h1
              className="font-playfair"
              style={{
                fontSize: 'clamp(34px, 5vw, 56px)',
                lineHeight: 1.1,
                color: '#F8F6F2',
                marginBottom: 22,
                maxWidth: 820,
              }}
            >
              {title}
            </h1>
            <p
              className="font-inter"
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'rgba(248,246,242,0.7)',
                maxWidth: 720,
              }}
            >
              {lead}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body: long-form + benefits */}
      <SectionWrap background="#0f1620">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16">
          <div className="flex flex-col" style={{ gap: 22 }}>
            <span
              className="font-inter uppercase"
              style={{ color: '#c9a84c', fontSize: 11, letterSpacing: '0.28em' }}
            >
              Overview
            </span>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-inter"
                style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(248,246,242,0.72)' }}
              >
                {p}
              </p>
            ))}
          </div>

          <aside
            style={{
              background: '#141c28',
              border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: 14,
              padding: 'clamp(24px, 3vw, 34px)',
              alignSelf: 'start',
            }}
          >
            <span
              className="font-inter uppercase block"
              style={{
                color: '#c9a84c',
                fontSize: 11,
                letterSpacing: '0.28em',
                marginBottom: 14,
              }}
            >
              Key Benefits
            </span>
            <h3
              className="font-playfair"
              style={{ fontSize: 22, color: '#F8F6F2', marginBottom: 22, lineHeight: 1.25 }}
            >
              What you get
            </h3>
            <ul className="flex flex-col" style={{ gap: 14 }}>
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-inter"
                  style={{ fontSize: 14.5, color: 'rgba(248,246,242,0.82)', lineHeight: 1.6 }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#c9a84c',
                      marginTop: 9,
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionWrap>

      {/* How it works */}
      <SectionWrap background="#0d1117">
        <div style={{ marginBottom: 48 }}>
          <span
            className="font-inter uppercase block"
            style={{
              color: '#c9a84c',
              fontSize: 11,
              letterSpacing: '0.28em',
              marginBottom: 14,
            }}
          >
            Process
          </span>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(26px, 3.4vw, 38px)',
              color: '#F8F6F2',
              lineHeight: 1.2,
              maxWidth: 640,
            }}
          >
            How it works
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 20 }}
        >
          {steps.map((s, i) => (
            <div
              key={s.title}
              style={{
                background: '#141c28',
                border: '1px solid rgba(201,168,76,0.14)',
                borderRadius: 12,
                padding: 26,
              }}
            >
              <div
                className="font-playfair"
                style={{
                  fontSize: 28,
                  color: '#c9a84c',
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3
                className="font-inter"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#F8F6F2',
                  marginBottom: 10,
                  letterSpacing: '0.01em',
                }}
              >
                {s.title}
              </h3>
              <p
                className="font-inter"
                style={{
                  fontSize: 13.5,
                  color: 'rgba(248,246,242,0.6)',
                  lineHeight: 1.7,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* CTA */}
      <SectionWrap background="#0f1620" padding="80px max(24px, 5vw)">
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          style={{
            gap: 28,
            padding: 'clamp(32px, 4vw, 52px)',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.02))',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: 16,
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h2
              className="font-playfair"
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: '#F8F6F2',
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Ready to explore {title}?
            </h2>
            <p
              className="font-inter"
              style={{ fontSize: 15, color: 'rgba(248,246,242,0.7)', lineHeight: 1.7 }}
            >
              Speak to our team for an honest assessment of how this strategy fits your goals,
              capital position, and timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 font-inter font-medium"
              style={{
                background: '#c9a84c',
                color: '#0d1117',
                padding: '14px 26px',
                borderRadius: 8,
                fontSize: 14,
                letterSpacing: '0.04em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
            <Link
              to="/strategies"
              className="inline-flex items-center gap-2 font-inter font-medium"
              style={{
                border: '1px solid rgba(201,168,76,0.45)',
                color: '#c9a84c',
                padding: '13px 24px',
                borderRadius: 8,
                fontSize: 14,
                letterSpacing: '0.04em',
              }}
            >
              <ArrowLeft size={16} />
              All strategies
            </Link>
          </div>
        </div>
      </SectionWrap>

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
          © 2025 Abodoo Properties · London, United Kingdom
        </span>
      </footer>
    </main>
  );
}
