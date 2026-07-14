'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Why Sustainable Materials Are Reshaping Modern Architecture',
    excerpt: 'Timber, rammed earth, and recycled steel are no longer niche choices — they are defining the next generation of landmark buildings.',
    slug: 'sustainable-materials',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
    date: 'June 2025',
  },
  {
    title: '5 Signs Your Renovation Is Ready to Begin',
    excerpt: 'How do you know when a project has moved from aspiration to action? Our principal architects share the key markers.',
    slug: 'renovation-signs',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    date: 'May 2025',
  },
  {
    title: 'Biophilic Design: Bringing Nature Into Urban Homes',
    excerpt: 'Living walls, natural light shafts, and material honesty — the science and art of connecting interiors to the natural world.',
    slug: 'biophilic-design',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    date: 'April 2025',
  },
];

// JournalPreview — mirrors Doorly screenshot 16:
// Giant stacked "JOURNAL" text left + featured article card right + 2-card row below
export default function JournalPreview() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20" aria-labelledby="journal-heading">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: giant stacked type — exact Doorly screenshot 16 pattern */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker mb-6">[ Journal ]</p>
            <h2
              id="journal-heading"
              className="font-display font-black text-black uppercase leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', letterSpacing: '-0.03em' }}
            >
              JOUR
              <br />
              NAL
            </h2>
          </motion.div>

          {/* Right: featured article card */}
          {articles[0] && (
            <motion.div
              className="group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/journal/${articles[0].slug}`} aria-label={`Read: ${articles[0].title}`}>
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 arrow-chip w-12 h-12 bg-accent flex items-center justify-center">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <p className="text-neutral-gray text-xs tracking-widest uppercase mb-2">{articles[0].date}</p>
                <h3 className="font-display font-black text-black uppercase leading-tight text-xl mb-2">
                  {articles[0].title}
                </h3>
                <p className="text-neutral-gray text-sm leading-relaxed">{articles[0].excerpt}</p>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Bottom 2 articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-12">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.slug}
              className="group flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/journal/${article.slug}`} className="flex gap-5 w-full" aria-label={`Read: ${article.title}`}>
                <div className="flex-shrink-0 w-28 h-28 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-neutral-gray text-xs tracking-widest uppercase mb-1">{article.date}</p>
                  <h3 className="font-semibold text-black text-sm leading-snug mb-2">{article.title}</h3>
                  <div className="flex items-center gap-1 text-accent text-xs font-semibold tracking-wide">
                    Read <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/journal"
            className="inline-flex items-center bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[48px]"
          >
            <span className="px-6">View All Articles</span>
            <span className="flex items-center justify-center w-12 h-12 bg-black">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
