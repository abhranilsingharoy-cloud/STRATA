import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects — Architecture Portfolio',
  description:
    'Explore STRATA\'s portfolio of 180+ architecture and interior design projects spanning residential, commercial, interiors, and masterplanning.',
};

const projects = [
  { title: 'Cliffside Residence', location: 'Big Sur, CA', category: 'Residential', year: '2024', slug: 'cliffside-residence', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { title: 'Meridian Tower', location: 'Sydney, AU', category: 'Commercial', year: '2024', slug: 'meridian-tower', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80' },
  { title: 'The Loft House', location: 'Barcelona, ES', category: 'Residential', year: '2023', slug: 'loft-house-barcelona', image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=900&q=80' },
  { title: 'Pavilion Garden', location: 'Tokyo, JP', category: 'Interiors', year: '2023', slug: 'pavilion-garden', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80' },
  { title: 'Urban Commons', location: 'London, UK', category: 'Masterplanning', year: '2023', slug: 'urban-commons', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80' },
  { title: 'Sea Glass Villa', location: 'Malibu, CA', category: 'Residential', year: '2022', slug: 'sea-glass-villa', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80' },
  { title: 'The Foundry', location: 'Berlin, DE', category: 'Commercial', year: '2022', slug: 'the-foundry', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80' },
  { title: 'Cedarwood Retreat', location: 'Vermont, US', category: 'Residential', year: '2021', slug: 'cedarwood-retreat', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80' },
  { title: 'Atlas Office Park', location: 'Dubai, UAE', category: 'Commercial', year: '2021', slug: 'atlas-office-park', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80' },
];

const categories = ['All', 'Residential', 'Commercial', 'Interiors', 'Masterplanning'];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0B0C] pt-[120px] pb-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker text-white/50 mb-4">[ Projects ]</p>
          <h1 className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(3rem, 9vw, 11rem)', letterSpacing: '-0.03em' }}>
            OUR WORK
          </h1>
        </div>
      </section>

      {/* Filter tabs (static — JS filter can be added later) */}
      <section className="bg-white border-b border-black/10 px-6 md:px-20 sticky top-[60px] z-30">
        <div className="max-w-[1600px] mx-auto flex gap-0 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-6 py-4 text-xs font-semibold tracking-widest uppercase cursor-pointer whitespace-nowrap border-b-2 transition-colors ${
                i === 0 ? 'border-accent text-black' : 'border-transparent text-neutral-gray hover:text-black'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`group relative overflow-hidden ${i % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} project`}>
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.location} architecture project`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 arrow-chip w-12 h-12 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="bg-[#EBEBEB] p-6 border-t border-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="kicker text-neutral-gray mb-1">{project.category} — {project.year}</p>
                      <h2 className="font-body font-semibold text-black text-lg">{project.title}</h2>
                      <p className="text-neutral-gray text-sm mt-1">{project.location}</p>
                    </div>
                    <div className="arrow-chip w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
