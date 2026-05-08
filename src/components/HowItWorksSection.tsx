import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  { n: 1, title: 'Free Property Assessment', body: "We evaluate your property's income potential across all three of our strategies. You'll receive projected returns within 48 hours — no obligation." },
  { n: 2, title: 'Tailored Strategy', body: 'We match your property to the right model: Rent-to-SA, flip and exit, or long-term management. Every recommendation uses live market data.' },
  { n: 3, title: 'Seamless Setup', body: 'Our team handles furnishing, licensing, listing, compliance, and onboarding. Most properties are live and earning within 2 weeks of signing.' },
  { n: 4, title: 'Guaranteed Monthly Income', body: 'Receive your agreed income every month, on time, with a detailed performance report so you always know how your property is performing.' },
];

export default function HowItWorksSection() {
  const { ref, inView } = useScrollReveal();
  return (
    <section id="how" ref={ref} className="py-32" style={{ background: '#0F1A2E' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="font-inter text-[11px] tracking-[0.18em] text-gold mb-4">PROCESS</div>
          <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            From your property to consistent income — in four steps
          </h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ borderTop: '1px dashed rgba(198,169,107,0.22)' }} />
          {steps.map((s, i) => (
            <motion.div key={s.n} className="relative pt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
              <div className="absolute top-0 left-0 font-playfair pointer-events-none"
                style={{ fontSize: 52, color: 'rgba(198,169,107,0.16)', lineHeight: 1 }}>
                0{s.n}
              </div>
              <div className="relative pt-12">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-playfair text-[20px] text-ivory">{s.title}</h3>
                <p className="font-inter text-[15px] leading-relaxed mt-3" style={{ color: 'rgba(248,246,242,0.65)' }}>
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
