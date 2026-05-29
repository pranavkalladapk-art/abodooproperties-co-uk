import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const props = [
  {
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    location: 'BIRMINGHAM CITY CENTRE', name: 'Birmingham City Centre',
    descriptor: '2-bed serviced apartment · city centre',
  },
  {
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
    location: 'MANCHESTER · SALFORD QUAYS', name: 'Manchester · Salford Quays',
    descriptor: 'Studio short-let · waterfront',
  },
  {
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
    location: 'LEEDS LS1', name: 'Leeds LS1',
    descriptor: '3-bed refurbishment project · Leeds',
  },
];

export default function PropertiesSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section id="properties" ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">EXAMPLE ACCOMMODATION STYLES</span>
          <h2 className="section-h2">The standard of homes we operate.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col">
              <div className="relative overflow-hidden group" style={{ borderRadius: 16, aspectRatio: '4/3' }}>
                <img src={p.img} alt={`Illustrative example — ${p.name}`} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 whitespace-nowrap"
                  style={{
                    background: 'rgba(11,20,38,0.78)',
                    border: '1px solid rgba(198,169,107,0.55)',
                    borderRadius: 8,
                    padding: '6px 12px',
                    backdropFilter: 'blur(6px)',
                  }}>
                  <span className="font-inter text-[11px] uppercase tracking-widest text-gold">Illustrative example</span>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <div className="font-inter text-[11px] uppercase tracking-widest text-gold" style={{ marginBottom: 8 }}>{p.location}</div>
                <div className="font-playfair text-[20px] text-ivory">{p.name}</div>
                <div className="font-inter text-[14px]" style={{ color: 'rgba(248,246,242,0.82)', marginTop: 4 }}>{p.descriptor}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-inter text-[12px] text-center mx-auto" style={{ color: 'rgba(248,246,242,0.68)', marginTop: 36, maxWidth: '60ch', lineHeight: 1.7 }}>
          Images and examples shown are illustrative of the standard of accommodation we operate. Specific properties, locations, and figures will vary.
        </p>
      </div>
    </section>
  );
}
