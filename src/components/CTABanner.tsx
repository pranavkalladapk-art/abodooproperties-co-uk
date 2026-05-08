export default function CTABanner() {
  return (
    <section className="py-24 text-center" style={{
      background: '#0B1426',
      borderTop: '1px solid rgba(198,169,107,0.2)',
      borderBottom: '1px solid rgba(198,169,107,0.2)',
    }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}>
          Ready to see what your property could earn?
        </h2>
        <p className="font-inter text-[18px] max-w-xl mx-auto mt-4" style={{ color: 'rgba(248,246,242,0.65)' }}>
          Get a free income assessment in 48 hours. We'll show projected monthly returns across all three strategies so you can make a fully informed decision.
        </p>
        <a href="#contact"
          className="inline-block bg-gold text-midnight px-12 py-4 rounded-md font-inter text-[16px] font-semibold tracking-wide mt-8 transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
          style={{ boxShadow: '0 0 0 rgba(198,169,107,0)' }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 28px rgba(198,169,107,0.22)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 rgba(198,169,107,0)')}>
          Get My Free Assessment
        </a>
        <p className="font-inter text-[12px] mt-4" style={{ color: 'rgba(248,246,242,0.35)' }}>
          No obligation · Response within 48 hours · UK properties only
        </p>
      </div>
    </section>
  );
}
