'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cliffside Residence',
    location: 'Big Sur, CA',
    category: 'Residential',
    slug: 'cliffside-residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    title: 'Meridian Tower',
    location: 'Sydney, AU',
    category: 'Commercial',
    slug: 'meridian-tower',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
  },
  {
    title: 'The Loft House',
    location: 'Barcelona, ES',
    category: 'Residential',
    slug: 'loft-house-barcelona',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=900&q=80',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="projects-heading">
      <div className="max-w-[1600px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="kicker mb-3">[ Featured Projects ]</p>
            <h2
              id="projects-heading"
              className="font-display font-black text-black uppercase leading-none"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              RECENT WORK
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center self-start sm:self-auto bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[48px]"
          >
            <span className="px-5">View All Projects</span>
            <span className="flex items-center justify-center w-12 h-12 bg-black">
              <ArrowRight size={14} />
            </span>
          </Link>
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
                  {/* Orange arrow chip in top-right */}
                  <div className="absolute top-4 right-4 arrow-chip w-12 h-12 bg-accent flex items-center justify-center">
                    <ArrowRight size={18} strokeWidth={2.5} />
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
