import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const projects: Record<string, {
  title: string; location: string; year: string; size: string; scope: string;
  category: string; description: string; heroImage: string; galleryImages: string[];
  prevSlug?: string; nextSlug?: string; prevTitle?: string; nextTitle?: string;
}> = {
  'cliffside-residence': {
    title: 'Cliffside Residence', location: 'Big Sur, CA', year: '2024',
    size: '420 sqm', scope: 'Architecture + Interiors', category: 'Residential',
    description: 'Perched on a dramatic coastal bluff, the Cliffside Residence negotiates the tension between refuge and exposure. Floor-to-ceiling glass frames panoramic Pacific views while board-formed concrete anchors the structure to the rock shelf below. The interior palette — limestone, bleached timber, and hand-trowelled plaster — responds directly to the coastal landscape.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80',
    ],
    nextSlug: 'meridian-tower', nextTitle: 'Meridian Tower',
  },
  'meridian-tower': {
    title: 'Meridian Tower', location: 'Sydney, AU', year: '2024',
    size: '28,000 sqm', scope: 'Architecture + Masterplanning', category: 'Commercial',
    description: 'A 32-storey mixed-use tower that reinterprets the commercial high-rise through a lens of biophilic design. Each floor plate is offset by 1.5° creating a helical form that maximises views and natural light. Integrated terraces and green walls soften the building profile while reducing cooling loads by 18%.',
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    ],
    prevSlug: 'cliffside-residence', prevTitle: 'Cliffside Residence',
    nextSlug: 'loft-house-barcelona', nextTitle: 'The Loft House',
  },
  'loft-house-barcelona': {
    title: 'The Loft House', location: 'Barcelona, ES', year: '2023',
    size: '280 sqm', scope: 'Architecture + Interior Design', category: 'Residential',
    description: 'A 19th century industrial warehouse in the Poblenou district transformed into a family home. Exposing the original cast-iron structure and brick vaults, STRATA inserted a new lightweight steel and glass mezzanine that floats above the original floor plane — a contemporary layer that respects the building\'s industrial heritage.',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    prevSlug: 'meridian-tower', prevTitle: 'Meridian Tower',
    nextSlug: 'pavilion-garden', nextTitle: 'Pavilion Garden',
  },
  'pavilion-garden': {
    title: 'Pavilion Garden', location: 'Tokyo, JP', year: '2023',
    size: '160 sqm', scope: 'Interior Design + Landscape', category: 'Interiors',
    description: 'A meditative retreat within a dense Tokyo neighbourhood. The brief called for a tea house and contemplative garden that could exist in dialogue with the city without being consumed by it. Shoji screens, raked gravel, and a single mature maple tree create a sanctuary of stillness.',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80'],
    prevSlug: 'loft-house-barcelona', prevTitle: 'The Loft House',
    nextSlug: 'sea-glass-villa', nextTitle: 'Sea Glass Villa',
  },
  'urban-commons': {
    title: 'Urban Commons', location: 'London, UK', year: '2023',
    size: '4.2 ha', scope: 'Masterplanning', category: 'Masterplanning',
    description: 'A new urban quarter for 1,200 homes on a former industrial site in East London. The masterplan prioritises walking and cycling connectivity, shared green infrastructure, and mixed-tenure housing arranged around a series of pocket parks and a central commons.',
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80'],
    prevSlug: 'pavilion-garden', prevTitle: 'Pavilion Garden',
    nextSlug: 'sea-glass-villa', nextTitle: 'Sea Glass Villa',
  },
  'sea-glass-villa': {
    title: 'Sea Glass Villa', location: 'Malibu, CA', year: '2022',
    size: '650 sqm', scope: 'Architecture + Interiors + Landscape', category: 'Residential',
    description: 'The Sea Glass Villa sits at the edge of the Pacific, its form calibrated to minimise its visual presence from the beach while maximising ocean frontage. A sequence of interconnected pavilions steps down the hillside, each with its own terrace, pool, and framed view.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'],
    prevSlug: 'urban-commons', prevTitle: 'Urban Commons',
    nextSlug: 'the-foundry', nextTitle: 'The Foundry',
  },
  'the-foundry': {
    title: 'The Foundry', location: 'Berlin, DE', year: '2022',
    size: '8,400 sqm', scope: 'Architecture + Interior Design', category: 'Commercial',
    description: 'An adaptive reuse of a 1920s ironworks in Berlin Mitte. The project preserves the original sawtooth roof and gantry crane while inserting a new programme of co-working spaces, a rooftop bar, and a ground-floor food hall — injecting new life into a building that had been derelict for 30 years.',
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80'],
    prevSlug: 'sea-glass-villa', prevTitle: 'Sea Glass Villa',
    nextSlug: 'cedarwood-retreat', nextTitle: 'Cedarwood Retreat',
  },
  'cedarwood-retreat': {
    title: 'Cedarwood Retreat', location: 'Vermont, US', year: '2021',
    size: '320 sqm', scope: 'Architecture + Interiors', category: 'Residential',
    description: 'A forest retreat designed for a family seeking refuge from city life. The structure is built almost entirely from locally-sourced cedar and Douglas fir, with a single pitched roof that rises to capture winter light and fall below the tree canopy in summer.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80'],
    prevSlug: 'the-foundry', prevTitle: 'The Foundry',
    nextSlug: 'atlas-office-park', nextTitle: 'Atlas Office Park',
  },
  'atlas-office-park': {
    title: 'Atlas Office Park', location: 'Dubai, UAE', year: '2021',
    size: '52,000 sqm', scope: 'Architecture + Masterplanning', category: 'Commercial',
    description: 'A campus-style office park that reimagines the corporate workplace for the post-pandemic era. Buildings are arranged around a shaded central boulevard, with integrated retail and food and beverage at ground level. A district cooling system and PV canopies reduce energy demand by 35% compared to a conventional development.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80'],
    prevSlug: 'cedarwood-retreat', prevTitle: 'Cedarwood Retreat',
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects[params.slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — ${project.location}`,
    description: project.description.slice(0, 160),
  };
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <img src={project.heroImage} alt={`${project.title} — architectural exterior`}
          className="w-full h-full object-cover" style={{ filter: 'brightness(0.7)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-16 z-10">
          <p className="kicker text-white/60 mb-3">{project.category} — {project.location}</p>
          <h1 className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project meta */}
      <section className="bg-white border-b border-black/10 px-6 md:px-20 py-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[['Location', project.location], ['Year', project.year], ['Size', project.size], ['Scope', project.scope]].map(([label, value]) => (
            <div key={label}>
              <p className="kicker text-neutral-gray mb-1">{label}</p>
              <p className="font-semibold text-black text-sm">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-24 md:py-36 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <h2 className="font-display font-black text-black uppercase leading-none"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', letterSpacing: '-0.02em' }}>
            PROJECT OVERVIEW
          </h2>
          <p className="text-neutral-gray text-base leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#F4F4F4] py-16 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.galleryImages.map((img, i) => (
            <div key={i} className={`overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}>
              <img src={img} alt={`${project.title} — interior and architectural detail ${i + 1}`}
                className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="bg-[#0B0B0C] py-16 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between gap-8">
          {project.prevSlug ? (
            <Link href={`/projects/${project.prevSlug}`} className="group flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="text-white rotate-180" />
              </div>
              <div>
                <p className="kicker text-white/40 mb-0.5">Previous</p>
                <p className="text-white font-semibold">{project.prevTitle}</p>
              </div>
            </Link>
          ) : <div />}
          {project.nextSlug && (
            <Link href={`/projects/${project.nextSlug}`} className="group flex items-center gap-4 text-right sm:flex-row-reverse">
              <div className="w-10 h-10 bg-white/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="text-white" />
              </div>
              <div>
                <p className="kicker text-white/40 mb-0.5">Next</p>
                <p className="text-white font-semibold">{project.nextTitle}</p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
