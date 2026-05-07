import { notFound } from 'next/navigation';
import { getProduct, getRelatedProducts, products } from '@/lib/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductGrid } from '@/components/product/ProductGrid';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) return { title: 'Not found — AUREN' };
  return {
    title: `${product.name} — AUREN`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(params.slug, 3);

  return (
    <article className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Gallery + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <ProductGallery images={product.imageVariants} alt={product.name} />
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* The story */}
      <section className="mt-32 md:mt-40 max-w-prose mx-auto">
        <p className="small-caps-xs text-ink-muted text-center mb-6">The story</p>
        <p className="font-serif text-display-sm md:text-display-md font-light text-ink-soft leading-relaxed text-center">
          {product.story}
        </p>
      </section>

      {/* Pairs with */}
      {related.length > 0 && (
        <section className="mt-32 md:mt-40">
          <p className="small-caps-xs text-ink-muted mb-12">Pairs with</p>
          <ProductGrid products={related} />
        </section>
      )}
    </article>
  );
}
