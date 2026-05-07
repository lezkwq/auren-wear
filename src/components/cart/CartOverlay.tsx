'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart, useCartTotal } from '@/store/cart';
import { CartItem } from './CartItem';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

export function CartOverlay() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const items = useCart((s) => s.items);
  const total = useCartTotal();

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={close}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Bag"
            className="fixed inset-x-0 top-0 z-50 max-h-screen overflow-y-auto bg-cream"
          >
            {/* Sticky close — always reachable while scrolling a long bag */}
            <button
              onClick={close}
              aria-label="Close bag"
              className="fixed top-6 right-6 md:top-8 md:right-10 z-10 small-caps-xs text-ink"
            >
              Close ✕
            </button>

            <div className="container-page py-12">
              <div className="mb-12 md:mb-16">
                <h2 className="font-serif text-display-md md:text-display-lg font-light">
                  Bag
                  {items.length > 0 && (
                    <span className="ml-3 small-caps-xs text-ink-muted align-middle">
                      ({items.length} {items.length === 1 ? 'piece' : 'pieces'})
                    </span>
                  )}
                </h2>
              </div>

              {items.length === 0 ? (
                <div className="py-16 md:py-24 text-center">
                  <p className="font-serif text-display-sm md:text-display-md font-light text-ink-soft mb-4">
                    Your bag is empty.
                  </p>
                  <p className="text-body text-ink-muted mb-12">
                    When something feels right, add it here.
                  </p>
                  <Link
                    href="/shop"
                    onClick={close}
                    className="link-underline small-caps inline-flex items-center gap-2 group"
                  >
                    Continue browsing
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-border border-y border-border">
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </ul>

                  <div className="mt-12 md:mt-16 flex justify-between items-baseline">
                    <span className="small-caps text-ink-muted">Subtotal</span>
                    <span className="font-serif text-display-sm md:text-display-md font-light">
                      {formatPrice(total, 'EUR')}
                    </span>
                  </div>

                  <p className="text-caption text-ink-muted mt-3 mb-12">
                    Shipping calculated at checkout.
                  </p>

                  <div className="max-w-md ml-auto">
                    <Link href="/checkout" onClick={close}>
                      <Button variant="primary" type="button">
                        Continue to checkout
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
