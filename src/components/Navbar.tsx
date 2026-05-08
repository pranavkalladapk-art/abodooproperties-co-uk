import { motion } from 'framer-motion';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#properties', label: 'Properties' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C6A96B" />
            <stop offset="100%" stopColor="#E8D4A0" />
          </linearGradient>
        </defs>
        <path d="M5 28 L17 5 L29 28 M11 22 H23 M17 5 L17 14 M14 11 L17 8 L20 11"
          stroke="url(#goldGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-inter font-semibold text-[17px] tracking-widest text-ivory">ABODOO</span>
        <span className="font-inter font-normal text-[9px] tracking-[0.3em] text-gold mt-0.5">PROPERTIES</span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        height: 74,
        padding: '0 max(32px, 4vw)',
        background: 'rgba(11,20,38,0.88)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(198,169,107,0.1)',
      }}
    >
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href}
            className="font-inter text-[14px] transition-colors duration-250"
            style={{ color: 'rgba(248,246,242,0.65)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.65)')}
          >{l.label}</a>
        ))}
      </div>
      <a href="#contact"
        className="hidden md:inline-block font-inter text-[13px] font-medium tracking-wide rounded-md transition-all duration-300"
        style={{
          border: '1.5px solid #C6A96B',
          color: '#C6A96B',
          padding: '10px 20px',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#C6A96B'; e.currentTarget.style.color = '#0B1426'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C6A96B'; }}
      >Get Free Assessment</a>

      <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(true)} aria-label="Open menu">
        <span className="block w-[22px] h-[1.5px] bg-gold" />
        <span className="block w-[22px] h-[1.5px] bg-gold" />
        <span className="block w-[22px] h-[1.5px] bg-gold" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(6,14,28,0.97)' }}>
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-gold text-3xl" aria-label="Close menu">×</button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-playfair text-[28px] text-ivory">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-4 font-inter text-[14px] font-medium tracking-wide rounded-md px-6 py-3"
            style={{ border: '1.5px solid #C6A96B', color: '#C6A96B' }}>Get Free Assessment</a>
        </div>
      )}
    </motion.nav>
  );
}
