import Link from 'next/link';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { Reveal } from '@/components/ui/Reveal';

const categories = [
  {
    number: '01',
    name: 'Knitwear',
    slug: 'knitwear',
    variant: 'fabric-detail' as const,
    labelLight: false, // dark image — use cream label
  },
  {
    number: '02',
    name: 'Tailoring',
    slug: 'tailoring',
    variant: 'architectural' as const,
    labelLight: false,
  },
  {
    number: '03',
    name: 'Essentials',
    slug: 'essentials',
    variant: 'flat-lay-tee' as const,
    labelLight: true, // light image — use ink label
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-cream section-y">
      <div className="container-page">
        {/* Header row */}
        <Reveal>
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <div>
              <p className="small-caps-xs text-ink-muted mb-3">02</p>
              <h2 className="font-serif text-display-md md:text-display-lg font-light">
                The categories.
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex link-underline small-caps items-center gap-2 group"
            >
              View all
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.1}>
              <Link href={`/shop?category=${cat.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div className="absolute inset-0 transition-transform duration-600 ease-auren group-hover:scale-[1.02]">
                    <CampaignImage
                      variant={cat.variant}
                      alt={`AUREN — ${cat.name.toLowerCase()} category`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className={
                      'absolute bottom-6 left-6 small-caps opacity-0 transition-opacity duration-400 ease-auren group-hover:opacity-100 ' +
                      (cat.labelLight ? 'text-ink' : 'text-cream')
                    }
                  >
                    View →
                  </span>
                </div>
                <p className="small-caps-xs text-ink-muted mb-2">{cat.number}</p>
                <h3 className="font-serif text-2xl md:text-display-sm font-light">
                  {cat.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
