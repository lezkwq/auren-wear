import type { ImageVariant } from '@/lib/products';

interface AssetEntry {
  src: string;
  /**
   * object-position override per asset. Source images are 16:9 horizontal;
   * when displayed in 4:5 portrait frames (product cards, grid), this
   * controls which part of the image is preserved.
   */
  position?: string;
}

/**
 * Mapping of campaign image variants to their /public paths and recommended
 * object-position values. Source files live in /public/images/ and are PNG
 * 1672×941 (six horizontal) or 941×1672 (one vertical). Keep filenames in
 * sync with /public/images/.
 */
export const imageAssets: Record<ImageVariant, AssetEntry> = {
  'hero-couple': {
    src: '/images/hero-couple.png',
    // Subjects are slightly right-of-center; nudge crop right when in portrait frames
    position: 'center 30%',
  },
  'female-solo': {
    src: '/images/female-solo.png',
    // Subject occupies the right two-thirds in 16:9; in portrait crops keep her in frame
    position: '70% center',
  },
  'male-solo': {
    src: '/images/male-solo.png',
    // Subject is centered; default works
    position: 'center center',
  },
  architectural: {
    src: '/images/architectural.png',
    // Subjects in lower-right; preserve them in portrait crops
    position: '70% 60%',
  },
  'fabric-detail': {
    src: '/images/fabric-detail.png',
    position: 'center center',
  },
  'flat-lay-tee': {
    src: '/images/flat-lay-tee.png',
    position: 'center center',
  },
};

/**
 * Source intrinsic dimensions for next/image with `fill` (no width/height props).
 * The `fill` mode doesn't need these but we expose for callers that prefer
 * width/height props (eg fixed-size CartItem thumbnails).
 */
export const SOURCE_W = 1672;
export const SOURCE_H = 941;
