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
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Platform introduction">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/eco_ai_hero.jpg"
          alt="Eco Architect AI analyzing a city"
          className="w-full h-full object-cover object-center grayscale opacity-80"
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
            <RevealText>DESIGN SMARTER,</RevealText><br />
            <RevealText delay={0.1}>SUSTAINABLE CITIES</RevealText><br />
            <RevealText delay={0.2}>WITH GENERATIVE</RevealText><br />
            <RevealText delay={0.3}>AI.</RevealText>
          </h2>
        </motion.div>

        {/* Right panel: image background, subcopy + CTA */}
        <motion.div
          className="relative hidden md:flex flex-col justify-end w-[48%] overflow-hidden p-10 md:p-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ParallaxImage
              src="/images/sustainable_city_panel.jpg"
              alt="Sustainable city rendering"
              className="w-full h-full object-cover object-center"
              scale={1.1}
              speed={0.2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 text-white font-body text-base leading-relaxed mb-10 max-w-[300px]">
            <RevealText>Eco Architect AI is an urban</RevealText>{' '}
            <RevealText delay={0.1}>planning assistant that analyzes</RevealText>{' '}
            <RevealText delay={0.2}>satellite imagery to generate customized,</RevealText>{' '}
            <RevealText delay={0.3}>data-driven planning recommendations.</RevealText>
          </div>
          <Button
            href="/contact"
            label="EXPLORE PLATFORM"
            className="self-start bg-white text-black"
          />
        </motion.div>
      </div>

      {/* Mobile CTA below panels */}
      <div className="md:hidden relative overflow-hidden p-8">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/images/sustainable_city_panel.jpg" alt="Sustainable city rendering" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10">
          <p className="text-white text-sm leading-relaxed mb-6">
            Eco Architect AI is an urban planning assistant that analyzes satellite imagery to generate customized, data-driven planning recommendations.
          </p>
          <Button
            href="/contact"
            label="EXPLORE PLATFORM"
            className="bg-white text-black"
          />
        </div>
      </div>
    </section>
  );
}
