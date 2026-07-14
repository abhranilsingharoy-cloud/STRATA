import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'cta' | 'chip-only' | 'outline';
  label?: string;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

// Reusable button system matching Doorly's arrow-chip pattern:
// - 'cta': orange text label + black arrow chip (e.g. "CONTACT US →")
// - 'chip-only': orange square with arrow only (card corner arrows)
// - 'outline': white label + orange chip
export default function Button({
  href,
  onClick,
  variant = 'cta',
  label,
  className,
  external,
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const isChipOnly = variant === 'chip-only';

  const inner = isChipOnly ? (
    <span
      className={cn(
        'group arrow-chip w-12 h-12 flex items-center justify-center bg-accent text-black relative overflow-hidden',
        className
      )}
      aria-label={ariaLabel || label}
    >
      <div className="flex relative w-full h-full items-center justify-center">
        <ArrowRight size={18} strokeWidth={2.5} className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
        <ArrowRight size={18} strokeWidth={2.5} className="absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
      </div>
    </span>
  ) : (
    <span className={cn('group btn-cta', className)}>
      <span className="px-6 py-0 leading-none">{label}</span>
      <span className="chip bg-black flex items-center justify-center w-[52px] h-[52px] relative overflow-hidden">
        <div className="flex relative w-full h-full items-center justify-center">
          <ArrowRight size={16} strokeWidth={2.5} color="#fff" className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
          <ArrowRight size={16} strokeWidth={2.5} color="#fff" className="absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
        </div>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel || label}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className="disabled:opacity-50 disabled:pointer-events-none"
    >
      {inner}
    </button>
  );
}
