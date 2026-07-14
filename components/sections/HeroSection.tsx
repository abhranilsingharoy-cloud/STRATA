'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Hero section — matches Doorly screenshot 1 exactly:
// Full-viewport image/canvas, giant "STRATA" wordmark layered on photo,
// kicker tag bottom-left, CTA bottom-right
export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="STRATA Architecture Studio — Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Modern minimalist architecture exterior with geometric lines"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.75)' }}
        />
        {/* Subtle dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Giant background wordmark — positioned like "DOORLY" in reference */}
      <div
        className="absolute inset-0 flex items-center justify-start pl-4 md:pl-8 pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-white uppercase"
          style={{
            fontSize: 'clamp(5rem, 14vw, 16rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            opacity: 0.9,
          }}
        >
          STRATA
        </motion.p>
      </div>

      {/* Bottom-left: kicker + subcopy */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-20 max-w-sm z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="kicker text-white/60 mb-3">[ BOOK A CONSULTATION ]</p>
        <p className="text-white text-sm leading-relaxed font-body max-w-[280px]">
          From concept sketches to built form — our team guides you through a seamless and
          visionary design experience.
        </p>
      </motion.div>

      {/* Bottom-right: CTA button */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-20 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/contact"
          className="flex items-center h-[52px] bg-accent text-white text-xs font-semibold tracking-widest uppercase"
          aria-label="Contact STRATA Studio"
        >
          <span className="px-6">CONTACT US</span>
          <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
            <ArrowRight size={16} strokeWidth={2.5} />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
