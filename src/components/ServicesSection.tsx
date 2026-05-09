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
    icon: HouseIcon, title: 'Rent to Serviced Accommodation',
    body: 'We lease your property on a guaranteed fixed rent and operate it as a premium serviced apartment. You receive reliable monthly income — we handle everything else.',
  },
  {
    icon: ArrowIcon, title: 'Strategic Property Flipping',
    body: 'We identify undervalued properties, refurbish to high specification, and sell at significant uplift — typically within 4 to 8 months. Joint ventures with investors welcome.',
  },
  {
    icon: BuildingIcon, title: 'Full-Service Property Management',
    body: 'We handle tenants, maintenance, compliance, inspections, and rent collection — so you can step back completely and receive consistent monthly income.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
              style={{
                background: 'rgba(20,28,46,0.7)',
                border: '1px solid rgba(198,169,107,0.08)',
                borderRadius: 14,
                padding: 36,
              }}>
              <c.icon />
              <h3 className="font-playfair text-[24px] text-ivory" style={{ marginTop: 28, marginBottom: 16 }}>{c.title}</h3>
              <p className="font-inter text-[15px]" style={{ color: 'rgba(248,246,242,0.6)', lineHeight: 1.7, marginBottom: 28 }}>{c.body}</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-inter text-[14px] text-gold hover:gap-3 transition-all mt-auto">
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
