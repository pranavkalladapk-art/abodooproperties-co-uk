import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#strategies', label: 'Investment Strategies' },
  { href: '#properties', label: 'Portfolio' },
  { href: '#why', label: 'Why Invest With Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const desktopLinks = [
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
      <img src={logo} alt="Abodoo Properties" style={{ height: 40, width: 'auto', display: 'block' }} />
      <div className="flex flex-col leading-none">
        <span className="font-inter font-semibold text-[17px] tracking-widest text-ivory">ABODOO</span>
        <span className="font-inter font-normal text-[9px] tracking-[0.3em] text-gold mt-0.5">PROPERTIES</span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const handler = () => {
      const y = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        height: 74,
        padding: '0 max(20px, 4vw)',
        background: 'rgba(11,20,38,0.88)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(198,169,107,0.1)',
      }}
    >
      <Logo />
      <div className="hidden lg:flex items-center gap-8">
        {desktopLinks.map((l) => (
          <a key={l.href} href={l.href}
            className="font-inter text-[14px] transition-colors duration-250 whitespace-nowrap"
            style={{ color: 'rgba(248,246,242,0.65)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.65)')}
          >{l.label}</a>
        ))}
      </div>
      <a href="#contact"
        className="hidden lg:inline-block font-inter text-[13px] font-medium tracking-wide rounded-md transition-all duration-300 whitespace-nowrap"
        style={{
          border: '1.5px solid #C6A96B',
          color: '#C6A96B',
          padding: '10px 20px',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#C6A96B'; e.currentTarget.style.color = '#0B1426'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C6A96B'; }}
      >Get Free Assessment</a>

      {/* Hamburger / Close toggle */}
      <button
        className="lg:hidden relative z-[210] w-10 h-10 flex items-center justify-center rounded-md"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{ border: '1px solid rgba(198,169,107,0.25)' }}
      >
        <span className="relative block w-[20px] h-[14px]">
          <motion.span
            className="absolute left-0 block h-[1.5px] w-full bg-gold"
            animate={open ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />
          <motion.span
            className="absolute left-0 top-[6px] block h-[1.5px] w-full bg-gold"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 block h-[1.5px] w-full bg-gold"
            animate={open ? { rotate: -45, top: 6 } : { rotate: 0, top: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-[190]"
              style={{
                background: 'rgba(3,8,18,0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-0 right-0 z-[200] h-full flex flex-col"
              style={{
                width: 'min(88vw, 420px)',
                background: 'linear-gradient(180deg, #0A1020 0%, #060B17 100%)',
                borderLeft: '1px solid rgba(198,169,107,0.15)',
                boxShadow: '-24px 0 60px rgba(0,0,0,0.6)',
              }}
            >
              {/* Header: logo + close */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: '1px solid rgba(198,169,107,0.12)' }}
              >
                <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2">
                  <img src={logo} alt="Abodoo" style={{ height: 34, width: 'auto' }} />
                  <span className="font-inter font-semibold text-[15px] tracking-widest text-ivory">ABODOO</span>
                </a>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="#F8F6F2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Menu list */}
              <div
                className="flex-1 overflow-y-auto"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <ul className="flex flex-col">
                  {links.map((l, i) => {
                    const id = l.href.slice(1);
                    const isActive = activeId === id;
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="relative flex items-center px-6 py-[18px] font-inter text-[15px] tracking-wide transition-all duration-300"
                          style={{
                            color: isActive ? '#C6A96B' : '#F8F6F2',
                            background: isActive ? 'rgba(198,169,107,0.06)' : 'transparent',
                            fontWeight: isActive ? 500 : 400,
                          }}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="active-bar"
                              className="absolute left-0 top-2 bottom-2 rounded-r"
                              style={{ width: 2.5, background: '#C6A96B' }}
                            />
                          )}
                          <span
                            style={{ textShadow: isActive ? '0 0 18px rgba(198,169,107,0.45)' : 'none' }}
                          >
                            {l.label}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Footer: CTA + socials */}
              <div
                className="px-6 pt-5 pb-7"
                style={{ borderTop: '1px solid rgba(198,169,107,0.12)' }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 w-full font-inter text-[13px] font-semibold tracking-[0.18em] uppercase rounded-md py-4 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #C6A96B 0%, #A88848 100%)',
                    color: '#0B1426',
                    boxShadow: '0 10px 30px rgba(198,169,107,0.25)',
                  }}
                >
                  Contact Us
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="#0B1426" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <div className="flex items-center justify-center gap-4 mt-6">
                  {[
                    { label: 'Facebook', path: 'M13 3h-2.5A3.5 3.5 0 0 0 7 6.5V9H5v3h2v7h3v-7h2.5l.5-3H10V6.5a.5.5 0 0 1 .5-.5H13V3z' },
                    { label: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' },
                    { label: 'YouTube', path: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z' },
                    { label: 'LinkedIn', path: 'M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3V9zm6 0h4v2c.6-1 2-2 4-2 3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V21H9V9z' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(198,169,107,0.18)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(198,169,107,0.12)'; e.currentTarget.style.borderColor = '#C6A96B'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(198,169,107,0.18)'; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#C6A96B">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
