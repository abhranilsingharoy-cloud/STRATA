'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-white font-semibold">
        ✓ You're subscribed! Thank you.
      </p>
    );
  }

  return (
    <form className="flex w-full max-w-md" onSubmit={handleSubmit} aria-label="Newsletter signup">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-5 py-3 text-sm bg-white/10 text-white placeholder:text-white/30 border border-white/20 focus:outline-none focus:border-[#FF5A2E]"
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center bg-[#FF5A2E] text-white px-6 text-xs font-semibold tracking-widest uppercase whitespace-nowrap disabled:opacity-60"
        aria-label="Subscribe to newsletter"
      >
        {status === 'loading' ? '...' : 'SUBSCRIBE'}
      </button>
    </form>
  );
}
