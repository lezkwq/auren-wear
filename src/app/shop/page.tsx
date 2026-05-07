import Link from 'next/link';
import type { Metadata } from 'next';
import {
  products,
  getProductsByCategory,
} from '@/lib/products';
import type { Category } from '@/types/product';
import { ProductGrid } from '@/components/product/ProductGrid';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'The AUREN collection — knitwear, tailoring, and essentials, slowly made.',
};

const categories: Array<{ label: string; slug: Category | 'all' }> = [
  { label: 'All', slug: 'all' },
  { label: 'Knitwear', slug: 'knitwear' },
  { label: 'Tailoring', slug: 'tailoring' },
  { label: 'Essentials', slug: 'essentials' },
];

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = (searchParams.category as Category | undefined) ?? 'all';
  const displayed =
    activeCategory === 'all'
      ? products
      : getProductsByCategory(activeCategory as Category);

  return (
    <div className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <p className="small-caps-xs text-ink-muted mb-3">Shop</p>
        <h1 className="font-serif text-display-md md:text-display-lg font-light mb-12">
          The collection.
        </h1>

        {/* Category filter — quiet text links, no pills */}
        <nav
          aria-label="Filter by category"
          className="flex flex-wrap items-baseline gap-x-8 gap-y-3"
        >
          {categories.map((cat) => {
            const href =
              cat.slug === 'all' ? '/shop' : `/shop?category=${cat.slug}`;
            const isActive = activeCategory === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={href}
                className={cn(
                  'small-caps transition-colors duration-300',
                  isActive ? 'text-ink link-underline' : 'text-ink-muted hover:text-ink'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>

        <p className="small-caps-xs text-ink-muted mt-8">
          {displayed.length} {displayed.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <ProductGrid products={displayed} />
    </div>
  );
}
