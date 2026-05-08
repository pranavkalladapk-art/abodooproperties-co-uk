function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <defs>
          <linearGradient id="goldGradFooter" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C6A96B" />
            <stop offset="100%" stopColor="#E8D4A0" />
          </linearGradient>
        </defs>
        <path d="M5 28 L17 5 L29 28 M11 22 H23 M17 5 L17 14 M14 11 L17 8 L20 11"
          stroke="url(#goldGradFooter)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-inter font-semibold text-[17px] tracking-widest text-ivory">ABODOO</span>
        <span className="font-inter text-[9px] tracking-[0.3em] text-gold mt-0.5">PROPERTIES</span>
      </div>
    </div>
  );
}

const SocialLinkedIn = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16" rx="2" /><path d="M6 8 V14 M6 5.5 V5.6 M9 14 V8 M9 11 C9 9.5 10 8 12 8 S14 9.5 14 11 V14" /></svg>;
const SocialIG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16" rx="4" /><circle cx="10" cy="10" r="4" /><circle cx="15" cy="5" r="0.5" fill="currentColor" /></svg>;
const SocialX = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3 L17 17 M17 3 L3 17" /></svg>;

export default function Footer() {
  return (
    <footer className="pt-18 pb-10" style={{ background: '#060E1C', borderTop: '1px solid rgba(198,169,107,0.18)', paddingTop: 72 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="font-inter text-[14px] mt-4 max-w-[220px] leading-relaxed" style={{ color: 'rgba(248,246,242,0.42)' }}>
              Maximising property income across the United Kingdom since 2019.
            </p>
            <div className="flex gap-4 mt-6" style={{ color: 'rgba(198,169,107,0.45)' }}>
              {[SocialLinkedIn, SocialIG, SocialX].map((I, i) => (
                <a key={i} href="#" className="hover:text-gold transition-colors" aria-label="Social link"><I /></a>
              ))}
            </div>
          </div>
          {[
            { h: 'SERVICES', items: ['Rent to SA', 'Property Flipping', 'Property Management', 'Joint Ventures'] },
            { h: 'COMPANY', items: ['About Us', 'How It Works', 'Properties', 'FAQ', 'Contact'] },
            { h: 'GET IN TOUCH', items: ['hello@abodooproperties.co.uk', '+44 (0) 121 000 0000', 'Birmingham, United Kingdom'] },
          ].map((col, i) => (
            <div key={i}>
              <div className="font-inter text-[11px] tracking-[0.16em] text-gold mb-5 font-medium">{col.h}</div>
              {col.items.map((it, j) => (
                <a key={j} href="#" className="font-inter text-[14px] block mb-3 transition-colors"
                  style={{ color: 'rgba(248,246,242,0.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.9)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.45)')}>
                  {it}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 flex justify-between flex-wrap gap-3"
          style={{ borderTop: '1px solid rgba(198,169,107,0.1)' }}>
          <div className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.38)' }}>
            © 2025 Abodoo Properties Ltd. Registered in England & Wales.
          </div>
          <div className="font-inter text-[11px]" style={{ color: 'rgba(248,246,242,0.28)' }}>
            Property investment carries risk. Past performance is not indicative of future results.
          </div>
        </div>
      </div>
    </footer>
  );
}
