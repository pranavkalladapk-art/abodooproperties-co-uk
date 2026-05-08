import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const props = [
  {
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    location: 'BIRMINGHAM CITY CENTRE', name: 'The Colmore Apartment',
    income: '£2,200/month guaranteed', roi: '11.4%', roiLabel: 'SA YIELD', tag: 'RENT TO SA',
  },
  {
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    location: 'MANCHESTER SALFORD QUAYS', name: 'Quays View Studio',
    income: '£1,750/month guaranteed', roi: '9.8%', roiLabel: 'SA YIELD', tag: 'RENT TO SA',
  },
  {
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    location: 'LEEDS LS1', name: 'The Leeds Terrace',
    income: 'Sold — 22% ROI achieved', roi: '22%', roiLabel: '4 MONTH FLIP', tag: 'FLIP & EXIT',
  },
];

export default function PropertiesSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="properties" ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-h2">Featured Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: 14, aspectRatio: '3/4' }}>
              <img src={p.img} alt={p.name} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.06]" />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(11,20,38,0.95) 0%, transparent 55%)',
              }} />
              <div className="absolute top-4 right-4 rounded-lg px-3.5 py-2"
                style={{ background: 'rgba(11,20,38,0.9)', border: '1px solid #C6A96B' }}>
                <div className="font-playfair text-[18px] text-gold leading-none">{p.roi}</div>
                <div className="font-inter text-[10px] mt-1" style={{ color: 'rgba(248,246,242,0.6)' }}>{p.roiLabel}</div>
              </div>
              <div className="absolute top-4 left-4 rounded-md px-3 py-1.5"
                style={{ background: 'rgba(11,20,38,0.85)', border: '1px solid rgba(198,169,107,0.3)' }}>
                <span className="font-inter text-[11px] tracking-widest text-gold">{p.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-inter text-[11px] uppercase tracking-wider text-gold mb-2">{p.location}</div>
                <div className="font-playfair text-[22px] text-ivory">{p.name}</div>
                <div className="font-inter text-[15px] mt-1" style={{ color: 'rgba(248,246,242,0.65)' }}>{p.income}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
