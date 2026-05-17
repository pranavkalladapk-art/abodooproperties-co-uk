import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const Briefcase = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="20" height="14" rx="2" /><path d="M9 7 V5 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V7" /><path d="M3 13 H23" />
  </svg>
);
const Layers = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 3 L23 8 L13 13 L3 8 Z" /><path d="M3 13 L13 18 L23 13" /><path d="M3 18 L13 23 L23 18" />
  </svg>
);
const Gauge = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18 a9 9 0 1 1 18 0" /><path d="M13 18 L18 10" /><circle cx="13" cy="18" r="1.2" fill="#C6A96B" />
  </svg>
);
const Chat = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6 h18 v12 h-9 l-5 4 v-4 H4 Z" /><path d="M9 12 h0 M13 12 h0 M17 12 h0" />
  </svg>
);
const Broom = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 L22 9" /><path d="M14 5 L19 10 L13 16 L8 11 Z" /><path d="M8 11 L3 22" /><path d="M13 16 L9 22" />
  </svg>
);
const Cert = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13" cy="10" r="6" /><path d="M9 14 L7 23 L13 20 L19 23 L17 14" /><path d="M10 10 L12 12 L16 8" />
  </svg>
);

const items = [
  { Icon: Briefcase, title: 'Professional property management', body: 'A single point of contact for owners, with structured reporting and a clear management agreement.' },
  { Icon: Layers, title: 'Flexible rental strategies', body: 'Choose between Rent-to-SA, HMO, or full management — matched to your property and goals.' },
  { Icon: Gauge, title: 'Market-based income assessments', body: 'Indicative figures built from comparable listings, occupancy trends, and operational costs.' },
  { Icon: Chat, title: 'Guest communication & 24/7 support', body: 'Our team handles enquiries, check-ins, and out-of-hours issues so owners are not disturbed.' },
  { Icon: Broom, title: 'Cleaning & maintenance coordination', body: 'Vetted cleaners, linen suppliers, and tradespeople scheduled around bookings and inspections.' },
  { Icon: Cert, title: 'Compliance, licensing & certifications', body: 'Gas, electrical, EPC, HMO licensing, and council registrations managed in line with regulations.' },
];

export default function TestimonialsSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="testimonials" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">WHY LANDLORDS WORK WITH US</span>
          <h2 className="section-h2">What working with Abodoo looks like.</h2>
          <p className="section-sub">
            We are an early-stage company building our portfolio with transparency. Instead of testimonials we cannot yet verify, here is what we offer every landlord we work with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col"
              style={{
                background: 'rgba(20,28,46,0.7)',
                border: '1px solid rgba(198,169,107,0.08)',
                borderRadius: 14,
                padding: 32,
              }}>
              <div style={{ marginBottom: 20 }}><t.Icon /></div>
              <h3 className="font-playfair text-[19px] text-ivory" style={{ marginBottom: 12, lineHeight: 1.3 }}>{t.title}</h3>
              <p className="font-inter text-[14.5px]" style={{ color: 'rgba(248,246,242,0.62)', lineHeight: 1.7 }}>{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
