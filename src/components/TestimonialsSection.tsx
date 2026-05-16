import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const items = [
  { quote: 'I was earning £900 a month on a standard AST. Within six weeks of signing with Abodoo, I was receiving £1,650 guaranteed — with zero contact from tenants or maintenance calls.', name: 'Richard T.', role: 'Landlord · London' },
  { quote: 'The flip on our Salford property took four months from purchase to sale. We made a 19% return and the Abodoo team handled absolutely everything. We\'re already in on a second deal.', name: 'Priya & James K.', role: 'Property Investors · Manchester' },
  { quote: 'I handed over three properties to their management team six months ago. Not a single issue has reached me. Rent is in my account every month like clockwork.', name: 'Sandra O.', role: 'Portfolio Landlord · Leeds' },
];

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#C6A96B">
    <path d="M8 1 L10.2 5.6 L15.2 6.3 L11.5 9.8 L12.5 14.8 L8 12.4 L3.5 14.8 L4.5 9.8 L0.8 6.3 L5.8 5.6 Z" />
  </svg>
);

export default function TestimonialsSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="testimonials" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-h2">What our landlords and investors say.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
              style={{
                background: 'rgba(20,28,46,0.7)',
                border: '1px solid rgba(198,169,107,0.08)',
                borderRadius: 14,
                padding: 32,
              }}>
              <div className="flex gap-1" style={{ marginBottom: 20 }}>{[...Array(5)].map((_, j) => <Star key={j} />)}</div>
              <p className="font-playfair italic text-[16px]" style={{ color: 'rgba(248,246,242,0.88)', lineHeight: 1.7, marginBottom: 28 }}>
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <div className="font-inter text-[14px] font-semibold text-ivory">{t.name}</div>
                <div className="font-inter text-[12px] text-gold" style={{ marginTop: 4 }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
