import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, KeyRound, TrendingUp, Building2, Menu, X, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Route = createFileRoute('/strategies')({
  component: StrategiesPage,
  head: () => ({
    meta: [
      { title: 'Our Investment Strategies — Abodoo Properties' },
      {
        name: 'description',
        content:
          "Abodoo Properties' four UK property investment strategies: Rent-to-HMO, Serviced Accommodation, BRRR Projects, and Refurbishment & Resale.",
      },
      { property: 'og:title', content: 'Our Investment Strategies — Abodoo Properties' },
      {
        property: 'og:description',
        content:
          'High-yield UK property strategies — HMO, Serviced Accommodation, BRRR, and refurb-and-resale projects.',
      },
    ],
  }),
});

type Strategy = {
  slug: string;
  title: string;
  short: string;
  Icon: typeof Home;
};

const strategies: Strategy[] = [
  {
    slug: 'rent-to-hmo',
    title: 'Rent-to-HMO',
    short:
      'Transforming properties into high-yield shared accommodation for stronger monthly cash flow.',
    Icon: Home,
  },
  {
    slug: 'serviced-accommodation',
    title: 'Serviced Accommodation',
    short:
      'Premium short-term rental solutions designed for higher occupancy and increased returns.',
    Icon: KeyRound,
  },
  {
    slug: 'brrr-projects',
    title: 'BRRR Projects',
    short:
      'Buy, refurbish, rent, and refinance strategies focused on long-term portfolio growth.',
    Icon: TrendingUp,
  },
  {
    slug: 'refurbishment-resale',
    title: 'Refurbishment & Resale',
    short:
      'Value-add renovation projects designed to maximise resale profit and investment potential.',
    Icon: Building2,
  },
];

function StrategiesPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <main style={{ background: '#0d1117', color: '#F8F6F2', minHeight: '100vh' }}>
      {/* Navbar */}
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
          {strategies.map((s) => (
            <Link
              key={s.slug}
              to="/strategies/$slug"
              params={{ slug: s.slug }}
              className="font-inter text-[13px] tracking-wide transition-colors"
              style={{ color: 'rgba(248,246,242,0.65)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.65)')}
            >
              {s.title}
            </Link>
          ))}
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
            {strategies.map((s) => (
              <Link
                key={s.slug}
                to="/strategies/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="font-inter text-[15px] px-6 py-4 border-b"
                style={{
                  color: 'rgba(248,246,242,0.85)',
                  borderColor: 'rgba(201,168,76,0.08)',
                }}
              >
                {s.title}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          padding: '180px max(24px, 5vw) 120px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08), transparent 60%), #0d1117',
        }}
      >
        <span
          className="font-inter uppercase"
          style={{
            color: '#c9a84c',
            fontSize: 11,
            letterSpacing: '0.28em',
            marginBottom: 22,
          }}
        >
          Investment Strategies
        </span>
        <h1
          className="font-playfair"
          style={{
            fontSize: 'clamp(36px, 5.4vw, 60px)',
            lineHeight: 1.1,
            color: '#F8F6F2',
            maxWidth: 820,
            marginBottom: 22,
          }}
        >
          Our Investment Strategies
        </h1>
        <p
          className="font-inter"
          style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: 'rgba(248,246,242,0.65)',
            maxWidth: 640,
          }}
        >
          Four proven routes to building dependable UK property income — each tailored to your goals,
          capital position, and appetite for involvement.
        </p>

        {/* Cards */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 20, maxWidth: 1200, marginTop: 72 }}
        >
          {strategies.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/strategies/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col text-left h-full"
                style={{
                  background: '#141c28',
                  border: '1px solid rgba(201,168,76,0.16)',
                  borderRadius: 14,
                  padding: 'clamp(20px, 2.5vw, 32px)',
                  transition: 'all 350ms cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 24px 50px -28px rgba(201,168,76,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.16)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    border: '1px solid rgba(201,168,76,0.35)',
                    color: '#c9a84c',
                    marginBottom: 22,
                  }}
                >
                  <s.Icon size={22} strokeWidth={1.5} />
                </div>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: '#F8F6F2',
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-inter"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(248,246,242,0.55)',
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {s.short}
                </p>
                <span
                  className="font-inter inline-flex items-center gap-1.5"
                  style={{
                    color: '#c9a84c',
                    fontSize: 13,
                    letterSpacing: '0.04em',
                    fontWeight: 500,
                  }}
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

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
