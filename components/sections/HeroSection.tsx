'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/RevealText';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Button from '@/components/ui/Button';

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
        <ParallaxImage
          src="/images/exterior_hero.jpg"
          alt="Modern minimalist architecture exterior with geometric lines"
          className="w-full h-full object-cover object-center"
          scale={1.05} // Gentle scale so parallax doesn't clip
          speed={0.4}
        />
        {/* Subtle dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Giant background wordmark — positioned like "DOORLY" in reference */}
      <div
        className="absolute inset-0 flex items-center justify-start pl-4 md:pl-8 pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <div className="overflow-hidden inline-flex">
          {'STRATA'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: '100%', rotate: 2 }}
              animate={{ y: '0%', rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + index * 0.05,
              }}
              className="font-display font-black text-white uppercase inline-block"
              style={{
                fontSize: 'clamp(5rem, 14vw, 16rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                opacity: 0.9,
                transformOrigin: 'top left',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom-left: kicker + subcopy */}
      <div className="absolute bottom-10 left-6 md:left-20 max-w-sm z-20">
        <RevealText triggerOnLoad delay={0.6}>
          <p className="kicker text-white/60 mb-3">[ BOOK A CONSULTATION ]</p>
        </RevealText>
        <br />
        <RevealText triggerOnLoad delay={0.7}>
          <p className="text-white text-sm leading-relaxed font-body max-w-[280px]">
            From concept sketches to built form — our team guides you through a seamless and
            visionary design experience.
          </p>
        </RevealText>
      </div>

      {/* Bottom-right: CTA button */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-20 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Button
          href="/contact"
          label="CONTACT US"
        />
      </motion.div>
    </section>
  );
}
