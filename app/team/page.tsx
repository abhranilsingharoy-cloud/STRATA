import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Team — Meet the Architects at STRATA',
  description:
    'Meet the architects, designers, and project managers who make STRATA one of the most respected architecture studios in the world.',
};

const team = [
  {
    name: 'James Vile',
    role: 'Principal Architect',
    bio: 'James founded STRATA in 2010 after 12 years at leading international practices. His work spans residential, commercial, and civic typologies across four continents. He holds a Master of Architecture from the Architectural Association and is a Fellow of the AIA.',
    image: '/images/portrait_1.jpg',
    education: 'M.Arch — Architectural Association',
    awards: ['AIA Young Architect Award 2016', 'World Architecture Festival — Shortlist 2019, 2021, 2023'],
  },
  {
    name: 'Axon Broth',
    role: 'Design Director',
    bio: 'Axon leads the conceptual direction of the studio, overseeing design quality across all projects. A graduate of ETH Zürich, he brings a rigorous European sensibility to STRATA\'s work, with a particular focus on materiality and tectonic expression.',
    image: '/images/portrait_3.jpg',
    education: 'M.Arch — ETH Zürich',
    awards: ['Frame Award — Commercial Space of the Year 2022', 'Dezeen Award — Longlist 2023'],
  },
  {
    name: 'Mara Lin',
    role: 'Interior Design Lead',
    bio: 'Mara leads STRATA\'s interior design practice, bringing a deep understanding of spatial psychology, material culture, and the craft of furnishing to every project. Her residential interiors have been published in Wallpaper*, Architectural Digest, and Frame Magazine.',
    image: '/images/portrait_2.jpg',
    education: 'BA Interior Architecture — RISD',
    awards: ['AD100 — 2023, 2024', 'Wallpaper* Design Award — Residential Interior 2022'],
  },
  {
    name: 'Diego Soto',
    role: 'Senior Architect',
    bio: 'Diego joined STRATA in 2015 and has since led the delivery of over 40 projects across residential, hospitality, and mixed-use typologies. His technical expertise — particularly in structural timber and prefabricated systems — has been instrumental in STRATA\'s sustainability programme.',
    image: '/images/portrait_1.jpg',
    education: 'B.Arch — Columbia University',
    awards: ['AIA Design Award — Small Projects 2021'],
  },
  {
    name: 'Yuki Tanaka',
    role: 'Project Architect',
    bio: 'Yuki brings precision and calm to the most complex delivery challenges. A graduate of Tokyo University of the Arts, she leads construction administration across STRATA\'s commercial portfolio and has overseen projects in Japan, Australia, and the United Kingdom.',
    image: '/images/portrait_2.jpg',
    education: 'M.Arch — Tokyo University of the Arts',
    awards: [],
  },
  {
    name: 'Rafa Moreno',
    role: 'Visualisation & Technology',
    bio: 'Rafa leads STRATA\'s digital practice, integrating computational design, parametric modelling, and immersive visualisation tools into the studio\'s workflow. His work ensures that every client experiences their project in full before a single foundation is poured.',
    image: '/images/portrait_3.jpg',
    education: 'M.Arch — Bartlett School of Architecture',
    awards: ['Architizer A+ Award — Unbuilt Visualisation 2023'],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Dark hero — mirrors Doorly screenshot 7 pattern */}
      <section className="bg-[#0B0B0C] pt-[120px] pb-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="kicker text-white/50 mb-6">[ Team ]</p>
            <h1
              className="font-display font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', letterSpacing: '-0.03em' }}
            >
              ARCHITECTS WHO GO FURTHER FOR YOUR VISION.
            </h1>
          </div>
          <p className="text-white/50 text-base leading-relaxed max-w-md lg:pb-2">
            STRATA is built on talent. Our team of architects, designers, and project managers
            bring expertise, curiosity, and genuine care to every commission.
          </p>
        </div>
      </section>

      {/* Team grid — staggered cards like screenshot 7 */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-20" aria-label="Team members">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group relative ${i % 3 === 1 ? 'lg:mt-16' : ''}`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at STRATA Studio`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* White arrow chip */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={15} strokeWidth={2.5} />
                </div>
              </div>

              {/* Info card */}
              <div className="bg-[#EBEBEB] p-6 border-t border-white">
                <p className="kicker text-neutral-gray mb-1">{member.role}</p>
                <h2 className="font-semibold text-black text-lg mb-3">{member.name}</h2>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">{member.bio}</p>
                <p className="text-xs text-neutral-gray tracking-wide">
                  <span className="font-semibold text-black">Education: </span>
                  {member.education}
                </p>
                {member.awards.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {member.awards.map((award) => (
                      <li key={award} className="text-xs text-neutral-gray flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-accent py-24 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-black text-white uppercase text-3xl md:text-5xl leading-none">
              JOIN THE TEAM
            </p>
            <p className="text-white/80 text-base mt-4 max-w-md leading-relaxed">
              We are always looking for talented, curious, and driven architects and designers
              to join the STRATA family.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white text-xs font-semibold tracking-widest uppercase h-[52px] flex-shrink-0"
            aria-label="Contact STRATA about career opportunities"
          >
            <span className="px-8">GET IN TOUCH</span>
            <span className="flex items-center justify-center w-[52px] h-[52px] bg-white">
              <ArrowRight size={16} strokeWidth={2.5} color="#000" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
