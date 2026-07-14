'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

// ContactForm — mirrors Doorly screenshot 11:
// Left: kicker, headline, subcopy, contact info with icons
// Right: white card form with clean inputs
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden min-h-[80vh]"
      aria-labelledby="contact-heading"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
          alt="Luxury architectural exterior with ocean views"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-20 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker text-white/60 mb-5">[ Contact Us ]</p>
            <h2
              id="contact-heading"
              className="font-display font-black text-white uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              GET IN TOUCH
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-12 max-w-sm">
              Ready to start your project? Reach out to our team for expert architectural guidance
              and a complimentary design consultation.
            </p>

            {/* Contact info — icon rows matching screenshot 11 */}
            <div className="space-y-5">
              {[
                { Icon: MapPin, text: '123 Architects Row, New York, NY 10001' },
                { Icon: Mail, text: 'hello@strata.studio', href: 'mailto:hello@strata.studio' },
                { Icon: Phone, text: '+1 (555) 555-0100', href: 'tel:+15555550100' },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-black flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </span>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-accent transition-colors text-sm leading-relaxed pt-2">
                      {text}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm leading-relaxed pt-2">{text}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form card — white card matching screenshot 11 */}
          <motion.div
            className="bg-white p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="font-display font-black text-black text-2xl uppercase">Message Sent!</h3>
                <p className="text-neutral-gray text-sm">We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-xs tracking-widest uppercase font-semibold text-accent underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-black mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    {...register('name')}
                    className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-black mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    {...register('email')}
                    className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold tracking-widest uppercase text-black mb-2">
                    Phone number <span className="text-neutral-gray font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    {...register('phone')}
                    className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold tracking-widest uppercase text-black mb-2">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors bg-white appearance-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="masterplanning">Concept & Masterplanning</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    {...register('message')}
                    className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <XCircle size={16} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center bg-black text-white text-xs font-semibold tracking-widest uppercase h-[52px] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-accent transition-colors duration-200"
                  aria-label="Submit contact form"
                >
                  <span className="px-8">{status === 'loading' ? 'SENDING...' : 'SUBMIT'}</span>
                  <span className="flex items-center justify-center w-[52px] h-[52px] bg-accent">
                    <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
