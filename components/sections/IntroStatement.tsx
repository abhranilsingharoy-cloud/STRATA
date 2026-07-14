'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/RevealText';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Button from '@/components/ui/Button';

// IntroStatement — mirrors Doorly screenshot 5:
// Full-bleed photo behind, dark semi-transparent panel left (headline),
// orange panel right (subcopy + CONTACT CTA button)
export default function IntroStatement() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Studio introduction">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/interior_living.jpg"
          alt="Architect-designed interior with floor-to-ceiling glass walls and mountain views"
          className="w-full h-full object-cover object-center"
          scale={1.15}
          speed={0.3}
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
            <RevealText>LEADING THE</RevealText><br />
            <RevealText delay={0.1}>INDUSTRY WITH</RevealText><br />
            <RevealText delay={0.2}>A CLIENT-FIRST</RevealText><br />
            <RevealText delay={0.3}>FOCUS</RevealText>
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
            <RevealText>We craft inspiring spaces that blend</RevealText>{' '}
            <RevealText delay={0.1}>cutting-edge design with enduring</RevealText>{' '}
            <RevealText delay={0.2}>functionality, turning your vision</RevealText>{' '}
            <RevealText delay={0.3}>into reality.</RevealText>
          </p>
          <Button
            href="/contact"
            label="CONTACT"
            className="self-start bg-white text-black"
          />
        </motion.div>
      </div>

      {/* Mobile CTA below panels */}
      <div className="md:hidden bg-accent p-8">
        <p className="text-white text-sm leading-relaxed mb-6">
          We craft inspiring spaces that blend cutting-edge design with enduring functionality.
        </p>
        <Button
          href="/contact"
          label="CONTACT"
        />
      </div>
    </section>
  );
}
