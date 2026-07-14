import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const articles: Record<string, {
  title: string; date: string; category: string; author: string; authorRole: string;
  authorAvatar: string; heroImage: string; body: string[];
  prevSlug?: string; nextSlug?: string; prevTitle?: string; nextTitle?: string;
}> = {
  'sustainable-materials': {
    title: 'Why Sustainable Materials Are Reshaping Modern Architecture',
    date: 'June 2025', category: 'Sustainability', author: 'James Vile', authorRole: 'Principal Architect',
    authorAvatar: '/images/portrait_1.jpg',
    heroImage: '/images/abstract_detail.jpg',
    body: [
      'The materials we choose to build with are not merely structural or aesthetic decisions — they are moral ones. As the construction industry accounts for nearly 40% of global carbon emissions, the specification of honest, low-carbon, and regionally-sourced materials has become the central design challenge of our generation.',
      'Cross-laminated timber (CLT) is perhaps the most significant shift we have seen in the past decade. Sequestering carbon throughout the life of the building while offering structural performance that rivals concrete, CLT is enabling a new typology of mid-rise timber construction that was unthinkable twenty years ago.',
      'At STRATA, we have been integrating CLT into our residential and commercial projects since 2019. The material\'s warmth, its acoustic qualities, and the speed of construction it enables have consistently exceeded client expectations. But beyond performance, there is something profound about a building that can trace its materials back to a managed forest — a lineage that mass-produced concrete can never offer.',
      'Rammed earth is having a similar renaissance. Once dismissed as a vernacular technique unsuited to contemporary construction, advances in stabilisation technology and shuttering systems have made rammed earth viable at scale. Its thermal mass, its connection to the land, and its extraordinary visual quality — every wall is unique, every layer a record of geological time — make it one of the most compelling material choices available to contemporary architects.',
      'The challenge, of course, is cost and familiarity. Contractors who specialise in these materials are still relatively rare, and clients who have not seen them used well may be hesitant to specify them. Our role as architects is to bridge that gap — to demonstrate through built examples that sustainability and beauty are not in tension, but are in fact inseparable.',
    ],
    nextSlug: 'renovation-signs', nextTitle: '5 Signs Your Renovation Is Ready to Begin',
  },
  'renovation-signs': {
    title: '5 Signs Your Renovation Is Ready to Begin',
    date: 'May 2025', category: 'Process', author: 'Axon Broth', authorRole: 'Design Director',
    authorAvatar: '/images/portrait_3.jpg',
    heroImage: '/images/interior_kitchen.jpg',
    body: [
      'One of the most common questions we receive from prospective clients is: how do I know when I\'m ready to begin? The answer is rarely about budget alone. It is about clarity of intent, tolerance for disruption, and the quality of the brief you bring to your architect.',
      'First, you have a clear sense of what is not working. Before we can design a solution, we need to understand the problem. The clients who are most ready to begin are those who can articulate precisely what their current space fails to do — not just "it feels small" but "we have nowhere to cook together, nowhere for the children to do homework without disturbing each other, and the garden is completely disconnected from the living areas."',
      'Second, you have done your research — but not too much. Clients who arrive with a clear aesthetic direction are a pleasure to work with. Clients who arrive with a 400-image Pinterest board and a fixed floor plan are harder to help. Inspiration is essential; preconception is limiting.',
      'Third, you understand the planning context. Every site sits within a regulatory framework that will shape what is possible. Understanding the basics of your local planning rules — permitted development rights, conservation area constraints, listed building status — before engaging an architect will save significant time and money.',
      'Fourth, you have a realistic timeline. Renovation projects almost always take longer than expected, particularly where building consent is required. Budget for programme as generously as you budget for construction.',
      'Fifth — and most importantly — you have chosen the right architect. Not the most famous, not the cheapest, but the one whose values align with yours, whose built work moves you, and who listens as carefully as they design.',
    ],
    prevSlug: 'sustainable-materials', prevTitle: 'Why Sustainable Materials Are Reshaping Modern Architecture',
    nextSlug: 'biophilic-design', nextTitle: 'Biophilic Design: Bringing Nature Into Urban Homes',
  },
  'interior-layout-value': {
    title: 'How Interior Layout Impacts Property Value',
    date: 'April 2025', category: 'Interiors', author: 'Mara Lin', authorRole: 'Interior Lead',
    authorAvatar: '/images/portrait_2.jpg',
    heroImage: '/images/interior_living.jpg',
    body: [
      'The relationship between interior layout and property value is more direct than most people realise. Estate agents speak in percentages — a well-executed kitchen extension adds 8%, a converted loft adds 12% — but these figures obscure a more nuanced truth: it is not the square footage that matters, it is the quality of the spatial decisions made within it.',
      'The single most valuable spatial decision in any home is the relationship between the kitchen, dining, and living areas. The open-plan living arrangement — which has dominated residential design for thirty years — is now being reassessed. Clients increasingly want connectivity without total openness: spaces that can be closed for privacy, acoustic separation, and the simple pleasure of a kitchen that can be hidden from guests.',
      'Natural light is the second most powerful driver of value. A north-facing living room can be designed to feel luminous; a south-facing one can be ruined by poor solar shading. The orientation of principal rooms, the placement of windows, and the use of borrowed light through internal glazing are design decisions that will determine how a space feels for the entire life of the building.',
      'Circulation — the route through a building — is perhaps the least glamorous but most consequential design variable. Dead-end corridors, wasted hallway space, and bedrooms accessible only through other rooms are the spatial pathologies that devalue properties and frustrate occupants. Good circulation is invisible; you simply move through a building without thinking about it.',
    ],
    prevSlug: 'renovation-signs', prevTitle: '5 Signs Your Renovation Is Ready to Begin',
    nextSlug: 'concept-to-built-form', nextTitle: 'Inside Our Process: From Concept Sketch to Built Form',
  },
  'concept-to-built-form': {
    title: 'Inside Our Process: From Concept Sketch to Built Form',
    date: 'March 2025', category: 'Process', author: 'James Vile', authorRole: 'Principal Architect',
    authorAvatar: '/images/portrait_1.jpg',
    heroImage: '/images/exterior_hero.jpg',
    body: [
      'Architecture begins with listening. Before we pick up a pencil, we spend time understanding our clients — not just the functional requirements of their brief, but their daily rituals, their aesthetic instincts, the buildings they love and the ones they find hostile. A good brief is as valuable as a good design.',
      'The concept stage is the most generative and the most vulnerable phase of any project. Ideas are fragile before they are built. Our process at this stage is deliberately analogue — hand sketches, physical models, and conversations rather than renders and presentations. We want to think in three dimensions before we commit to the precision of CAD.',
      'Once a concept direction is agreed, we move into design development. This is where the idea is tested against reality: structural requirements, planning policy, client budget, material availability. The best designs survive this process intact; they may be refined, but their essential character is not compromised.',
      'Technical documentation is where architecture meets craft. The drawings and specifications we produce at this stage will govern the construction of the building — every material thickness, every fastening, every drainage detail. Poorly resolved technical documentation is the source of most construction problems and most cost overruns. We invest heavily here.',
      'Construction administration — the oversight of the building process on site — is where the design is finally tested. A good architect does not disappear after the drawings are issued; they remain present, making the hundreds of small decisions that arise when design meets reality. This is where the best work is made.',
    ],
    prevSlug: 'interior-layout-value', prevTitle: 'How Interior Layout Impacts Property Value',
    nextSlug: 'biophilic-design', nextTitle: 'Biophilic Design: Bringing Nature Into Urban Homes',
  },
  'biophilic-design': {
    title: 'Biophilic Design: Bringing Nature Into Urban Homes',
    date: 'February 2025', category: 'Design', author: 'Mara Lin', authorRole: 'Interior Lead',
    authorAvatar: '/images/portrait_2.jpg',
    heroImage: '/images/exterior_villa.jpg',
    body: [
      'Biophilia — the innate human affinity for the natural world — is not a design trend. It is a fundamental aspect of human psychology, supported by decades of research demonstrating that access to natural light, vegetation, natural materials, and views of nature improves wellbeing, reduces stress, and increases cognitive performance.',
      'In architecture, biophilic design translates into a set of spatial strategies that can be applied at every scale — from the placement of a single window to the organisation of an entire city. At the building level, the most effective strategies are often the simplest: maximising views of sky and vegetation, using natural materials whose texture and colour vary with light and age, and ensuring that occupants experience the passage of time through changing shadows and seasons.',
      'Living walls and planted terraces are the most visible expressions of biophilic design, but they are also among the most demanding to maintain. In our projects, we typically prefer planting strategies that are legible from inside the building — a carefully placed tree that casts dappled light through a south-facing window, a meadow-planted courtyard that can be seen but not necessarily entered.',
      'Natural materials — timber, stone, leather, linen — contribute to biophilic environments not because they are literally from nature, but because they carry the memory of it. A timber ceiling resonates at a frequency that plasterboard cannot; a limestone floor holds the history of its formation. These are not irrational preferences. They are the product of millions of years of human evolution in environments made of these materials.',
    ],
    prevSlug: 'concept-to-built-form', prevTitle: 'Inside Our Process: From Concept Sketch to Built Form',
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.body[0]?.slice(0, 160),
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img src={article.heroImage} alt={article.title}
          className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-12 z-10">
          <p className="kicker text-white/60 mb-3">{article.date} · {article.category}</p>
          <h1 className="font-display font-black text-white uppercase leading-none max-w-4xl"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 4.5rem)', letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-[720px] mx-auto">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-base text-neutral-gray leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}

          {/* Author card */}
          <div className="border-t border-black/10 pt-10 mt-10 flex items-center gap-5">
            <img src={article.authorAvatar} alt={`Portrait of ${article.author}`}
              className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-semibold text-black">{article.author}</p>
              <p className="text-neutral-gray text-sm">{article.authorRole} — STRATA Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-[#F4F4F4] py-12 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between gap-8">
          {article.prevSlug ? (
            <Link href={`/journal/${article.prevSlug}`} className="group flex items-center gap-4">
              <div className="w-10 h-10 bg-black group-hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="text-white rotate-180" />
              </div>
              <div>
                <p className="kicker text-neutral-gray mb-0.5">Previous Article</p>
                <p className="font-semibold text-black text-sm max-w-xs">{article.prevTitle}</p>
              </div>
            </Link>
          ) : <div />}
          {article.nextSlug && (
            <Link href={`/journal/${article.nextSlug}`} className="group flex items-center gap-4 sm:flex-row-reverse text-right">
              <div className="w-10 h-10 bg-black group-hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="text-white" />
              </div>
              <div>
                <p className="kicker text-neutral-gray mb-0.5">Next Article</p>
                <p className="font-semibold text-black text-sm max-w-xs">{article.nextTitle}</p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
