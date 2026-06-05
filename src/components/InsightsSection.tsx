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
          <p className="font-inter mx-auto mt-6" style={{ color: 'rgba(248,246,242,0.72)', fontSize: 15, lineHeight: 1.7, maxWidth: '60ch' }}>
            Practical articles on letting strategies, regulation, and market trends — written for property owners thinking about what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="flex flex-col rounded-lg p-7 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(198,169,107,0.18)',
                minHeight: 280,
              }}
            >
              <div className="font-inter text-[10px] tracking-[0.22em] text-gold uppercase mb-4">{a.tag}</div>
              <h3 className="font-playfair text-ivory" style={{ fontSize: 20, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                {a.title}
              </h3>
              <p className="font-inter mt-4 flex-1" style={{ color: 'rgba(248,246,242,0.65)', fontSize: 14, lineHeight: 1.65 }}>
                {a.excerpt}
              </p>
              <div className="font-inter text-[12px] mt-5" style={{ color: 'rgba(198,169,107,0.7)' }}>
                Coming soon
              </div>
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
