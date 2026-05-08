import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  { n: 1, title: 'Free Property Assessment', body: "We evaluate your property's income potential across all three of our strategies. You'll receive projected returns within 48 hours — no obligation." },
  { n: 2, title: 'Tailored Strategy', body: 'We match your property to the right model: Rent-to-SA, flip and exit, or long-term management. Every recommendation uses live market data.' },
  { n: 3, title: 'Seamless Setup', body: 'Our team handles furnishing, licensing, listing, compliance, and onboarding. Most properties are live and earning within 2 weeks of signing.' },
  { n: 4, title: 'Guaranteed Monthly Income', body: 'Receive your agreed income every month, on time, with a detailed performance report so you always know how your property is performing.' },
];

export default function HowItWorksSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="how" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">PROCESS</span>
          <h2 className="section-h2">From your property to consistent income — in four steps</h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4" style={{ gap: 40 }}>
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ borderTop: '1px dashed rgba(198,169,107,0.22)' }} />
          {steps.map((s, i) => (
            <motion.div key={s.n} className="relative"
              style={{ padding: '32px 24px' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="absolute font-playfair pointer-events-none select-none"
                style={{ fontSize: 52, color: 'rgba(198,169,107,0.16)', lineHeight: 1, top: 16, left: 24 }}>
                0{s.n}
              </div>
              <div className="relative" style={{ paddingTop: 56 }}>
                <div className="bg-gold" style={{ width: 32, height: 2, marginBottom: 20 }} />
                <h3 className="font-playfair text-[20px] text-ivory" style={{ marginBottom: 12 }}>{s.title}</h3>
                <p className="font-inter text-[15px]" style={{ color: 'rgba(248,246,242,0.65)', lineHeight: 1.8 }}>
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
