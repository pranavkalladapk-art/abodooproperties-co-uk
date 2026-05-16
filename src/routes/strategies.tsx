import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, KeyRound, TrendingUp, Building2, Menu, X, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/strategies')({
  component: StrategiesPage,
  head: () => ({
    meta: [
      { title: 'Our Investment Strategies — Abodoo Properties' },
      {
        name: 'description',
        content:
          'Explore Abodoo Properties\' four UK property investment strategies: Rent-to-HMO, Serviced Accommodation, BRRR Projects, and Refurbishment & Resale.',
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
  id: string;
  title: string;
  short: string;
  long: string;
  benefits: string[];
  Icon: typeof Home;
};

const strategies: Strategy[] = [
  {
    id: 'rent-to-hmo',
    title: 'Rent-to-HMO',
    short:
      'Transforming properties into high-yield shared accommodation for stronger monthly cash flow.',
    long:
      'We lease quality properties from landlords and convert them into professionally managed Houses in Multiple Occupation. Each room is fitted to a premium standard and let to vetted working professionals. Owners receive a guaranteed monthly rent — typically well above standard AST market rates — with zero day-to-day management. We handle compliance, tenants, bills, and maintenance.',
    benefits: [
      'Guaranteed monthly income above market AST rates',
      'Full HMO licensing, compliance, and inspections handled',
      'Professional tenant sourcing and ongoing management',
      'Property handed back in agreed condition at term end',
    ],
    Icon: Home,
  },
  {
    id: 'serviced-accommodation',
    title: 'Serviced Accommodation',
    short:
      'Premium short-term rental solutions designed for higher occupancy and increased returns.',
    long:
      'We operate your property as a high-end serviced apartment — listed on Booking.com, Airbnb, and direct corporate channels. Dynamic pricing, hotel-grade housekeeping, and 24/7 guest support drive consistently high occupancy. You receive predictable monthly income while the property earns nightly rates several times higher than a long-term let.',
    benefits: [
      'Significantly higher gross income vs. standard tenancy',
      'Hotel-grade cleaning, linen, and guest communication',
      'Multi-channel listings with dynamic revenue management',
      'Full insurance and damage protection in place',
    ],
    Icon: KeyRound,
  },
  {
    id: 'brrr-projects',
    title: 'BRRR Projects',
    short:
      'Buy, refurbish, rent, and refinance strategies focused on long-term portfolio growth.',
    long:
      'Our BRRR pipeline targets under-valued UK stock with clear uplift potential. We acquire, refurbish to a high specification, tenant the property, then refinance against the new valuation to recycle capital into the next deal. This is a proven route for investors looking to build a leveraged income portfolio with minimal locked-in capital.',
    benefits: [
      'Sourced, refurbished, and tenanted by one team',
      'Capital recycled through refinance — compound growth',
      'Targeting 8–12% ROI on retained capital',
      'Transparent monthly reporting on every project',
    ],
    Icon: TrendingUp,
  },
  {
    id: 'refurbishment-resale',
    title: 'Refurbishment & Resale',
    short:
      'Value-add renovation projects designed to maximise resale profit and investment potential.',
    long:
      'We identify properties where a structured refurbishment unlocks a meaningful uplift in market value. From light cosmetic refreshes to full structural reconfiguration, our in-house team delivers projects on time and on budget. Once complete, we list and sell through trusted partner agents — usually inside 4–8 months from acquisition.',
    benefits: [
      'End-to-end project management — no operational burden',
      'Vetted contractors and fixed-price scopes of work',
      'Target net returns of 15–25% per project cycle',
      'Exit strategy planned before acquisition completes',
    ],
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
        <a href="#top" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center"
            style={{
              width: 32,
              height: 32,
              border: '1.5px solid #c9a84c',
              borderRadius: 6,
              color: '#c9a84c',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
            }}
          >
            A
          </div>
          <span
            className="font-inter font-semibold tracking-widest text-[15px]"
            style={{ color: '#F8F6F2' }}
          >
            ABODOO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {strategies.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-inter text-[13px] tracking-wide transition-colors"
              style={{ color: 'rgba(248,246,242,0.65)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.65)')}
            >
              {s.title}
            </a>
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
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="font-inter text-[15px] px-6 py-4 border-b"
                style={{
                  color: 'rgba(248,246,242,0.85)',
                  borderColor: 'rgba(201,168,76,0.08)',
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          padding: '180px max(24px, 5vw) 100px',
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
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col text-left"
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
            </motion.a>
          ))}
        </div>
      </section>

      {/* Dedicated sections */}
      {strategies.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: '100px max(24px, 5vw)',
            background: i % 2 === 0 ? '#0d1117' : '#0f1620',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            scrollMarginTop: 90,
          }}
        >
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                border: '1px solid rgba(201,168,76,0.35)',
                color: '#c9a84c',
                marginBottom: 28,
              }}
            >
              <s.Icon size={26} strokeWidth={1.5} />
            </div>
            <span
              className="font-inter uppercase"
              style={{
                color: '#c9a84c',
                fontSize: 11,
                letterSpacing: '0.28em',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Strategy {String(i + 1).padStart(2, '0')}
            </span>
            <h2
              className="font-playfair"
              style={{
                fontSize: 'clamp(30px, 4vw, 46px)',
                lineHeight: 1.15,
                color: '#F8F6F2',
                marginBottom: 24,
              }}
            >
              {s.title}
            </h2>
            <p
              className="font-inter"
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: 'rgba(248,246,242,0.7)',
                marginBottom: 36,
                maxWidth: 720,
              }}
            >
              {s.long}
            </p>

            <ul className="flex flex-col" style={{ gap: 14, marginBottom: 44 }}>
              {s.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-inter"
                  style={{ fontSize: 15, color: 'rgba(248,246,242,0.82)', lineHeight: 1.6 }}
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

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 font-inter font-medium transition-all"
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
          </div>
        </section>
      ))}

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
