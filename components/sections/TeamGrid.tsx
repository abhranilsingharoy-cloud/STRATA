'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'James Vile',
    role: 'Principal Architect',
    image: '/images/portrait_1.jpg',
    slug: '/team',
  },
  {
    name: 'Axon Broth',
    role: 'Design Director',
    image: '/images/portrait_3.jpg',
    slug: '/team',
  },
  {
    name: 'Mara Lin',
    role: 'Interior Lead',
    image: '/images/portrait_2.jpg',
    slug: '/team',
  },
];

// TeamGrid — mirrors Doorly screenshot 7:
// Dark background, large headline "ARCHITECTS WHO GO FURTHER FOR YOUR VISION."
// Staggered team photo cards with white arrow chip top-right
export default function TeamGrid() {
  return (
    <section className="bg-[#0B0B0C] py-24 md:py-36 px-6 md:px-20" aria-labelledby="team-heading">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="team-heading"
              className="font-display font-black text-white uppercase leading-none mb-12"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6.5rem)', letterSpacing: '-0.02em' }}
            >
              ARCHITECTS WHO GO FURTHER FOR YOUR VISION.
            </h2>
            <Link
              href="/team"
              className="inline-flex items-center bg-white text-black text-xs font-semibold tracking-widest uppercase h-[52px]"
              aria-label="Meet the STRATA team"
            >
              <span className="px-6">LEARN MORE</span>
              <span className="flex items-center justify-center w-[52px] h-[52px] bg-accent">
                <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
              </span>
            </Link>
          </motion.div>

          {/* Right: staggered team photo cards */}
          <div className="relative flex gap-4 h-[480px] md:h-[560px]">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="relative flex-1 overflow-hidden group"
                style={{ marginTop: `${i * 40}px` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={member.slug} aria-label={`View ${member.name}'s profile`}>
                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at STRATA Studio`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Arrow chip — white in top-right like screenshot 7 */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white flex items-center justify-center">
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </div>
                  {/* Name + role at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-sm">{member.name}</p>
                    <p className="text-white/60 text-xs">{member.role}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
