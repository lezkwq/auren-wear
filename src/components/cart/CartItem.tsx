'use client';

import { useCart, type CartLine } from '@/store/cart';
import type { ImageVariant } from '@/lib/products';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  item: CartLine;
}

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCart((s) => s.updateQuantity);
  const remove = useCart((s) => s.remove);

  return (
    <li className="flex gap-6 py-8">
      <div className="relative w-24 h-32 flex-shrink-0 overflow-hidden">
        <CampaignImage
          variant={item.imageVariant as ImageVariant}
          alt={item.name}
          sizes="96px"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-serif text-lg leading-tight mb-1.5">{item.name}</h3>
          <p className="small-caps-xs text-ink-muted">
            {item.color} · {item.size}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3 small-caps-xs">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="text-ink-muted hover:text-ink transition-colors duration-300 w-5 text-left"
            >
              −
            </button>
            <span className="text-ink min-w-[1ch] text-center" aria-live="polite">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="text-ink-muted hover:text-ink transition-colors duration-300 w-5 text-left"
            >
              +
            </button>
          </div>

          <p className="small-caps text-ink">
            {formatPrice(item.price * item.quantity, 'EUR')}
          </p>
        </div>
      </div>

      <button
        onClick={() => remove(item.id)}
        className="link-underline small-caps-xs text-ink-muted self-start"
      >
        Remove
      </button>
    </li>
  );
}
