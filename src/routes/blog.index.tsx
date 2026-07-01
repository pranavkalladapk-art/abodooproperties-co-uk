import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const URL = "https://abodooproperties.co.uk/blog";

const articles = [
  {
    to: '/blog/rent-to-serviced-accommodation',
    tag: 'R2SA',
    title: 'What is Rent-to-Serviced Accommodation and is it right for your property?',
    excerpt: 'A plain-English breakdown of how R2SA agreements work, what landlords gain, and the property types best suited to the model.',
  },
  {
    to: '/blog/hmo-vs-serviced-accommodation',
    tag: 'Strategy',
    title: 'HMO vs Serviced Accommodation: Which earns more in 2026?',
    excerpt: 'We compare gross yields, operating costs, void risk, and compliance burden across HMO and SA in the current UK market.',
  },
  {
    to: '/blog/brrrr-strategy-uk',
    tag: 'BRRRR',
    title: 'The BRRRR Strategy Explained for UK Property Investors',
    excerpt: 'Buy, Refurbish, Rent, Refinance, Repeat — how the strategy works in the UK and where investors most often get it wrong.',
  },
] as const;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Property Insights & Blog | Abodoo Properties" },
      { name: "description", content: "Guides and insights for UK landlords and investors on Rent-to-SA, HMO, BRRRR, refurbishment, and lettings strategy." },
      { property: "og:title", content: "Property Insights & Blog | Abodoo Properties" },
      { property: "og:description", content: "Guides and insights for UK landlords and investors on Rent-to-SA, HMO, BRRRR, refurbishment, and lettings strategy." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />
      <section className="section section--deep" style={{ paddingTop: 160, paddingBottom: 120 }}>
        <div className="section-inner">
          <div className="text-center mb-16">
            <div className="font-inter text-[11px] tracking-[0.28em] text-gold uppercase mb-4">INSIGHTS</div>
            <h1 className="font-playfair text-ivory font-normal" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Property Insights
            </h1>
            <p className="font-inter mx-auto mt-8" style={{ color: 'rgba(248,246,242,0.82)', fontSize: 16, lineHeight: 1.7, textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
              Practical articles on UK letting strategies, regulation, and market trends{'\u00A0'}—{'\u00A0'}written for property owners and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {articles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group flex flex-col h-full w-full rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(198,169,107,0.18)',
                  minHeight: 540,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,107,0.55)';
                  e.currentTarget.style.background = 'rgba(198,169,107,0.04)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 24px 60px -28px rgba(198,169,107,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,107,0.18)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="relative w-full flex items-center justify-center"
                  style={{
                    minHeight: 220,
                    background: 'linear-gradient(135deg, #0d1117 0%, #11161d 50%, #0d1117 100%)',
                  }}
                >
                  <div className="absolute top-5 left-5 font-inter text-[10px] tracking-[0.22em] text-gold uppercase">
                    {a.tag}
                  </div>
                  <span className="font-playfair text-ivory/10 text-5xl uppercase tracking-widest">
                    {a.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-playfair text-ivory" style={{ fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {a.title}
                  </h2>
                  <p className="font-inter mt-4 flex-1" style={{ color: 'rgba(248,246,242,0.65)', fontSize: 14, lineHeight: 1.65 }}>
                    {a.excerpt}
                  </p>
                  <div className="font-inter text-[12px] mt-auto text-gold inline-flex items-center gap-2">
                    Read article <span aria-hidden style={{ transition: 'transform 300ms' }} className="group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.55)' }}>
              More articles publishing soon.{' '}
              <Link to="/contact" className="text-gold hover:underline">Get in touch</Link> to suggest a topic.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
