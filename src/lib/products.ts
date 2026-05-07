import type { Category, Product } from '@/types/product';

/**
 * Image-variant mapping: maps product image strings to ImagePlaceholder variants
 * for development. Once real photos land in /public/images/, switch image
 * fields to file paths and the ProductCard / ProductGallery components will
 * render them via next/image instead.
 */
export type ImageVariant =
  | 'hero-couple'
  | 'female-solo'
  | 'male-solo'
  | 'architectural'
  | 'fabric-detail'
  | 'flat-lay-tee';

export interface ProductWithVariants extends Product {
  imageVariants: ImageVariant[];
}

export const products: ProductWithVariants[] = [
  {
    slug: 'heavyweight-cotton-tee',
    name: 'Heavyweight cotton t-shirt',
    category: 'essentials',
    price: 85,
    currency: 'EUR',
    images: ['/images/flat-lay-tee.jpg', '/images/female-solo.jpg'],
    imageVariants: ['flat-lay-tee', 'female-solo'],
    shortDescription:
      'A heavyweight cotton t-shirt cut for an oversized fit, with a high crew neck and dropped shoulder.',
    story:
      'Made in Portugal from 280gsm organic cotton, woven on slow looms in Porto. Garment-dyed in warm off-white for a softened, lived-in finish.',
    materials: ['100% organic cotton, 280gsm', 'Garment-dyed in Portugal'],
    fit: 'Oversized. Drops one size below natural shoulder. Size up for a relaxed fit.',
    care: ['Wash cold with similar colours', 'Tumble dry low', 'Iron warm, inside out'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Off-white', hex: '#F4EFE7' },
      { name: 'Sand', hex: '#C4B099' },
      { name: 'Ink', hex: '#1C1815' },
    ],
    inStock: true,
  },
  {
    slug: 'ribbed-wool-knit',
    name: 'Ribbed wool knit sweater',
    category: 'knitwear',
    price: 295,
    currency: 'EUR',
    images: ['/images/male-solo.jpg', '/images/fabric-detail.jpg'],
    imageVariants: ['male-solo', 'fabric-detail'],
    shortDescription:
      'A heavyweight ribbed knit in pure merino wool, with a relaxed crew neck and dropped shoulder.',
    story:
      'Knitted in a small mill in Biella, Italy, from undyed merino sourced from a single estate. Each piece takes four hours to finish.',
    materials: ['100% merino wool', 'Knitted in Biella, Italy'],
    fit: 'Relaxed. True to size. Hangs softly from the shoulder.',
    care: ['Hand wash cold or dry clean', 'Lay flat to dry', 'Steam to refresh'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Espresso', hex: '#3D2E26' },
      { name: 'Stone', hex: '#8A847C' },
    ],
    inStock: true,
  },
  {
    slug: 'pleated-tailored-trouser',
    name: 'Pleated tailored trouser',
    category: 'tailoring',
    price: 225,
    currency: 'EUR',
    images: ['/images/female-solo.jpg', '/images/hero-couple.jpg'],
    imageVariants: ['female-solo', 'hero-couple'],
    shortDescription:
      'A high-waisted pleated trouser in soft wool blend, cut for a relaxed leg with a clean drape.',
    story:
      'Tailored in northern Portugal from a wool-linen blend that softens with every wear.',
    materials: ['68% wool, 32% linen', 'Made in Portugal'],
    fit: 'High-waisted, relaxed leg. Sits at the natural waist.',
    care: ['Dry clean only', 'Steam to refresh', 'Hang on a wide hanger'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand', hex: '#C4B099' },
      { name: 'Ink', hex: '#1C1815' },
    ],
    inStock: true,
  },
  {
    slug: 'linen-overshirt',
    name: 'Linen overshirt',
    category: 'essentials',
    price: 165,
    currency: 'EUR',
    images: ['/images/architectural.jpg', '/images/hero-couple.jpg'],
    imageVariants: ['architectural', 'hero-couple'],
    shortDescription: 'An unstructured overshirt in heavyweight linen, cut for layering.',
    story: 'Woven from Belgian flax and finished by hand at a small atelier in Porto.',
    materials: ['100% European linen', 'Made in Portugal'],
    fit: 'Relaxed. Designed to be worn open over a t-shirt.',
    care: [
      'Wash cold',
      'Line dry',
      'Iron warm if desired (linen is meant to wrinkle)',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Off-white', hex: '#F4EFE7' },
      { name: 'Olive', hex: '#6B6B5C' },
    ],
    inStock: true,
  },
  {
    slug: 'cable-knit-cardigan',
    name: 'Cable-knit cardigan',
    category: 'knitwear',
    price: 345,
    currency: 'EUR',
    images: ['/images/fabric-detail.jpg', '/images/male-solo.jpg'],
    imageVariants: ['fabric-detail', 'male-solo'],
    shortDescription:
      'A heavy cable cardigan in undyed lambswool, finished with horn buttons.',
    story:
      'Hand-finished in a family mill in Yorkshire that has been knitting since 1908.',
    materials: ['100% lambswool', 'Horn buttons', 'Made in England'],
    fit: 'Oversized. Sits below the hip.',
    care: ['Hand wash or dry clean', 'Lay flat to dry'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Espresso', hex: '#3D2E26' },
      { name: 'Oat', hex: '#D4C8B5' },
    ],
    inStock: false,
  },
  {
    slug: 'wide-leg-linen-trouser',
    name: 'Wide-leg linen trouser',
    category: 'tailoring',
    price: 195,
    currency: 'EUR',
    images: ['/images/architectural.jpg', '/images/female-solo.jpg'],
    imageVariants: ['architectural', 'female-solo'],
    shortDescription: 'A wide-leg trouser in pure linen, with a soft drawstring waist.',
    story: 'Made from heavyweight Belgian linen that softens with each wash.',
    materials: ['100% European linen', 'Made in Portugal'],
    fit: 'Wide leg, drawstring waist. Relaxed.',
    care: ['Wash cold', 'Line dry', 'Iron warm if desired'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand', hex: '#C4B099' },
      { name: 'Ink', hex: '#1C1815' },
    ],
    inStock: true,
  },
];

export function getProduct(slug: string): ProductWithVariants | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): ProductWithVariants[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(
  slug: string,
  count = 3
): ProductWithVariants[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, count);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, count)
    .concat(
      products.filter((p) => p.slug !== slug && p.category !== current.category)
    )
    .slice(0, count);
}
