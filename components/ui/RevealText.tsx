'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOnLoad?: boolean;
}

export default function RevealText({ children, className = '', delay = 0, triggerOnLoad = false }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // We animate the child div inside the overflow-hidden container
    const element = containerRef.current.children[0] as HTMLElement;

    if (triggerOnLoad) {
      gsap.fromTo(
        element,
        { y: '110%', rotate: 2 },
        { y: '0%', rotate: 0, duration: 1.2, ease: 'power4.out', delay }
      );
    } else {
      gsap.fromTo(
        element,
        { y: '110%', rotate: 2 },
        {
          y: '0%',
          rotate: 0,
          duration: 1.2,
          ease: 'power4.out',
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%', // Trigger when top of element hits 90% down the viewport
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden inline-block ${className}`} style={{ verticalAlign: 'top' }}>
      <div style={{ transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  );
}
