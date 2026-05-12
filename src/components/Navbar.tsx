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
              initial={{ x: '100%', opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.4 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-0 right-0 z-[200] h-full flex flex-col"
              style={{
                width: 'min(86vw, 380px)',
                background: 'linear-gradient(180deg, rgba(8,14,28,0.96) 0%, rgba(6,10,22,0.98) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(198,169,107,0.18)',
                boxShadow: '-24px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Soft glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(198,169,107,0.18) 0%, transparent 70%)' }}
              />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex-1 flex flex-col px-7 pt-28 pb-8 overflow-y-auto"
              >
                <ul className="flex flex-col">
                  {links.map((l, i) => {
                    const id = l.href.slice(1);
                    const isActive = activeId === id;
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ borderBottom: '1px solid rgba(198,169,107,0.08)' }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group relative flex items-center gap-3 py-4 font-inter text-[16px] tracking-wide transition-all duration-300"
                          style={{ color: isActive ? '#C6A96B' : 'rgba(248,246,242,0.82)' }}
                        >
                          <motion.span
                            aria-hidden
                            className="block rounded-full"
                            animate={{
                              width: isActive ? 22 : 6,
                              opacity: isActive ? 1 : 0.35,
                            }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            style={{ height: 1.5, background: '#C6A96B' }}
                          />
                          <span
                            className="transition-all duration-300 group-hover:translate-x-1"
                            style={{ textShadow: isActive ? '0 0 18px rgba(198,169,107,0.45)' : 'none' }}
                          >
                            {l.label}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + links.length * 0.05 + 0.1, duration: 0.5 }}
                  className="mt-10"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center font-inter text-[14px] font-medium tracking-wide rounded-md py-3.5 transition-all duration-300"
                    style={{
                      border: '1.5px solid #C6A96B',
                      color: '#C6A96B',
                      boxShadow: '0 0 0 rgba(198,169,107,0)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#C6A96B';
                      e.currentTarget.style.color = '#0B1426';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(198,169,107,0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#C6A96B';
                      e.currentTarget.style.boxShadow = '0 0 0 rgba(198,169,107,0)';
                    }}
                  >
                    Get Free Assessment
                  </a>

                  <p className="mt-6 font-inter text-[11px] tracking-[0.28em] uppercase text-center"
                     style={{ color: 'rgba(248,246,242,0.35)' }}>
                    Abodoo Properties
                  </p>
                </motion.div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
