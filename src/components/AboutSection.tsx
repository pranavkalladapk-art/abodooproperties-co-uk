import useScrollReveal from '../hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.12 });
  return (
    <section ref={ref} className="section section--midnight section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">OUR STORY</span>
          <h2 className="section-h2">Built by investors, for property owners.</h2>
          <p className="section-sub">
            Abodoo Properties was founded with a single belief: that every UK property has the potential to earn significantly more than a standard buy-to-let. We started by building our own serviced accommodation portfolio — and when the model proved itself, we opened it to landlords who wanted the same results without the operational complexity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-inter text-[16px]" style={{ color: 'rgba(248,246,242,0.66)', lineHeight: 1.8, marginBottom: 28, maxWidth: '58ch', textWrap: 'pretty' as any }}>
              Today we manage properties across Birmingham, Manchester, Leeds, and beyond — using three specialist strategies tailored to each property's location, condition, and income potential.
            </p>
            <div className="flex flex-wrap gap-2 font-inter text-[13px] justify-center lg:justify-start" style={{ color: 'rgba(248,246,242,0.45)', marginBottom: 32 }}>
              <span>Est. 2026</span><span className="text-gold mx-2">·</span>
              <span>UK-Wide Coverage</span><span className="text-gold mx-2">·</span>
              <span>3 Specialist Strategies</span>
            </div>
            <a href="#contact" className="inline-block border border-gold text-gold px-6 py-2.5 rounded-md font-inter text-[14px] hover:bg-gold hover:text-midnight transition">
              Meet the team →
            </a>
          </div>
        <div className="relative overflow-hidden p-10"
          style={{
            background: 'rgba(42,47,54,0.4)',
            border: '1px solid rgba(198,169,107,0.1)',
            borderRadius: 16, minHeight: 480,
          }}>
          <svg viewBox="0 0 400 400" className={`w-full h-full ${inView ? 'draw-on' : ''}`}>
            <g stroke="#C6A96B" strokeWidth="1" fill="none" opacity="0.45">
              <path d="M40 40 H360 V360 H40 Z" />
              <path d="M40 180 H220" /><path d="M220 40 V360" /><path d="M220 240 H360" />
              <path d="M40 100 H140 V40" /><path d="M120 180 V100" />
              <path d="M280 40 V120 H360" /><path d="M280 240 V360" />
              <circle cx="220" cy="180" r="4" /><circle cx="280" cy="240" r="4" />
              <path d="M180 180 L180 200 M260 240 L260 260" />
            </g>
          </svg>
          {[
            { top: '15%', left: '20%', dur: '5s', delay: '0s' },
            { top: '30%', left: '70%', dur: '6s', delay: '1s' },
            { top: '55%', left: '40%', dur: '4s', delay: '0.5s' },
            { top: '70%', left: '80%', dur: '7s', delay: '2s' },
            { top: '80%', left: '15%', dur: '5.5s', delay: '1.5s' },
            { top: '40%', left: '50%', dur: '4.5s', delay: '3s' },
          ].map((d, i) => (
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-gold"
              style={{
                top: d.top, left: d.left, opacity: 0.35,
                animation: `float-dot ${d.dur} ease-in-out infinite`, animationDelay: d.delay,
              }} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
