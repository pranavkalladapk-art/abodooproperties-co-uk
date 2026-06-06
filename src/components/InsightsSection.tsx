import { Link } from '@tanstack/react-router';

const articles = [
  {
    slug: 'rent-to-serviced-accommodation-explained',
    tag: 'R2SA',
    title: 'What is Rent-to-Serviced Accommodation and is it right for your property?',
    excerpt: 'A plain-English breakdown of how R2SA agreements work, what landlords gain, and the property types best suited to the model.',
  },
  {
    slug: 'hmo-vs-serviced-accommodation-2026',
    tag: 'Strategy',
    title: 'HMO vs Serviced Accommodation: Which earns more in 2026?',
    excerpt: 'We compare gross yields, operating costs, void risk, and compliance burden across HMO and SA in the current UK market.',
  },
  {
    slug: 'brrrr-strategy-uk-investors',
    tag: 'BRRRR',
    title: 'The BRRRR Strategy Explained for UK Property Investors',
    excerpt: 'Buy, Refurbish, Rent, Refinance, Repeat — how the strategy works in the UK and where investors most often get it wrong.',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="section section--deep" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="section-inner">
        <div className="text-center mb-16">
          <div className="font-inter text-[11px] tracking-[0.28em] text-gold uppercase mb-4">PROPERTY INSIGHTS</div>
          <h2 className="font-playfair text-ivory font-normal" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
            Guides for UK landlords and investors.
          </h2>
          <p className="font-inter mt-6 max-w-2xl mx-auto text-center" style={{ color: 'rgba(248,246,242,0.72)', fontSize: 15, lineHeight: 1.7 }}>
            Practical articles on letting strategies, regulation, and market trends — written for property owners thinking about what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="relative flex flex-col min-h-[280px] p-6"
              style={{
                background: 'rgba(20,28,46,0.7)',
                border: '1px solid rgba(198,169,107,0.08)',
                borderRadius: 14,
              }}
            >
              <div className="font-inter text-[10px] tracking-[0.22em] text-gold uppercase mb-2">{a.tag}</div>
              <h3 className="font-playfair text-[19px] text-ivory" style={{ marginBottom: 12, lineHeight: 1.3 }}>
                {a.title}
              </h3>
              <p className="font-inter text-[14.5px]" style={{ color: 'rgba(248,246,242,0.82)', lineHeight: 1.7 }}>
                {a.excerpt}
              </p>
              <span
                className="absolute bottom-4 left-6 font-inter text-[11px] tracking-[0.18em] uppercase"
                style={{ color: 'rgba(248,246,242,0.45)' }}
              >
                Coming soon
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-inter text-[14px] font-semibold tracking-wide border border-gold text-gold transition-all duration-300 hover:bg-gold hover:text-midnight"
            style={{ height: 50, padding: '0 28px', borderRadius: 8 }}
          >
            View all insights
          </Link>
        </div>
      </div>
    </section>
  );
}
