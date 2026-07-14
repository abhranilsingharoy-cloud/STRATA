'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    title: 'Discovery & Brief',
    description: 'We begin by listening — understanding your vision, lifestyle, site constraints, and aspirations to build a comprehensive design brief.',
  },
  {
    num: '2',
    title: 'Design Development',
    description: 'From concept sketches through 3D massing, we develop and refine the design with you at every stage, ensuring the result exceeds expectations.',
  },
  {
    num: '3',
    title: 'Delivery & Build',
    description: 'We manage construction administration with meticulous attention to detail, ensuring the built outcome reflects the integrity of the design.',
  },
];

// ForClients — mirrors Doorly screenshots 6/3:
// Left: kicker + editorial paragraph + numbered process list
// Right: large architectural exterior photo
export default function ForClients() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="clients-heading">
      <div className="max-w-[1600px] mx-auto">
        <p className="kicker mb-8">[ For Clients ]</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="clients-heading"
              className="font-display font-black text-black uppercase leading-none mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.02em' }}
            >
              GREAT DESIGN SHOULD BE AN EXCITING, INFORMED EXPERIENCE.
            </h2>

            <p className="text-neutral-gray text-base leading-relaxed mb-12 max-w-[440px]">
              Whether you are commissioning your first home or an ambitious commercial development,
              we guide you through every step with clarity and confidence — from the first
              sketch to the final handover.
            </p>

            {/* Numbered process steps — matches screenshot 3/6 pattern */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num}>
                  <p className="text-accent font-body font-semibold text-sm mb-2 tracking-wide">
                    [{step.num}]
                  </p>
                  <p className="font-semibold text-black text-sm mb-1">{step.title}</p>
                  <p className="text-neutral-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/studio"
              className="mt-10 inline-flex items-center bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px]"
            >
              <span className="px-6">Learn More</span>
              <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
                <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
              </span>
            </Link>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="relative overflow-hidden aspect-[4/5]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
              alt="Modern architectural exterior with timber facade and geometric forms"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
