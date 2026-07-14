'use client';

import Link from 'next/link';
import { ArrowRight, PenTool, Home, Layers, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: PenTool,
    title: 'Architectural Design',
    description: 'From site analysis to construction documents — we shape ideas into buildable form.',
    href: '/services#architectural-design',
  },
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Thoughtful interiors that balance aesthetics with the way people live and work.',
    href: '/services#interior-design',
  },
  {
    icon: Layers,
    title: 'Concept & Masterplanning',
    description: 'Strategic vision for sites at every scale — from single lots to entire districts.',
    href: '/services#masterplanning',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Expert oversight from groundbreaking through handover, on time and on budget.',
    href: '/services#project-management',
  },
];

// ServicesGrid — mirrors Doorly screenshots 4/13:
// [ SERVICES ] kicker + oversized heading + 2×2 offset bento grid of service cards
export default function ServicesGrid() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="services-heading">
      <div className="max-w-[1600px] mx-auto">
        {/* Kicker */}
        <p className="kicker mb-4">[ Services ]</p>

        {/* Oversized heading */}
        <h2
          id="services-heading"
          className="font-display font-black text-black uppercase leading-none mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 8rem)', letterSpacing: '-0.025em' }}
        >
          EXCEPTIONAL
          <br />
          ARCHITECTURE
          <br />
          &amp; DESIGN
          <br />
          SERVICES
        </h2>

        {/* Bento grid — 2×2 with offset exactly like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, i) => {
            const Icon = service.icon;
            // Alternate vertical offset on even cards to create bento stagger
            const isOffset = i % 2 !== 0;
            return (
              <motion.div
                key={service.title}
                className={`relative bg-[#EBEBEB] p-8 flex flex-col border border-white ${
                  isOffset ? 'mt-0 lg:mt-16' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top row: icon + arrow chip */}
                <div className="flex justify-between items-start mb-auto">
                  <Icon size={28} strokeWidth={1.5} className="text-black" aria-hidden="true" />
                  <Link
                    href={service.href}
                    className="arrow-chip w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="font-body font-semibold text-black text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-gray text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
