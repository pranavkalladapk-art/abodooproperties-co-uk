import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const Shield = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3 L24 7 V14 C24 19 19.5 23.5 14 25 C8.5 23.5 4 19 4 14 V7 Z" />
    <path d="M10 14 L13 17 L19 11" />
  </svg>
);
const Chart = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 24 H25" /><path d="M5 19 L11 13 L15 16 L23 7" /><path d="M19 7 H23 V11" />
  </svg>
);
const Clock = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="11" /><path d="M14 7 V14 L19 17" /><path d="M9 25 L7 27 M19 25 L21 27" />
  </svg>
);
const Cert = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="11" r="6" /><path d="M9 16 L7 25 L14 22 L21 25 L19 16" /><path d="M11 11 L13 13 L17 9" />
  </svg>
);

const items = [
  { Icon: Shield, title: 'Guaranteed rent contracts', body: 'Your income is contractually agreed — not subject to occupancy rates or market dips.' },
  { Icon: Chart, title: 'Data-driven property matching', body: 'Every property assessed against live SA demand, comparable rates, and yield benchmarks.' },
  { Icon: Clock, title: '24/7 operations team', body: 'Our in-house team manages guest communications, maintenance, and emergencies around the clock.' },
  { Icon: Cert, title: 'Fully compliant operations', body: 'We handle all licensing, safety certificates, and council requirements — zero regulatory risk.' },
];

export default function WhyAbodooSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="why" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">WHY ABODOO</span>
          <h2 className="section-h2">We think like investors because we are investors.</h2>
          <p className="section-sub">
            Abodoo was built by property investors frustrated by the gap between what letting agents offered and what a property could actually earn. Every strategy has been proven in our own portfolio first.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto" style={{ gap: '48px 280px', maxWidth: 1320, width: '100%', alignItems: 'stretch' }}>
          {items.map((it, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col h-full text-left items-start mr-auto md:mr-0 md:ml-0 ${isLeft ? 'md:text-left md:items-start md:mr-auto' : 'md:text-right md:items-end md:ml-auto'}`}
                style={{
                  maxWidth: 360,
                  display: 'grid',
                  gridTemplateRows: 'auto auto 1fr',
                }}>
                <div style={{ marginBottom: 18 }}><it.Icon /></div>
                <h3 className="font-playfair text-[20px] text-ivory" style={{ marginBottom: 12, minHeight: '2.4em', display: 'flex', alignItems: 'center' }}>{it.title}</h3>
                <p className="font-inter text-[15px]" style={{ color: 'rgba(248,246,242,0.62)', lineHeight: 1.75 }}>{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
