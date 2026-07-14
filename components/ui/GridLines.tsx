'use client';

// Decorative vertical guide lines — the signature "blueprint" grid effect
// matching the thin orange verticals visible throughout the Doorly reference
export default function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] flex justify-between"
      style={{ padding: '0 clamp(1.25rem, 5vw, 5rem)' }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-px h-full opacity-20"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      ))}
    </div>
  );
}
