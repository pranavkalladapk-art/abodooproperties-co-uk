import useScrollReveal from '../hooks/useScrollReveal';

function StatItem({ headline, label }: { headline: string; label: string }) {
  return (
    <div style={{ padding: '28px 32px' }}>
      <div className="font-playfair text-gold" style={{ fontSize: 'clamp(32px, 3.6vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
        {headline}
      </div>
      <div className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.55)', lineHeight: 1.5, letterSpacing: '0.01em' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref } = useScrollReveal({ threshold: 0.12 });
  const stats = [
    { headline: 'UK-wide', label: 'Coverage across major cities' },
    { headline: 'In-house', label: 'Sourcing, lettings & compliance team' },
    { headline: 'Fixed-rent', label: 'Agreements available, subject to suitability' },
    { headline: '48hrs', label: 'Typical assessment turnaround' },
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
        <div className="section-head">
          <span className="section-label">HOW WE WORK</span>
          <h2 className="section-h2">A transparent approach to UK property.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(198,169,107,0.12)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(198,169,107,0.12)' : 'none',
            }} className="lg:!border-b-0">
              <StatItem {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
