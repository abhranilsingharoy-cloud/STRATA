'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// CTABanner — closing section before footer
// Full-bleed architectural photo + oversized ECO.AI wordmark overlay + CTA button
// Matches the giant wordmark banner pattern from Doorly reference
export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Request a demo of Eco Architect AI">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/exterior_hero.jpg"
          alt="Award-winning modern architecture exterior with clean geometric lines at sunset"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-32 md:py-48 max-w-[1600px] mx-auto">
        {/* Kicker */}
        <motion.p
          className="kicker text-white/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          [ Start Planning Today ]
        </motion.p>

        {/* Oversized heading */}
        <motion.h2
          className="font-display font-black text-white uppercase leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)', letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          GENERATE
          <br />
          YOUR FIRST
          <br />
          MASTERPLAN
        </motion.h2>

        <motion.p
          className="text-white/70 text-base max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Upload your site's satellite imagery and let Eco Architect AI generate data-driven urban planning recommendations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[56px]"
            aria-label="Request an ECO.AI Demo"
          >
            <span className="px-8">REQUEST DEMO</span>
            <span className="flex items-center justify-center w-14 h-14 bg-black">
              <ArrowRight size={18} strokeWidth={2.5} color="#fff" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Giant background wordmark — layered behind content */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p
          className="font-display font-black text-white/[0.05] uppercase leading-none"
          style={{
            fontSize: 'clamp(6rem, 20vw, 24rem)',
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          ECO.AI
        </p>
      </div>
    </section>
  );
}
