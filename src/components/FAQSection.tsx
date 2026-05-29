import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'What is Rent to Serviced Accommodation (R2SA)?', a: 'R2SA is a model where we lease your property at a fixed monthly rent agreed in advance, subject to contract terms, and operate it as a serviced apartment. You receive a consistent payment each month while we manage guests, cleaning, and operations.' },
  { q: 'Is rent-to-rent legal?', a: 'Yes, when structured correctly and with the appropriate landlord, lender, and freeholder permissions. We operate in line with applicable tenancy, licensing, and local short-let regulations.' },
  { q: 'Do I need permission from my mortgage lender or freeholder?', a: 'In many cases, yes. We recommend confirming any mortgage, leasehold, and insurance restrictions before signing an agreement, and we are happy to support you through that process.' },
  { q: 'Are all properties suitable?', a: 'No. Suitability depends on location, building rules, licensing requirements, and local demand. We assess each property individually before offering terms.' },
  { q: 'What happens if there is damage to the property?', a: 'We carry out regular inspections, guest screening, and professional cleaning between stays. Any issues are addressed in line with the management agreement and the relevant operating insurance.' },
  { q: 'How are income figures calculated?', a: 'Indicative figures are based on market research, comparable listings, occupancy trends, and operational costs. They are estimates, not guaranteed earnings, and actual performance may vary.' },
  { q: 'What happens if the property sits empty?', a: 'Under a fixed-rent agreement, your rent is paid for the term regardless of occupancy, in line with the contract. For management clients, we use dynamic pricing and multi-channel marketing to minimise voids.' },
  { q: 'Where do you market properties?', a: 'Depending on the property and local regulations, we may market accommodation through platforms such as Airbnb, Booking.com, and direct corporate channels.' },
  { q: 'What areas do you operate in?', a: 'We currently focus on London, Manchester, Leeds, Sheffield, and Nottingham, and assess additional UK locations on a case-by-case basis. Contact us to discuss your specific area.' },
  { q: 'How quickly can a property be set up?', a: 'Most properties go live within a few weeks of signing, subject to compliance checks, furnishing, and any required permissions. Refurbishment-led projects take longer depending on scope.' },
  { q: 'What compliance and certifications do you handle?', a: 'We coordinate Gas Safety certificates, Electrical Installation Condition Reports (EICRs), Energy Performance Certificates (EPCs), HMO licensing where required, and applicable council short-let registrations.' },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="section section--midnight section--divider">
      <div className="section-inner max-w-3xl">
        <div className="section-head">
          <span className="section-label">FAQ</span>
          <h2 className="section-h2">Answers to the questions landlords always ask.</h2>
        </div>
        <div>
          {faqs.map((f, i) => {
            const open = active === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(198,169,107,0.1)', padding: '24px 0' }}>
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
                      <div className="font-inter text-[16px]"
                        style={{ color: 'rgba(248,246,242,0.85)', lineHeight: 1.8, paddingTop: 16, marginTop: 16, borderTop: '1px solid rgba(198,169,107,0.15)' }}>
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
