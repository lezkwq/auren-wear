'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ProductWithVariants } from '@/lib/products';
import { useCart } from '@/store/cart';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { cn, formatPrice } from '@/lib/utils';

interface ProductInfoProps {
  product: ProductWithVariants;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const add = useCart((s) => s.add);

  const onAddToBag = () => {
    if (!selectedSize) {
      setError('Please choose a size.');
      return;
    }
    setError(null);
    add({
      id: `${product.slug}-${selectedSize}-${selectedColor}`,
      productSlug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      imageVariant: product.imageVariants[0],
    });
  };

  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="small-caps-xs text-ink-muted">
        <Link href="/shop" className="link-underline">
          Shop
        </Link>
        <span className="mx-2" aria-hidden="true">·</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="link-underline"
        >
          {categoryLabel}
        </Link>
      </nav>

      {/* Heading */}
      <div>
        <h1 className="font-serif text-display-sm md:text-display-md font-light leading-tight mb-4">
          {product.name}
        </h1>
        <p className="small-caps text-ink-muted">
          {formatPrice(product.price, 'EUR')}
        </p>
      </div>

      {/* Description */}
      <p className="text-body text-ink-soft leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Color selector */}
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <p className="small-caps-xs text-ink-muted">Colour</p>
          <p className="small-caps-xs text-ink">{selectedColor}</p>
        </div>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              aria-label={color.name}
              aria-pressed={selectedColor === color.name}
              className={cn(
                'w-8 h-8 rounded-[2px] transition-all duration-300 ease-auren',
                selectedColor === color.name
                  ? 'ring-1 ring-ink ring-offset-2 ring-offset-cream'
                  : 'border border-border hover:border-border-hover'
              )}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <p className="small-caps-xs text-ink-muted">Size</p>
          <button className="link-underline small-caps-xs text-ink">Size guide</button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                setSelectedSize(size);
                setError(null);
              }}
              aria-pressed={selectedSize === size}
              className={cn(
                'h-12 small-caps transition-colors duration-300 ease-auren rounded-[2px]',
                selectedSize === size
                  ? 'border border-ink text-ink'
                  : 'border border-border text-ink-soft hover:border-border-hover'
              )}
            >
              {size}
            </button>
          ))}
        </div>
        {error && (
          <p className="text-caption text-ink-soft italic mt-3">{error}</p>
        )}
      </div>

      {/* Add to bag */}
      <div>
        {product.inStock ? (
          <Button variant="primary" type="button" onClick={onAddToBag}>
            Add to bag
          </Button>
        ) : (
          <Button variant="primary" type="button" disabled>
            Sold out
          </Button>
        )}
      </div>

      {/* Accordions */}
      <div>
        <Accordion title="Materials">
          <ul className="space-y-2">
            {product.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Fit">
          <p>{product.fit}</p>
        </Accordion>
        <Accordion title="Care">
          <ul className="space-y-2">
            {product.care.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
