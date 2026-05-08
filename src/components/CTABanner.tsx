export default function CTABanner() {
  return (
    <section className="section section--midnight text-center" style={{
      paddingTop: 96, paddingBottom: 96,
      borderTop: '1px solid rgba(198,169,107,0.2)',
      borderBottom: '1px solid rgba(198,169,107,0.2)',
    }}>
      <div className="section-inner max-w-3xl">
        <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, marginBottom: 16 }}>
          Ready to see what your property could earn?
        </h2>
        <p className="font-inter text-[18px] max-w-xl mx-auto" style={{ color: 'rgba(248,246,242,0.65)', lineHeight: 1.8, marginBottom: 32 }}>
          Get a free income assessment in 48 hours. We'll show projected monthly returns across all three strategies so you can make a fully informed decision.
        </p>
        <a href="#contact"
          className="inline-block bg-gold text-midnight px-12 py-4 rounded-md font-inter text-[16px] font-semibold tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 28px rgba(198,169,107,0.22)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}>
          Get My Free Assessment
        </a>
        <p className="font-inter text-[12px]" style={{ color: 'rgba(248,246,242,0.35)', marginTop: 16 }}>
          No obligation · Response within 48 hours · UK properties only
        </p>
      </div>
    </section>
  );
}
