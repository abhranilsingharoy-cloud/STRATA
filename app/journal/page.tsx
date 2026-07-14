import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NewsletterForm from '@/components/ui/NewsletterForm';

export const metadata: Metadata = {
  title: 'Journal — Design Insights & Architecture',
  description:
    'Explore STRATA\'s journal of architecture insights, design process articles, sustainability features, and studio news.',
};

const articles = [
  {
    title: 'Why Sustainable Materials Are Reshaping Modern Architecture',
    excerpt: 'Timber, rammed earth, and recycled steel are no longer niche choices — they are defining the next generation of landmark buildings.',
    slug: 'sustainable-materials',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
    date: 'June 2025',
    category: 'Sustainability',
  },
  {
    title: '5 Signs Your Renovation Is Ready to Begin',
    excerpt: 'How do you know when a project has moved from aspiration to action? Our principal architects share the key markers.',
    slug: 'renovation-signs',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    date: 'May 2025',
    category: 'Process',
  },
  {
    title: 'How Interior Layout Impacts Property Value',
    excerpt: 'The spatial decisions made at design stage have measurable impacts on how a property is valued, sold, and lived in.',
    slug: 'interior-layout-value',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    date: 'April 2025',
    category: 'Interiors',
  },
  {
    title: 'Inside Our Process: From Concept Sketch to Built Form',
    excerpt: 'A behind-the-scenes look at how STRATA moves from the first mark on paper to a completed building.',
    slug: 'concept-to-built-form',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    date: 'March 2025',
    category: 'Process',
  },
  {
    title: 'Biophilic Design: Bringing Nature Into Urban Homes',
    excerpt: 'Living walls, natural light shafts, and material honesty — the science and art of connecting interiors to the natural world.',
    slug: 'biophilic-design',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    date: 'February 2025',
    category: 'Design',
  },
];

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      {/* Hero — "JOURNAL" stacked giant type left, featured article right (screenshot 16 pattern) */}
      <section className="section-light pt-[120px] pb-0 px-6 md:px-20" aria-labelledby="journal-page-heading">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: giant stacked type */}
          <div>
            <p className="kicker mb-4">[ Journal ]</p>
            <h1
              id="journal-page-heading"
              className="font-display font-black text-black uppercase leading-none"
              style={{ fontSize: 'clamp(5rem, 13vw, 14rem)', letterSpacing: '-0.04em' }}
            >
              JOUR
              <br />
              NAL
            </h1>
          </div>

          {/* Right: featured article */}
          {featured && (
            <div className="group lg:pt-20">
              <Link href={`/journal/${featured.slug}`} aria-label={`Read: ${featured.title}`}>
                <div className="relative overflow-hidden mb-5">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-accent flex items-center justify-center">
                    <ArrowRight size={18} strokeWidth={2.5} className="text-black" />
                  </div>
                  <span className="absolute bottom-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 tracking-widest uppercase">
                    {featured.category}
                  </span>
                </div>
                <p className="text-neutral-gray text-xs tracking-widest uppercase mb-2">{featured.date}</p>
                <h2 className="font-display font-black text-black uppercase leading-tight text-xl md:text-2xl mb-2">
                  {featured.title}
                </h2>
                <p className="text-neutral-gray text-sm leading-relaxed">{featured.excerpt}</p>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Rest of articles grid */}
      <section className="section-light py-16 md:py-24 px-6 md:px-20" aria-label="More articles">
        <div className="max-w-[1600px] mx-auto">
          <div className="border-t border-black/10 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rest.map((article) => (
              <div key={article.slug} className="group">
                <Link href={`/journal/${article.slug}`} aria-label={`Read: ${article.title}`}>
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight size={15} strokeWidth={2.5} className="text-black" />
                    </div>
                  </div>
                  <p className="text-neutral-gray text-xs tracking-widest uppercase mb-1">{article.date} · {article.category}</p>
                  <h3 className="font-semibold text-black text-sm leading-snug">{article.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0B0B0C] py-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-white uppercase text-2xl md:text-3xl">
              STAY IN THE LOOP
            </h2>
            <p className="text-white/50 text-sm mt-2">Design insights, project launches, and studio news.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
