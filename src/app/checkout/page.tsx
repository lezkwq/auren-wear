'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart, useCartTotal } from '@/store/cart';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const WHATSAPP_NUMBER = '5547992754013';

function formatCartForWhatsApp(
  items: ReturnType<typeof useCart.getState>['items'],
  total: number
): string {
  const lines: string[] = [
    'Hello AUREN, I would like to place an order:',
    '',
  ];
  items.forEach((item) => {
    lines.push(
      `· ${item.name} — ${item.color}, ${item.size} × ${item.quantity} (${formatPrice(item.price * item.quantity, 'EUR')})`
    );
  });
  lines.push('', `Subtotal: ${formatPrice(total, 'EUR')}`);
  lines.push('', 'Please send shipping and payment details. Thank you.');
  return encodeURIComponent(lines.join('\n'));
}

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const total = useCartTotal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-render an empty placeholder; cart contents only appear after hydration.
  if (!mounted) {
    return (
      <div className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-prose mx-auto text-center py-24">
          <p className="font-serif text-display-md font-light text-ink-soft">
            Loading…
          </p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-prose mx-auto text-center py-24">
          <h1 className="font-serif text-display-md md:text-display-lg font-light mb-6">
            Your bag is empty.
          </h1>
          <p className="text-body text-ink-soft mb-12 leading-relaxed">
            There is nothing here to check out yet.
          </p>
          <Link
            href="/shop"
            className="link-underline small-caps inline-flex items-center gap-2 group"
          >
            View the collection
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formatCartForWhatsApp(items, total)}`;

  return (
    <div className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-prose mx-auto">
        <p className="small-caps-xs text-ink-muted text-center mb-6">Checkout</p>
        <h1 className="font-serif text-display-md md:text-display-lg font-light text-center mb-12 leading-tight">
          A quiet conclusion.
        </h1>

        <div className="space-y-5 text-body text-ink-soft leading-relaxed mb-16">
          <p>
            AUREN is a small studio. We complete each order by hand on WhatsApp —
            it lets us answer questions, confirm sizing, and arrange shipping with
            care.
          </p>
          <p>
            The button below opens WhatsApp with your bag pre-filled. We will reply
            within a day or two, never immediately, always thoughtfully.
          </p>
        </div>

        {/* Order summary */}
        <div className="border-y border-border py-8 mb-12">
          <p className="small-caps-xs text-ink-muted mb-6">Your bag</p>
          <ul className="space-y-3 text-body text-ink-soft mb-6">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-4">
                <span>
                  {item.name} — {item.color}, {item.size} × {item.quantity}
                </span>
                <span className="small-caps text-ink whitespace-nowrap">
                  {formatPrice(item.price * item.quantity, 'EUR')}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-baseline pt-6 border-t border-border">
            <span className="small-caps text-ink-muted">Subtotal</span>
            <span className="font-serif text-display-sm font-light">
              {formatPrice(total, 'EUR')}
            </span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="primary" type="button">
            Continue on WhatsApp
          </Button>
        </a>

        <p className="small-caps-xs text-ink-muted text-center mt-8">
          +55 47 99275-4013 · Bela Vista, Gaspar
        </p>
      </div>
    </div>
  );
}
