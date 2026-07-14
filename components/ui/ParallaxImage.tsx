'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Adjusts parallax intensity (negative moves slower than scroll)
  scale?: number; // Starting scale so image has room to move without clipping
}

export default function ParallaxImage({ src, alt, className = '', speed = 0.5, scale = 1.2 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { y: `-${speed * 10}%` }, // Start slightly shifted up
      {
        y: `${speed * 10}%`, // End slightly shifted down
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Start animating when top of container hits bottom of viewport
          end: 'bottom top',   // End animating when bottom of container hits top of viewport
          scrub: true,         // Link animation progress directly to scrollbar
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover origin-center"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
