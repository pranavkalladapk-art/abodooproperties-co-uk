import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const HouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14 L16 4 L28 14 V27 H4 Z" /><path d="M13 27 V19 H19 V27" /><path d="M21 11 H24 V14 H21 Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 24 L24 8" /><path d="M16 8 H24 V16" /><circle cx="9" cy="26" r="2.5" /><circle cx="13" cy="28" r="2.5" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="5" width="14" height="23" /><path d="M9 10 H11 M14 10 H16 M9 15 H11 M14 15 H16 M9 20 H11 M14 20 H16" />
    <rect x="22" y="14" width="6" height="8" /><path d="M24 16 H26 M24 19 H26" />
  </svg>
);

const cards = [
  {
    pill: 'STRATEGY 01', icon: HouseIcon, title: 'Rent to Serviced Accommodation',
    body: 'We lease your property on a guaranteed fixed rent and operate it as a premium serviced apartment. You receive reliable monthly income — we handle everything else.',
    list: ['Guaranteed rent regardless of occupancy', 'We furnish, list, and manage all operations', 'Signed lease agreements: 3–5 year terms', 'No tenants, no void periods, no hassle'],
    badge: 'Guaranteed rent · No voids · Hands-free', link: 'Learn more about R2SA →',
  },
  {
    pill: 'STRATEGY 02', icon: ArrowIcon, title: 'Strategic Property Flipping',
    body: 'We identify undervalued properties, refurbish to high specification, and sell at significant uplift — typically within 4 to 8 months. Joint ventures with investors welcome.',
    list: ['Off-market and below-market-value sourcing', 'Full refurb managed to budget and timeline', '15–30% ROI typical per project', 'Joint venture structures available'],
    badge: '15–30% ROI · 4–8 month cycle · JV welcome', link: 'Explore flip opportunities →',
  },
  {
    pill: 'STRATEGY 03', icon: BuildingIcon, title: 'Full-Service Property Management',
    body: 'We handle tenants, maintenance, compliance, inspections, and rent collection — so you can step back completely and receive consistent monthly income.',
    list: ['Tenant sourcing, referencing, move-in management', '24/7 maintenance coordination', 'Rent collection and arrears handling', 'Gas Safe, EICR, EPC, HMO compliance'],
    badge: 'Full compliance · 24/7 support · Fixed fee', link: 'See management packages →',
  },
];

export default function ServicesSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="services" ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-h2">Three proven strategies. One trusted partner.</h2>
          <p className="section-sub">Every Abodoo client is matched to the strategy that maximises their property's income potential.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {cards.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col"
              style={{
                background: 'rgba(42,47,54,0.55)',
                border: '1px solid rgba(198,169,107,0.14)',
                borderRadius: 18,
                backdropFilter: 'blur(14px)',
                padding: 'clamp(32px, 4vw, 44px) clamp(24px, 3vw, 36px)',
                transition: 'all 420ms cubic-bezier(0.23,1,0.32,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,107,0.55)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 28px 56px rgba(0,0,0,0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,107,0.14)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div className="inline-block self-start rounded-full px-3 py-1 font-inter text-[11px] tracking-widest text-gold"
                style={{ background: 'rgba(198,169,107,0.09)', border: '1px solid rgba(198,169,107,0.25)', marginBottom: 20 }}>
                {c.pill}
              </div>
              <c.icon />
              <h3 className="font-playfair text-[24px] text-ivory" style={{ marginTop: 20, marginBottom: 16 }}>{c.title}</h3>
              <p className="font-inter text-[16px]" style={{ color: 'rgba(248,246,242,0.65)', lineHeight: 1.8, marginBottom: 20 }}>{c.body}</p>
              <ul className="space-y-2" style={{ marginBottom: 24 }}>
                {c.list.map((l, j) => (
                  <li key={j} className="font-inter text-[14px] flex" style={{ color: 'rgba(248,246,242,0.6)', lineHeight: 1.7 }}>
                    <span className="text-gold mr-2">—</span>{l}
                  </li>
                ))}
              </ul>
              <div className="inline-block self-start rounded-full px-4 py-1.5 font-inter text-[12px] text-gold"
                style={{ background: 'rgba(198,169,107,0.07)', border: '1px solid rgba(198,169,107,0.2)' }}>
                {c.badge}
              </div>
              <a href="#contact" className="block font-inter text-[13px] text-gold hover:underline cursor-pointer mt-auto pt-6">{c.link}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
