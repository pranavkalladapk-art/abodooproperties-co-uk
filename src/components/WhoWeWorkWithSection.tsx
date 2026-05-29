import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const audiences = [
  {
    title: 'For Landlords',
    body: 'Hands-free property income without day-to-day management.',
  },
  {
    title: 'For Investors',
    body: 'High-yield opportunities through sourcing, BRRRR, and refurbishment projects.',
  },
  {
    title: 'For Property Owners',
    body: 'Flexible strategies tailored to your property goals.',
  },
];

export default function WhoWeWorkWithSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="properties" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">WHO WE WORK WITH</span>
          <h2 className="section-h2">Who We Work With</h2>
          <p className="section-sub">
            Whether you own one property or a growing portfolio, we tailor our approach to match your goals.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 mx-auto"
          style={{ gap: 28, maxWidth: 1200, width: '100%' }}
        >
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col text-left"
              style={{
                padding: '40px 32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(198,169,107,0.18)',
                borderRadius: 14,
                transition: 'all 400ms cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,107,0.55)';
                e.currentTarget.style.background = 'rgba(198,169,107,0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 60px -28px rgba(198,169,107,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,107,0.18)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: '#C6A96B',
                  marginBottom: 22,
                }}
              />
              <h3 className="font-playfair text-[22px] text-ivory" style={{ marginBottom: 14 }}>
                {a.title}
              </h3>
              <p
                className="font-inter text-[15px]"
                style={{ color: 'rgba(248,246,242,0.85)', lineHeight: 1.75 }}
              >
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
