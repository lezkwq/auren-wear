'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Women', href: '/shop?category=women' },
      { label: 'Men', href: '/shop?category=men' },
      { label: 'Essentials', href: '/shop/essentials' },
      { label: 'Collections', href: '/collections' },
    ],
  },
  {
    heading: 'Brand',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Stores', href: '/stores' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Care', href: '/care' },
    ],
  },
];

function NewsletterInput() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'received'>('idle');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('received');
      setEmail('');
    }, 400);
  };

  return (
    <div>
      <h4 className="small-caps-xs text-ink-muted mb-6">Letter</h4>
      <p className="text-caption text-ink-soft mb-5 leading-relaxed">
        Receive our seasonal letter. Quietly considered, sent four times a year.
      </p>
      {status === 'received' ? (
        <p className="text-caption text-ink-soft italic">
          Thank you. We will write soon.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="relative">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-transparent border-b border-ink/20 py-2 pr-8 text-body focus:outline-none focus:border-ink transition-colors duration-300 ease-auren placeholder:text-ink-faint"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            disabled={status === 'submitting'}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors duration-300 disabled:opacity-50"
          >
            →
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream pt-32 pb-16">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-20">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="small-caps-xs text-ink-muted mb-6">{col.heading}</h4>
              <ul className="space-y-3 text-caption">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <NewsletterInput />
        </div>

        <div aria-hidden="true" className="border-t border-border mb-16" />

        <div className="text-center mb-16">
          <p className="font-serif text-6xl md:text-8xl font-light tracking-[0.2em] text-ink">
            AUREN
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 small-caps-xs text-ink-muted">
          <p>© 2026 AUREN · Bela Vista, Gaspar — Santa Catarina, Brazil</p>

          <div className="flex items-center gap-8">
            <Link href="/privacy" className="link-underline">
              Privacy
            </Link>
            <Link href="/terms" className="link-underline">
              Terms
            </Link>
            <Link href="/accessibility" className="link-underline">
              Accessibility
            </Link>
            <a
              href="https://instagram.com/leanzzk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @leanzzk"
              className="text-ink-muted hover:text-ink transition-colors duration-300 ease-auren"
            >
              <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
