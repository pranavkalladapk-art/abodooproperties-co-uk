import type * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import useScrollReveal from '../hooks/useScrollReveal';

const HouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14 L16 4 L28 14 V27 H4 Z" /><path d="M13 27 V19 H19 V27" /><path d="M21 11 H24 V14 H21 Z" />
  </svg>
);
const KeyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="16" r="5" /><path d="M16 16 H28" /><path d="M24 16 V20" /><path d="M28 16 V21" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20 L13 12 L18 17 L27 8" /><path d="M20 8 H27 V15" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="5" width="14" height="23" /><path d="M9 10 H11 M14 10 H16 M9 15 H11 M14 15 H16 M9 20 H11 M14 20 H16" />
    <rect x="22" y="14" width="6" height="8" /><path d="M24 16 H26 M24 19 H26" />
  </svg>
);

type Slug = 'rent-to-hmo' | 'serviced-accommodation' | 'brrr-projects' | 'refurbishment-resale';

const cards: { icon: React.ComponentType; title: string; body: string; slug: Slug }[] = [
  {
    icon: HouseIcon, title: 'Rent-to-HMO', slug: 'rent-to-hmo',
    body: 'We structure and operate properties as compliant shared accommodation, with fixed-rent agreements for the landlord.',
  },
  {
    icon: KeyIcon, title: 'Serviced Accommodation', slug: 'serviced-accommodation',
    body: 'We manage premium short-stay homes end-to-end, marketing across multiple platforms to support occupancy.',
  },
  {
    icon: ArrowIcon, title: 'BRRR Projects', slug: 'brrr-projects',
    body: 'We structure Buy, Refurbish, Rent, Refinance projects for investors focused on long-term portfolio growth.',
  },
  {
    icon: BuildingIcon, title: 'Refurbishment & Resale', slug: 'refurbishment-resale',
    body: 'We manage value-add renovation projects with fixed scopes and a defined exit modelled before exchange.',
  },
];

export default function ServicesSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="services" ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-h2">Four proven strategies. One trusted partner.</h2>
          <p className="section-sub">Every Abodoo client is matched to the strategy that maximises their property's income potential.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Link
              key={i}
              to="/strategies/$slug"
              params={{ slug: c.slug }}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col h-full"
                style={{
                  background: 'rgba(20,28,46,0.7)',
                  border: '1px solid rgba(198,169,107,0.08)',
                  borderRadius: 14,
                  padding: 32,
                  transition: 'all 350ms cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,107,0.35)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 24px 50px -28px rgba(198,169,107,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,107,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <c.icon />
                <h3 className="font-playfair text-[22px] text-ivory" style={{ marginTop: 24, marginBottom: 14 }}>{c.title}</h3>
                <p className="font-inter text-[14.5px]" style={{ color: 'rgba(248,246,242,0.82)', lineHeight: 1.7, marginBottom: 24 }}>{c.body}</p>
                <span className="inline-flex items-center gap-2 font-inter text-[14px] text-gold group-hover:gap-3 transition-all mt-auto">
                  Explore {c.title}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center" style={{ marginTop: 48 }}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-inter text-[14px] text-gold hover:gap-3 transition-all"
            style={{
              border: '1px solid rgba(198,169,107,0.45)',
              padding: '13px 26px',
              borderRadius: 8,
              letterSpacing: '0.04em',
            }}
          >
            View all services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
