import { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

const headline = 'Smarter ways to earn from your UK property.';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ height: '100dvh', background: '#0B1426' }}>
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(11,20,38,0.32) 0%, rgba(11,20,38,0.52) 35%, rgba(11,20,38,0.82) 70%, rgba(11,20,38,0.97) 100%)',
      }} />
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: 'clamp(96px, 14vh, 140px)', paddingBottom: 'clamp(72px, 12vh, 120px)' }}
        initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
      >
        {/* TOP: label */}
        <motion.div variants={fadeUp} className="flex flex-col items-center">
          <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.7 } } }}
            className="w-14 h-px bg-gold mb-6" style={{ transformOrigin: 'center' }} />
          <div className="font-inter text-[10px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.28em] text-gold uppercase text-center px-4">
            Premium Property Investment · United Kingdom
          </div>
        </motion.div>

        {/* CENTER: headline + subtitle */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <motion.h1 variants={fadeUp}
            className="font-playfair text-ivory font-normal mx-auto"
            style={{ fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '20ch', textWrap: 'balance' as any }}>
            {headline.split(' ').map((w, i) => (
              <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.28em' }}
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p variants={fadeUp}
            className="font-inter mx-auto mt-8"
            style={{ color: 'rgba(248,246,242,0.72)', fontSize: 'clamp(13px, 1.05vw, 16px)', lineHeight: 1.6, maxWidth: '52ch' }}>
            We help property owners and investors explore higher-performing letting and refurbishment strategies — with transparent, market-based assessments.
          </motion.p>
        </div>

        {/* BOTTOM: buttons */}
        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
          <a href="#services"
            className="bg-gold text-midnight font-inter text-[14px] font-semibold tracking-wide transition-all duration-300 hover:brightness-110 inline-flex items-center justify-center"
            style={{ height: 54, minWidth: 200, borderRadius: 8, padding: '0 32px' }}>
            Explore Services
          </a>
          <a href="#contact"
            className="border border-gold text-gold font-inter text-[14px] font-semibold tracking-wide transition-all duration-300 hover:bg-gold hover:text-midnight inline-flex items-center justify-center"
            style={{ height: 54, minWidth: 200, borderRadius: 8, padding: '0 32px' }}>
            Book Consultation
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A96B" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as any } },
};
