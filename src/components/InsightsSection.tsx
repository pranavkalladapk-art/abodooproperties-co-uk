import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const articles = [
  {
    to: '/blog/rent-to-serviced-accommodation',
    tag: 'R2SA',
    title: 'What is Rent-to-Serviced Accommodation and is it right for your property?',
    excerpt: 'A plain-English breakdown of how R2SA agreements work, what landlords gain, and the property types best suited to the model.',
  },
  {
    to: '/blog/hmo-vs-serviced-accommodation',
    tag: 'Strategy',
    title: 'HMO vs Serviced Accommodation: Which earns more in 2026?',
    excerpt: 'We compare gross yields, operating costs, void risk, and compliance burden across HMO and SA in the current UK market.',
  },
  {
    to: '/blog/brrrr-strategy-uk',
    tag: 'BRRRR',
    title: 'The BRRRR Strategy Explained for UK Property Investors',
    excerpt: 'Buy, Refurbish, Rent, Refinance, Repeat — how the strategy works in the UK and where investors most often get it wrong.',
  },
] as const;

export default function InsightsSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="insights" ref={ref} className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">PROPERTY INSIGHTS</span>
          <h2 className="section-h2">Guides for UK landlords and investors.</h2>
          <p className="section-sub">
            Practical articles on letting strategies, regulation, and market trends — written for property owners thinking about what to do next.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 mx-auto"
          style={{ gap: 28, maxWidth: 1200, width: '100%' }}
        >
          {articles.map((a, i) => (
            <motion.div
              key={a.to}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={a.to}
                className="group flex flex-col text-left h-full"
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
                <div style={{ width: 36, height: 1, background: '#C6A96B', marginBottom: 22 }} />
                <div className="font-inter text-[10px] tracking-[0.22em] text-gold uppercase" style={{ marginBottom: 12 }}>
                  {a.tag}
                </div>
                <h3 className="font-playfair text-[22px] text-ivory" style={{ marginBottom: 14, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p
                  className="font-inter text-[15px] flex-1"
                  style={{ color: 'rgba(248,246,242,0.85)', lineHeight: 1.75 }}
                >
                  {a.excerpt}
                </p>
                <div className="font-inter text-[12px] inline-flex items-center gap-2 text-gold" style={{ marginTop: 20 }}>
                  Read article
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-inter text-[14px] font-semibold tracking-wide border border-gold text-gold transition-all duration-300 hover:bg-gold hover:text-midnight"
            style={{ height: 50, padding: '0 28px', borderRadius: 8 }}
          >
            View all insights
          </Link>
        </div>
      </div>
    </section>
  );
}
