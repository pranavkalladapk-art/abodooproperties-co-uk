import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

function StatItem({ start, prefix = '', value, suffix = '', label, decimals = 0, raw }: any) {
  const display = useCountUp(value || 0, 1800, start, decimals);
  return (
    <div style={{ padding: '28px 32px' }}>
      <div className="font-playfair text-gold" style={{ fontSize: 'clamp(40px, 4.8vw, 60px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 14 }}>
        {raw ? raw : `${prefix}${display}${suffix}`}
      </div>
      <div className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.55)', lineHeight: 1.5, letterSpacing: '0.01em' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  const stats = [
    { prefix: '£', value: 2.4, suffix: 'M+', decimals: 1, label: 'Rental Income Generated' },
    { value: 100, suffix: '+', label: 'Properties Under Management' },
    { value: 34, suffix: '%', label: 'Average Income Uplift vs Standard Let' },
    { raw: '48hrs', label: 'Average Onboarding Time' },
  ];
  return (
    <section ref={ref} className="section section--midnight">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#C6A96B" opacity="0.035" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
      <div className="section-inner relative">
        <div className="section-head section-head--left">
          <span className="section-label">WHY ABODOO</span>
          <h2 className="section-h2">The smarter way to invest in UK property</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(198,169,107,0.12)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(198,169,107,0.12)' : 'none',
            }} className="lg:!border-b-0">
              <StatItem start={inView} {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
