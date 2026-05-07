import Link from 'next/link';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { Reveal } from '@/components/ui/Reveal';

const featured = [
  {
    name: 'Heavyweight cotton t-shirt',
    price: '€85',
    slug: 'heavyweight-cotton-tee',
    swatch: 'linear-gradient(135deg, #f4efe7 0%, #e8e0d0 100%)',
  },
  {
    name: 'Pleated tailored trouser',
    price: '€225',
    slug: 'pleated-tailored-trouser',
    swatch: 'linear-gradient(135deg, #c4b5a0 0%, #a89580 100%)',
  },
  {
    name: 'Ribbed wool knit sweater',
    price: '€295',
    slug: 'ribbed-wool-knit',
    swatch: 'linear-gradient(135deg, #5d4438 0%, #3d2e26 100%)',
  },
];

export function FeaturedCollection() {
  return (
    <section className="bg-cream section-y">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image — left */}
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <CampaignImage
                variant="female-solo"
                alt="AUREN — featured collection, woman in off-white t-shirt and sand trousers"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </Reveal>

          {/* Products — right */}
          <div className="lg:col-span-5 lg:pl-8">
            <Reveal>
              <p className="small-caps-xs text-ink-muted mb-4">SS26 / Featured</p>
              <h2 className="font-serif text-display-md md:text-display-lg font-light leading-tight mb-12">
                A study
                <br />
                in restraint.
              </h2>
              <p className="text-body text-ink-soft mb-12 max-w-md leading-relaxed">
                Six pieces. Three fabrics. One quiet idea — that a wardrobe is built
                slowly, and most things you reach for were chosen years ago.
              </p>
            </Reveal>

            <div className="space-y-8">
              {featured.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.1}>
                  {i > 0 && <div aria-hidden="true" className="border-t border-border mb-8" />}
                  <Link
                    href={`/shop/${item.slug}`}
                    className="group flex items-center gap-6"
                  >
                    <div
                      aria-hidden="true"
                      className="w-24 h-32 flex-shrink-0 overflow-hidden"
                      style={{ background: item.swatch }}
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-xl mb-1">{item.name}</h3>
                      <p className="small-caps text-ink-muted">{item.price}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="small-caps text-ink opacity-0 transition-opacity duration-400 ease-auren group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4} className="mt-16">
              <Link
                href="/collections/ss26"
                className="link-underline small-caps inline-flex items-center gap-2 group"
              >
                View the collection
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
