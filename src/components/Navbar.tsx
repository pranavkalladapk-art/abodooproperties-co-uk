import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import logo from '@/assets/logo.png';

type NavLink = { to: string; label: string };

const links: NavLink[] = [
  { to: '/home', label: 'Home' },
  { to: '/how', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const desktopLinks: NavLink[] = [
  { to: '/home', label: 'Home' },
  { to: '/how', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="Abodoo Properties" style={{ height: 40, width: 'auto', display: 'block' }} />
      <span className="font-inter font-semibold text-[17px] tracking-widest text-ivory">ABODOO</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);


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
          <Link key={l.to} to={l.to}
            className="font-inter text-[14px] transition-colors duration-250 whitespace-nowrap"
            style={{ color: pathname === l.to ? '#C6A96B' : 'rgba(248,246,242,0.65)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === l.to ? '#C6A96B' : 'rgba(248,246,242,0.65)')}
          >{l.label}</Link>
        ))}
      </div>
      <Link to="/contact"
        className="hidden lg:inline-block font-inter text-[13px] font-medium tracking-wide rounded-md transition-all duration-300 whitespace-nowrap"
        style={{
          border: '1.5px solid #C6A96B',
          color: '#C6A96B',
          padding: '10px 20px',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#C6A96B'; e.currentTarget.style.color = '#0B1426'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C6A96B'; }}
      >Get Free Assessment</Link>


      {/* Hamburger / Close toggle */}
      {!open && (
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-md"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ border: '1px solid rgba(198,169,107,0.25)' }}
        >
          <span className="relative block w-[20px] h-[14px]">
            <span className="absolute left-0 top-0 block h-[1.5px] w-full bg-gold" />
            <span className="absolute left-0 top-[6px] block h-[1.5px] w-full bg-gold" />
            <span className="absolute left-0 top-[12px] block h-[1.5px] w-full bg-gold" />
          </span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-[240] bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-0 left-0 z-[250] h-[100dvh] w-full max-w-[400px] flex flex-col"
              style={{ background: '#1a1a1a' }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-5 h-[74px] border-b border-[#333] shrink-0">
                <Logo />
                <button 
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#333] text-white hover:bg-[#444] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
                <ul className="flex flex-col w-full">
                  {links.map((l) => {
                    const isActive = pathname === l.to;
                    return (
                      <li key={l.to} className="w-full border-b border-[#333]">
                        <Link
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className="relative flex items-center w-full px-5 py-4 transition-colors"
                        >
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-white" />
                          )}
                          <span
                            className="font-bold text-[20px] md:text-[22px]"
                            style={{ color: isActive ? '#a3a3a3' : '#ffffff' }}
                          >
                            {l.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

              </div>

              {/* Bottom Section */}
              <div className="p-5 border-t border-[#333] shrink-0">
                <a
                  href="#contact"
                  onClick={(e) => { setOpen(false); smoothScroll(e); }}
                  className="flex items-center justify-between w-full p-4 rounded-xl bg-[#333] text-white uppercase font-bold text-[15px] tracking-wide hover:bg-[#444] transition-colors"
                >
                  <span>Contact Us</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-6 mt-6 pb-2">
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#333] text-white hover:bg-[#444] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#333] text-white hover:bg-[#444] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="#" aria-label="WhatsApp" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#333] text-white hover:bg-[#444] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
