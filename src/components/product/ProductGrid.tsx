import type { ProductWithVariants } from '@/lib/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ProductWithVariants[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="font-serif text-display-sm font-light text-ink-muted text-center py-24">
        No pieces in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-20">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
