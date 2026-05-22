import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed z-[90] lg:z-[200]" style={{ right: 28, bottom: 28 }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 rounded-full px-3.5 py-1.5 font-inter text-[12px] text-ivory whitespace-nowrap"
            style={{ background: 'rgba(11,20,38,0.9)', border: '1px solid rgba(198,169,107,0.3)' }}>
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => window.open('https://wa.me/447442526283', '_blank')}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
        style={{
          background: 'rgba(11,20,38,0.92)',
          border: '1.5px solid rgba(198,169,107,0.4)',
          backdropFilter: 'blur(14px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#C6A96B';
          e.currentTarget.style.boxShadow = '0 0 22px rgba(198,169,107,0.18)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(198,169,107,0.4)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Chat on WhatsApp">
        <motion.span
          className="absolute -inset-1 rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(198,169,107,0.28)' }}
          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }} />
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 C7 2 2 7 2 13 C2 15 2.5 17 3.5 18.5 L2 24 L7.5 22.5 C9 23.5 11 24 13 24 C19 24 24 19 24 13 C24 7 19 2 13 2 Z" />
          <path d="M9 9 C9 9 10 11 11 12 C12 13 14 14 14 14 L16 13 C16.5 12.7 17 13 17 13.5 V16 C17 16.5 16.5 17 16 17 C12 17 8 13 8 9 C8 8.5 8.5 8 9 8 H11.5 C12 8 12.3 8.5 12 9 L11 11" />
        </svg>
      </motion.button>
    </div>
  );
}
