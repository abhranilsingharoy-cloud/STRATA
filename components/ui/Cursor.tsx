'use client';

import { useEffect, useRef } from 'react';

// Custom magnetic cursor — replaces native, grows on interactive elements
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      ring.classList.add('cursor-grow');
      dot.classList.add('cursor-hide');
    };

    const onLeaveInteractive = () => {
      ring.classList.remove('cursor-grow');
      dot.classList.remove('cursor-hide');
    };

    window.addEventListener('mousemove', onMove);
    animate();

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], .arrow-chip, .card-hover'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          background: var(--color-accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition: opacity 0.2s;
        }
        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border: 1.5px solid var(--color-accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition: width 0.3s var(--ease-out-expo),
                      height 0.3s var(--ease-out-expo),
                      opacity 0.2s;
        }
        .cursor-ring.cursor-grow {
          width: 70px;
          height: 70px;
          background: rgba(255,90,46,0.08);
          border-color: var(--color-accent);
        }
        .cursor-dot.cursor-hide { opacity: 0; }
        @media (hover: none) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
