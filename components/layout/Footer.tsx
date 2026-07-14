import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const studioLinks = [
  { href: '/studio', label: 'Platform' },
  { href: '/services', label: 'Features' },
  { href: '/projects', label: 'Use Cases' },
  { href: '/team', label: 'Company' },
];
const resourceLinks = [
  { href: '/journal', label: 'Research' },
  { href: '/contact', label: 'Demo' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];
const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Pinterest' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white relative overflow-hidden" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-black tracking-widest uppercase text-white mb-1">
              ECO.AI<span className="text-accent">©</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-[260px]">
              Designing Smarter, Sustainable Cities with Generative AI.
            </p>
            <div className="mt-8">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`ECO.AI on ${s.label}`}
                    className="text-white/40 hover:text-accent transition-colors text-xs tracking-widest uppercase"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Studio links */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Platform Links</p>
            <ul className="space-y-3">
              {studioLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Resources</p>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Get in Touch</p>
            <div className="space-y-3 text-sm text-white/70">
              <p>123 Architects Row<br />New York, NY 10001</p>
              <a href="mailto:hello@ecoarchitect.ai" className="block hover:text-accent transition-colors">
                hello@ecoarchitect.ai
              </a>
              <a href="tel:+15555550100" className="block hover:text-accent transition-colors">
                +1 (555) 555-0100
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center h-12 bg-accent text-white text-xs font-semibold tracking-widest uppercase"
            >
              <span className="px-5">Request Demo</span>
              <span className="flex items-center justify-center w-12 h-12 bg-black">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-[1600px] mx-auto px-6 md:px-20 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Eco Architect AI. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">
          Designing Smarter, Sustainable Cities.
        </p>
      </div>

      {/* Giant decorative wordmark — matches Doorly footer exactly */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none w-full overflow-hidden leading-none"
        style={{ marginTop: '-0.05em' }}
      >
        <p
          className="font-display font-black text-white/[0.04] uppercase tracking-tighter"
          style={{
            fontSize: 'clamp(6rem, 18vw, 22rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          ECO.AI©
        </p>
      </div>
    </footer>
  );
}
