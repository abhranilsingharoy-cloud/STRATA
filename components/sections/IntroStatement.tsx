'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// IntroStatement — mirrors Doorly screenshot 5:
// Full-bleed photo behind, dark semi-transparent panel left (headline),
// orange panel right (subcopy + CONTACT CTA button)
export default function IntroStatement() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Studio introduction">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="Architect-designed interior with floor-to-ceiling glass walls and mountain views"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay panels — positioned exactly like screenshot 5 */}
      <div className="relative z-10 flex h-screen min-h-[600px]">
        {/* Left panel: dark, headline */}
        <motion.div
          className="flex flex-col justify-center w-full md:w-[52%] bg-[#0B0B0C]/85 backdrop-blur-sm p-10 md:p-16 lg:p-24"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6.5rem)', letterSpacing: '-0.02em' }}
          >
            LEADING THE INDUSTRY WITH A CLIENT-FIRST FOCUS
          </h2>
        </motion.div>

        {/* Right panel: orange, subcopy + CTA */}
        <motion.div
          className="hidden md:flex flex-col justify-end w-[48%] bg-accent p-10 md:p-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white font-body text-base leading-relaxed mb-10 max-w-[300px]">
            We craft inspiring spaces that blend cutting-edge design with enduring functionality,
            turning your vision into reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center self-start bg-white text-black text-xs font-semibold tracking-widest uppercase h-[52px]"
            aria-label="Contact STRATA"
          >
            <span className="px-6">CONTACT</span>
            <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
              <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Mobile CTA below panels */}
      <div className="md:hidden bg-accent p-8">
        <p className="text-white text-sm leading-relaxed mb-6">
          We craft inspiring spaces that blend cutting-edge design with enduring functionality.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-black text-white text-xs font-semibold tracking-widest uppercase h-[48px]"
        >
          <span className="px-5">CONTACT</span>
          <span className="flex items-center justify-center w-12 h-12">
            <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </section>
  );
}
