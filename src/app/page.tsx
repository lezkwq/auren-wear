import { Hero } from '@/components/home/Hero';
import { BrandStatement } from '@/components/home/BrandStatement';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { EditorialPause } from '@/components/home/EditorialPause';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { Philosophy } from '@/components/home/Philosophy';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <EditorialPause />
      <CategoryGrid />
      <Philosophy />
    </>
  );
}
