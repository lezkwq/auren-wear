import type { ImageVariant } from '@/lib/products';
import { CampaignImage } from '@/components/ui/CampaignImage';

interface ProductGalleryProps {
  images: ImageVariant[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {images.map((variant, i) => (
        <div
          key={`${variant}-${i}`}
          className="relative aspect-[4/5] overflow-hidden bg-off-white"
        >
          <CampaignImage
            variant={variant}
            alt={i === 0 ? alt : `${alt}, view ${i + 1}`}
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      ))}
    </div>
  );
}
