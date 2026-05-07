'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 bg-cream overflow-y-auto"
        >
          <div className="container-page flex h-16 md:h-20 items-center justify-between">
            <span className="font-serif text-xl font-light tracking-[0.2em] text-ink">
              AUREN
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="small-caps-xs text-ink"
            >
              Close ✕
            </button>
          </div>

          <nav className="container-page pt-12 pb-16">
            <ul className="space-y-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.06,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-serif text-3xl md:text-4xl font-light text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-24 pt-12 border-t border-border">
              <p className="small-caps-xs text-ink-muted mb-6">Contact</p>
              <div className="space-y-4 text-body text-ink-soft">
                <p>
                  <a
                    href="https://wa.me/5547992754013?text=Hello%20AUREN%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    WhatsApp — +55 47 99275-4013
                  </a>
                </p>
                <p>
                  <a
                    href="https://instagram.com/leanzzk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram — @leanzzk"
                    className="link-underline inline-flex items-center gap-2"
                  >
                    <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
                    @leanzzk
                  </a>
                </p>
              </div>
              <p className="small-caps-xs text-ink-muted mt-12">
                Bela Vista, Gaspar — Santa Catarina, Brazil
              </p>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
