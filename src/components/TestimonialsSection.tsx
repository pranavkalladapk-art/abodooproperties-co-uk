import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { quote: 'I was earning £900 a month on a standard AST. Within six weeks of signing with Abodoo, I was receiving £1,650 guaranteed — with zero contact from tenants or maintenance calls.', name: 'Richard T.', role: 'Landlord · Birmingham' },
  { quote: 'The flip on our Salford property took four months from purchase to sale. We made a 19% return and the Abodoo team handled absolutely everything. We\'re already in on a second deal.', name: 'Priya & James K.', role: 'Property Investors · Manchester' },
  { quote: 'I handed over three properties to their management team six months ago. Not a single issue has reached me. Rent is in my account every month like clockwork.', name: 'Sandra O.', role: 'Portfolio Landlord · Leeds' },
];

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#C6A96B">
    <path d="M8 1 L10.2 5.6 L15.2 6.3 L11.5 9.8 L12.5 14.8 L8 12.4 L3.5 14.8 L4.5 9.8 L0.8 6.3 L5.8 5.6 Z" />
  </svg>
);

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="section section--blue section--divider"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="section-inner max-w-3xl">
        <div className="section-head">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-h2">What our landlords and investors say.</h2>
        </div>
        <div className="relative" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait">
            <motion.div key={idx}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="p-10"
              style={{ background: 'rgba(42,47,54,0.75)', border: '1px solid rgba(198,169,107,0.12)', borderRadius: 16 }}>
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              <p className="font-playfair italic text-[18px]" style={{ color: 'rgba(248,246,242,0.9)', lineHeight: 1.8, marginTop: 16 }}>
                "{items[idx].quote}"
              </p>
              <div className="font-inter text-[14px] font-medium text-ivory" style={{ marginTop: 24 }}>{items[idx].name}</div>
              <div className="font-inter text-[12px] text-gold" style={{ marginTop: 4 }}>{items[idx].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ background: i === idx ? '#C6A96B' : 'rgba(198,169,107,0.25)' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
