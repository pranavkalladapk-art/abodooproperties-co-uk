import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const props = [
  {
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    location: 'BIRMINGHAM CITY CENTRE', name: 'The Colmore Apartment',
    income: '£2,200/month guaranteed', roi: '11.4%',
  },
  {
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
    location: 'MANCHESTER SALFORD QUAYS', name: 'Quays View Studio',
    income: '£1,750/month guaranteed', roi: '9.8%',
  },
  {
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
    location: 'LEEDS LS1', name: 'The Leeds Terrace',
    income: 'Sold — 22% ROI achieved', roi: '22%',
  },
];

export default function PropertiesSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="properties" ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head section-head--left">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-h2">Featured Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col">
              <div className="relative overflow-hidden group" style={{ borderRadius: 16, aspectRatio: '4/3' }}>
                <img src={p.img} alt={p.name} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute top-4 right-4 inline-flex items-baseline gap-1.5 whitespace-nowrap"
                  style={{
                    background: 'rgba(11,20,38,0.78)',
                    border: '1px solid rgba(198,169,107,0.55)',
                    borderRadius: 8,
                    padding: '8px 14px',
                    backdropFilter: 'blur(6px)',
                  }}>
                  <span className="font-playfair text-gold text-[15px]">ROI {p.roi}</span>
                  <span className="font-inter text-[11px]" style={{ color: 'rgba(248,246,242,0.6)' }}>annually</span>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <div className="font-inter text-[11px] uppercase tracking-widest text-gold" style={{ marginBottom: 8 }}>{p.location}</div>
                <div className="font-playfair text-[20px] text-ivory">{p.name}</div>
                <div className="font-inter text-[14px]" style={{ color: 'rgba(248,246,242,0.6)', marginTop: 4 }}>{p.income}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
