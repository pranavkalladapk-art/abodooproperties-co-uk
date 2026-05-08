import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

function StatItem({ start, prefix = '', value, suffix = '', label, decimals = 0, raw }: any) {
  const display = useCountUp(value || 0, 1800, start, decimals);
  return (
    <div className="text-center" style={{ padding: '40px 24px' }}>
      <div className="font-playfair text-gold" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, marginBottom: 8 }}>
        {raw ? raw : `${prefix}${display}${suffix}`}
      </div>
      <div className="font-inter text-[14px]" style={{ color: 'rgba(248,246,242,0.58)' }}>
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
    <section ref={ref} className="section section--midnight" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#C6A96B" opacity="0.035" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
      <div className="section-inner relative grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} style={{
            borderRight: i < stats.length - 1 ? '1px solid rgba(198,169,107,0.12)' : 'none',
            borderBottom: i < 2 ? '1px solid rgba(198,169,107,0.12)' : 'none',
          }} className="lg:!border-b-0">
            <StatItem start={inView} {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
