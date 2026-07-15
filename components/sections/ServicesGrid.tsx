'use client';

import Link from 'next/link';
import { ArrowRight, PenTool, Home, Layers, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/RevealText';
import Button from '@/components/ui/Button';

const services = [
  {
    icon: PenTool,
    title: 'Green Space Optimization',
    description: 'AI-driven placement of parks and green corridors to maximize ecological impact.',
    href: '/services#green-space',
  },
  {
    icon: Home,
    title: 'Flood & Drainage',
    description: 'Predictive modeling to design resilient urban drainage and prevent flooding.',
    href: '/services#flood-drainage',
  },
  {
    icon: Layers,
    title: 'Transport Planning',
    description: 'Optimize public transit routes and road networks for reduced congestion.',
    href: '/services#transport',
  },
  {
    icon: ClipboardList,
    title: 'Sustainable Zoning',
    description: 'Generative land-use allocation balancing commercial, residential, and industrial zones.',
    href: '/services#zoning',
  },
];

// ServicesGrid — mirrors Doorly screenshots 4/13:
// [ SERVICES ] kicker + oversized heading + 2×2 offset bento grid of service cards
export default function ServicesGrid() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="services-heading">
      <div className="max-w-[1600px] mx-auto">
        {/* Kicker */}
        <p className="kicker mb-4">[ Platform Features ]</p>

        {/* Oversized heading and Feature Image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-20 items-end">
          <h2
            id="services-heading"
            className="font-display font-black text-black uppercase leading-none lg:w-1/2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 8rem)', letterSpacing: '-0.025em' }}
          >
            <RevealText>GENERATIVE</RevealText>
            <br />
            <RevealText delay={0.1}>AI-POWERED</RevealText>
            <br />
            <RevealText delay={0.2}>URBAN</RevealText>
            <br />
            <RevealText delay={0.3}>PLANNING</RevealText>
          </h2>

          <motion.div 
            className="w-full lg:w-1/2 h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
             <img src="/images/urban_planning_features.jpg" alt="Generative urban planning features" className="w-full h-full object-cover object-center" />
          </motion.div>
        </div>

        {/* Bento grid — 2×2 with offset exactly like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            // Alternate vertical offset on even cards to create bento stagger
            const isOffset = i % 2 !== 0;
            return (
              <motion.div
                key={service.title}
                className={`relative bg-[#F4F4F5] p-10 lg:p-14 flex flex-col border border-white/60 shadow-sm rounded-2xl ${
                  isOffset ? 'mt-0 lg:mt-16' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top row: icon + arrow chip */}
                <div className="flex justify-between items-start mb-auto">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Icon size={28} strokeWidth={1.5} className="text-black" aria-hidden="true" />
                  </div>
                  <Button
                    variant="chip-only"
                    href={service.href}
                    ariaLabel={`Learn more about ${service.title}`}
                    className="flex-shrink-0 bg-white"
                  />
                </div>

                {/* Content */}
                <div className="mt-20">
                  <h3 className="font-display font-bold text-black text-2xl lg:text-3xl mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-base lg:text-lg leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
