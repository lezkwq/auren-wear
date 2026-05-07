import Image from 'next/image';
import type { ImageVariant } from '@/lib/products';
import { imageAssets } from '@/lib/images';
import { cn } from '@/lib/utils';

interface CampaignImageProps {
  variant: ImageVariant;
  alt: string;
  /** Pass `priority` for above-the-fold images (hero only) */
  priority?: boolean;
  /** Override the responsive `sizes` attribute. Defaults to a sensible value. */
  sizes?: string;
  /** Tailwind className for object-fit and other treatments */
  className?: string;
  /** Override object-position. Defaults to the asset's recommended value. */
  objectPosition?: string;
}

export function CampaignImage({
  variant,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  className,
  objectPosition,
}: CampaignImageProps) {
  const asset = imageAssets[variant];
  const position = objectPosition ?? asset.position ?? 'center';

  return (
    <Image
      src={asset.src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn('object-cover', className)}
      style={{ objectPosition: position }}
    />
  );
}
