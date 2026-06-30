import { Link } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export type BlogSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export interface BlogPostProps {
  tag: string;
  title: string;
  intro: string;
  readTime?: string;
  sections: BlogSection[];
}

export default function BlogPostLayout({ tag, title, intro, readTime, sections }: BlogPostProps) {
  return (
    <main className="min-h-screen bg-midnight text-ivory">
      <Navbar />

      {/* Hero */}
      <section className="section section--deep" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="mb-6">
            <Link
              to="/blog"
              className="font-inter text-[12px] tracking-[0.18em] uppercase"
              style={{ color: 'rgba(248,246,242,0.6)' }}
            >
              ← Back to Insights
            </Link>
          </div>
          <div className="font-inter text-[11px] tracking-[0.28em] text-gold uppercase mb-5">
            {tag}
            {readTime ? <span style={{ color: 'rgba(248,246,242,0.45)', marginLeft: 12 }}>· {readTime}</span> : null}
          </div>
          <h1
            className="font-playfair text-ivory font-normal"
            style={{ fontSize: 'clamp(32px, 4.6vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.018em' }}
          >
            {title}
          </h1>
          <p
            className="font-inter mt-7"
            style={{ color: 'rgba(248,246,242,0.78)', fontSize: 18, lineHeight: 1.75, maxWidth: '62ch' }}
          >
            {intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="section section--deep" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <article className="flex flex-col" style={{ gap: 20 }}>
            {sections.map((s, i) => {
              if (s.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="font-playfair text-ivory"
                    style={{
                      fontSize: 'clamp(24px, 2.6vw, 30px)',
                      lineHeight: 1.25,
                      letterSpacing: '-0.012em',
                      marginTop: 28,
                    }}
                  >
                    {s.text}
                  </h2>
                );
              }
              if (s.type === 'h3') {
                return (
                  <h3
                    key={i}
                    className="font-playfair text-ivory"
                    style={{ fontSize: 20, lineHeight: 1.3, marginTop: 16 }}
                  >
                    {s.text}
                  </h3>
                );
              }
              if (s.type === 'ul') {
                return (
                  <ul key={i} className="flex flex-col" style={{ gap: 10, paddingLeft: 0, listStyle: 'none' }}>
                    {s.items.map((item, j) => (
                      <li
                        key={j}
                        className="font-inter"
                        style={{
                          color: 'rgba(248,246,242,0.82)',
                          fontSize: 16,
                          lineHeight: 1.75,
                          paddingLeft: 22,
                          position: 'relative',
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 11,
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#C6A96B',
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="font-inter"
                  style={{ color: 'rgba(248,246,242,0.82)', fontSize: 16.5, lineHeight: 1.85 }}
                >
                  {s.text}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section section--midnight text-center"
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          borderTop: '1px solid rgba(198,169,107,0.2)',
          borderBottom: '1px solid rgba(198,169,107,0.2)',
        }}
      >
        <div className="section-inner max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2
            className="font-playfair text-ivory mx-auto"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.18,
              letterSpacing: '-0.012em',
              marginBottom: 18,
              maxWidth: '24ch',
            }}
          >
            Curious what your property could earn?
          </h2>
          <p
            className="font-inter text-[16px] mx-auto"
            style={{ color: 'rgba(248,246,242,0.78)', lineHeight: 1.7, marginBottom: 30, maxWidth: '52ch' }}
          >
            Request a free, no-obligation property assessment. We'll share an indicative income range
            based on comparable listings and local demand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold text-midnight font-inter text-[15px] font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
            style={{ height: 56, minWidth: 260, padding: '0 36px', borderRadius: 8 }}
          >
            Get Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
