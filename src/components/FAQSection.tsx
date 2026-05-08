import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'What is Rent to Serviced Accommodation (R2SA)?', a: 'R2SA is a model where we lease your property directly at an agreed monthly rent — typically above standard market rate — and operate it as a premium serviced apartment. You receive guaranteed income with no tenant management, while we generate revenue through higher nightly rates.' },
  { q: 'Do I need to own the property outright to work with you?', a: 'No. For R2SA we lease from landlords — so as long as you hold the property and your mortgage or freeholder permits short-term lets, we can work together. For flipping and joint ventures, we work with investors deploying capital into specific projects.' },
  { q: 'What happens if the property sits empty?', a: 'Under our R2SA model your income is guaranteed regardless of occupancy — we take on that commercial risk entirely. For management clients we actively market the property and use dynamic pricing tools to minimise any void periods.' },
  { q: 'What areas do you currently operate in?', a: 'We operate across Birmingham, Manchester, Leeds, Sheffield, and Nottingham. We are expanding to additional cities through 2025 — contact us to discuss your specific location and we\'ll advise on feasibility.' },
  { q: 'How quickly can you get my property earning?', a: 'Most R2SA and management properties are fully set up and live within 10–14 days of signing. Flip projects depend on refurbishment scope, but we typically complete within 4–8 months from acquisition to sale.' },
  { q: 'What compliance and certifications do you handle?', a: 'We manage Gas Safety certificates, Electrical Installation Condition Reports (EICRs), Energy Performance Certificates (EPCs), HMO licensing where required, and all relevant council short-let registrations. You will not need to chase any paperwork.' },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32" style={{ background: '#0B1426' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="font-inter text-[11px] tracking-[0.18em] text-gold mb-4">FAQ</div>
          <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)' }}>
            Answers to the questions landlords always ask.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => {
            const open = active === i;
            return (
              <div key={i} className="py-6" style={{ borderBottom: '1px solid rgba(198,169,107,0.1)' }}>
                <button
                  onClick={() => setActive(open ? null : i)}
                  className="w-full flex justify-between items-center text-left transition-colors"
                  style={{ color: open ? '#C6A96B' : '#F8F6F2' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = open ? '#C6A96B' : '#F8F6F2')}>
                  <span className="font-inter text-[17px]">{f.q}</span>
                  <span className="text-gold text-[22px] ml-4">{open ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}>
                      <div className="font-inter text-[16px] leading-relaxed pt-4 mt-4"
                        style={{ color: 'rgba(248,246,242,0.65)', borderTop: '1px solid rgba(198,169,107,0.15)' }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
