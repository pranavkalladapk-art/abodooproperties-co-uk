type Section = { h: string; p: string };

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <section className="section section--midnight" style={{ paddingTop: 160, paddingBottom: 80 }}>
      <div className="section-inner" style={{ maxWidth: 760 }}>
        <span className="font-inter uppercase text-gold" style={{ fontSize: 11, letterSpacing: '0.28em' }}>{eyebrow}</span>
        <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, margin: '20px 0 24px' }}>
          {title}
        </h1>
        <p className="font-inter" style={{ color: 'rgba(248,246,242,0.7)', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
          {intro}
        </p>
        <div
          className="font-inter"
          style={{
            background: 'rgba(198,169,107,0.07)',
            border: '1px solid rgba(198,169,107,0.25)',
            borderRadius: 10,
            padding: '14px 18px',
            color: 'rgba(248,246,242,0.7)',
            fontSize: 13,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          This page is a placeholder. Final policy text will be published before the site is used for marketing or landlord outreach.
        </div>
        {sections.map((s) => (
          <div key={s.h} style={{ marginBottom: 28 }}>
            <h2 className="font-playfair text-ivory" style={{ fontSize: 22, marginBottom: 10 }}>{s.h}</h2>
            <p className="font-inter" style={{ color: 'rgba(248,246,242,0.62)', fontSize: 15, lineHeight: 1.8 }}>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
