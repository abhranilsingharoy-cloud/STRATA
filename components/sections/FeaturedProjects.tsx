'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/RevealText';
import Button from '@/components/ui/Button';

const projects = [
  {
    title: 'Smart City Masterplan',
    location: 'Singapore',
    category: 'Urban Development',
    slug: 'smart-city-masterplan',
    image: '/images/exterior_hero.jpg',
  },
  {
    title: 'Flood Resilience Zoning',
    location: 'Miami, FL',
    category: 'Infrastructure',
    slug: 'flood-resilience',
    image: '/images/exterior_tower.jpg',
  },
  {
    title: 'Eco-District Optimization',
    location: 'Copenhagen, DK',
    category: 'Sustainability',
    slug: 'eco-district',
    image: '/images/exterior_villa.jpg',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="projects-heading">
      <div className="max-w-[1600px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="kicker mb-3">[ Featured Use Cases ]</p>
            <h2
              id="projects-heading"
              className="font-display font-black text-black uppercase leading-none"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              <RevealText>GENERATED PLANS</RevealText>
            </h2>
          </div>
          <Button
            href="/projects"
            label="View All Use Cases"
            className="self-start sm:self-auto"
          />
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              className={`group relative overflow-hidden ${i === 1 ? 'md:mt-16' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} project`}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.location} architecture project`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <Button variant="chip-only" />
                  </div>
                </div>
                {/* Meta */}
                <div className="bg-[#EBEBEB] p-6">
                  <p className="kicker text-neutral-500 mb-1">{project.category} — {project.location}</p>
                  <h3 className="font-body font-semibold text-black text-lg">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
