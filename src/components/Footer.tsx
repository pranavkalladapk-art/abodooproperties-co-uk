import { Link } from '@tanstack/react-router';
import logo from '@/assets/logo.png';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="Abodoo Properties" style={{ height: 40, width: 'auto', display: 'block' }} />
      <div className="flex flex-col leading-none">
        <span className="font-inter font-semibold text-[17px] tracking-widest text-ivory">ABODOO</span>
        <span className="font-inter text-[9px] tracking-[0.3em] text-gold mt-0.5">PROPERTIES</span>
      </div>
    </div>
  );
}

const SocialLinkedIn = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16" rx="2" /><path d="M6 8 V14 M6 5.5 V5.6 M9 14 V8 M9 11 C9 9.5 10 8 12 8 S14 9.5 14 11 V14" /></svg>;
const SocialIG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16" rx="4" /><circle cx="10" cy="10" r="4" /><circle cx="15" cy="5" r="0.5" fill="currentColor" /></svg>;
const SocialTikTok = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 5.5V14a3 3 0 1 1-3-3" /><path d="M10 5.5V3h3v2.5a4 4 0 0 0 4-4v1a5 5 0 0 1-4 4" /></svg>;

const footerColumns = [
  {
    h: 'SERVICES',
    items: [
      { label: 'Rent to SA', to: '/strategies/$slug', params: { slug: 'serviced-accommodation' } },
      { label: 'Property Flipping', to: '/strategies/$slug', params: { slug: 'refurbishment-resale' } },
      { label: 'Property Management', to: '/strategies/$slug', params: { slug: 'rent-to-hmo' } },
      { label: 'Joint Ventures', to: '/strategies/$slug', params: { slug: 'brrr-projects' } },
    ],
  },
  {
    h: 'COMPANY',
    items: [
      { label: 'About Us', href: '/#about' },
      { label: 'How It Works', href: '/#how' },
      { label: 'Properties', href: '/#properties' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    h: 'GET IN TOUCH',
    items: [
      { label: 'Info@abodooproperties.co.uk', href: 'mailto:Info@abodooproperties.co.uk' },
      { label: '+44 7442 526283', href: 'tel:+447442526283' },
      { label: 'London, United Kingdom' },
    ],
  },
  {
    h: 'LEGAL',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Sitemap', href: 'https://abodooproperties.co.uk/sitemap.xml' },
    ],
  },
];

function FooterLink({ item }: { item: { label: string; to?: string; params?: Record<string, string>; href?: string } }) {
  const style = { color: 'rgba(248,246,242,0.72)' } as React.CSSProperties;
  const hoverIn = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.color = 'rgba(248,246,242,0.9)'; };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.color = 'rgba(248,246,242,0.72)'; };

  if (item.to) {
    return (
      <Link
        to={item.to}
        params={item.params}
        className="font-inter text-[14px] block mb-3 transition-colors"
        style={style}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        {item.label}
      </Link>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        className="font-inter text-[14px] block mb-3 transition-colors"
        style={style}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        {item.label}
      </a>
    );
  }

  return (
    <span className="font-inter text-[14px] block mb-3" style={style}>
      {item.label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="section section--deep" style={{ paddingTop: 80, paddingBottom: 40, borderTop: '1px solid rgba(198,169,107,0.18)' }}>
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: 48 }}>
          <div>
            <Logo />
            <p className="font-inter text-[14px] mt-4 max-w-[220px]" style={{ color: 'rgba(248,246,242,0.7)', lineHeight: 1.8 }}>
              Helping landlords explore modern letting strategies across the United Kingdom.
            </p>
            <div className="flex gap-4 mt-6" style={{ color: 'rgba(198,169,107,0.45)' }}>
              <a href="https://www.linkedin.com/company/abodooproperties" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="LinkedIn"><SocialLinkedIn /></a>
              <a href="https://www.instagram.com/abodooproperties?igsh=MTdpaW8xczJmc2x3Yg==" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram"><SocialIG /></a>
              <a href="https://www.tiktok.com/@abodooproperties?_r=1&_t=ZN-96ZmV5Iqsly" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="TikTok"><SocialTikTok /></a>
            </div>
          </div>
          {footerColumns.map((col, i) => (
            <div key={i}>
              <div className="font-inter text-[11px] tracking-[0.16em] text-gold mb-5 font-medium">{col.h}</div>
              {col.items.map((it, j) => (
                <FooterLink key={j} item={it} />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 flex justify-between flex-wrap gap-3"
          style={{ borderTop: '1px solid rgba(198,169,107,0.1)' }}>
          <div className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.85)' }}>
            © 2026 Abodoo Properties
          </div>
          <div className="font-inter text-[11px]" style={{ color: 'rgba(248,246,242,0.28)' }}>
            Property investment carries risk. Past performance is not indicative of future results.
          </div>
        </div>
        <p className="font-inter text-[11px] mt-4" style={{ color: 'rgba(248,246,242,0.82)', lineHeight: 1.7, maxWidth: '90ch' }}>
          Images, example properties, and figures shown on this site are illustrative. Abodoo Properties is a trading name; company registration details available on request.
        </p>
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(198,169,107,0.08)' }}>
          <p className="font-inter text-[12px]" style={{ color: 'rgba(248,246,242,0.55)' }}>
            SEO & Web Design by{' '}
            <a
              href="https://dravonixmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
              style={{ color: 'rgba(248,246,242,0.75)' }}
            >
              Dravonix Media Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
