'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ProductWithVariants } from '@/lib/products';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: ProductWithVariants;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hover, setHover] = useState(false);
  const hasSecondImage = product.imageVariants.length > 1;

  return (
    <Link
      href={`/shop/${product.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-off-white mb-6">
        {/* Primary image */}
        <div
          className="absolute inset-0 transition-opacity duration-600 ease-auren"
          style={{ opacity: hover && hasSecondImage ? 0 : 1 }}
        >
          <CampaignImage
            variant={product.imageVariants[0]}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Secondary image (only if exists) */}
        {hasSecondImage && (
          <div
            className="absolute inset-0 transition-opacity duration-600 ease-auren"
            style={{ opacity: hover ? 1 : 0 }}
          >
            <CampaignImage
              variant={product.imageVariants[1]}
              alt={`${product.name}, alternate view`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        {/* View label */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-6 small-caps text-cream opacity-0 transition-opacity duration-400 ease-auren delay-100 group-hover:opacity-100"
        >
          View →
        </span>

        {/* Sold out overlay */}
        {!product.inStock && (
          <div className="absolute top-6 left-6 small-caps-xs italic text-cream">
            Sold out
          </div>
        )}
      </div>

      <div className="space-y-1.5">
        <h3 className="font-serif text-lg md:text-xl text-ink leading-tight">
          {product.name}
        </h3>
        <p className="small-caps text-ink-muted">{formatPrice(product.price, 'EUR')}</p>
      </div>
    </Link>
  );
}
