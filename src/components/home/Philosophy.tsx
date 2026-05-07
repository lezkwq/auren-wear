import Link from 'next/link';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { Reveal } from '@/components/ui/Reveal';

export function Philosophy() {
  return (
    <section className="bg-cream-warm section-y">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — left */}
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-600 ease-auren hover:scale-[1.02]">
                <CampaignImage
                  variant="male-solo"
                  alt="AUREN philosophy — a man in a brown ribbed knit, soft window light"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Text — right */}
          <Reveal className="lg:col-span-6 lg:pl-8">
            <p className="small-caps-xs text-ink-muted mb-6">Our philosophy</p>
            <h2 className="font-serif text-display-md md:text-display-lg font-light leading-[1.2] mb-10">
              Slowly made.
              <br />
              Patiently chosen.
              <br />
              Quietly worn.
            </h2>
            <div className="max-w-md space-y-4 text-body text-ink-soft leading-relaxed">
              <p>
                We believe in fewer pieces, made well. Each AUREN garment begins with
                a question — will this be worn for years, not seasons?
              </p>
              <p>
                The answer shapes everything that follows. Natural fibres. Slow looms.
                Small ateliers in Portugal, Italy, and Japan. Garments that soften
                with wear and carry the marks of the people who choose them.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/journal"
                className="link-underline small-caps inline-flex items-center gap-2 group"
              >
                Read our journal
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
