import { smoothScroll } from '@/lib/smoothScroll';

export default function CTABanner() {
  return (
    <section className="section section--midnight text-center" style={{
      paddingTop: 96, paddingBottom: 96,
      borderTop: '1px solid rgba(198,169,107,0.2)',
      borderBottom: '1px solid rgba(198,169,107,0.2)',
    }}>
      <div className="section-inner max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-playfair text-ivory mx-auto" style={{ fontSize: 'clamp(30px, 3.6vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.012em', marginBottom: 20, maxWidth: '22ch', textWrap: 'balance' as any }}>
          Curious what your property could earn?
        </h2>
        <p className="font-inter text-[17px] mx-auto" style={{ color: 'rgba(248,246,242,0.82)', lineHeight: 1.75, marginBottom: 36, maxWidth: '52ch', textWrap: 'balance' as any }}>
          Request a free, no-obligation property assessment. We'll share an indicative income range based on comparable listings and local demand — not a guaranteed figure.
        </p>
        <a href="#contact" onClick={smoothScroll}
          className="inline-flex items-center justify-center bg-gold text-midnight font-inter text-[15px] font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
          style={{ height: 60, minWidth: 280, padding: '0 40px', borderRadius: 8 }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 28px rgba(198,169,107,0.22)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}>
          Get My Free Assessment
        </a>
        <p className="font-inter text-[12px]" style={{ color: 'rgba(248,246,242,0.82)', marginTop: 16 }}>
          No obligation · Indicative figures only · UK properties only
        </p>
      </div>
    </section>
  );
}
