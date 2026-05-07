import type { Metadata } from 'next';
import { CampaignImage } from '@/components/ui/CampaignImage';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About — AUREN',
  description:
    'AUREN is a small house in the south of Brazil designing everyday garments slowly, with patience.',
  openGraph: {
    title: 'About — AUREN',
    description:
      'AUREN is a small house in the south of Brazil designing everyday garments slowly, with patience.',
  },
};

export default function AboutPage() {
  return (
    <article>
      {/* Hero — full-bleed architectural, no overlay text */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <CampaignImage
          variant="architectural"
          alt="AUREN studio — minimalist concrete interior, soft daylight from a tall window"
          priority
          sizes="100vw"
        />
      </section>

      {/* Opening */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-page max-w-prose mx-auto">
          <Reveal>
            <p className="small-caps-xs text-ink-muted mb-8">About</p>
            <h1 className="font-serif text-display-md md:text-display-lg font-light leading-tight mb-12">
              A small house, in the south of Brazil.
            </h1>
            <div className="space-y-5 text-body-lg text-ink-soft leading-relaxed">
              <p>
                AUREN began with a wardrobe — one that had grown too large, too
                restless, too full of things bought quickly and worn rarely.
              </p>
              <p>
                What remained, after the slow work of removing what didn&apos;t belong,
                was a small group of garments worn until they softened into shape. A
                heavyweight t-shirt. A pair of trousers that hung correctly. A knit
                that warmed without weight. The pieces that had been quietly chosen,
                and quietly worn, for years.
              </p>
              <p>AUREN is built around those pieces. Nothing more.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we make things */}
      <section className="bg-cream-warm py-24 md:py-32">
        <div className="container-page max-w-prose mx-auto">
          <Reveal>
            <p className="small-caps-xs text-ink-muted mb-6">How we make things</p>
            <h2 className="font-serif text-display-md font-light leading-tight italic mb-12">
              Slowly, and with patience.
            </h2>
            <div className="space-y-5 text-body-lg text-ink-soft leading-relaxed">
              <p>
                Each AUREN garment begins as a question. What is this piece for? Who
                will wear it, and for how long? What weight should the fabric be — to
                fall correctly, to soften correctly, to age correctly?
              </p>
              <p>The questions take time. So do the answers.</p>
              <p>
                Our cotton is woven on slow looms in Porto by a family mill that has
                been operating since 1962. Our knitwear is finished by hand in a
                small atelier near Biella, in northern Italy, where each piece takes
                four hours to complete. Our linen is woven from Belgian flax in
                heavy weights that wrinkle freely, as linen should.
              </p>
              <p>
                We work with five ateliers in total. We have visited each one. We
                know the names of the people who make our clothes. This is not
                unusual — it is how clothing was made for most of human history. We
                have simply chosen to continue the practice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial pause — fabric detail */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <CampaignImage
          variant="fabric-detail"
          alt="AUREN — close detail of brown ribbed knit and off-white cotton against warm concrete"
          sizes="100vw"
        />
      </section>

      {/* What we don't do */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-page max-w-prose mx-auto">
          <Reveal>
            <p className="small-caps-xs text-ink-muted mb-6">What we don&apos;t do</p>
            <div className="space-y-12 text-body-lg text-ink-soft leading-relaxed">
              <div>
                <p className="font-serif text-display-sm font-light italic text-ink mb-4">
                  We do not run sales.
                </p>
                <p>
                  Our prices reflect what each garment costs to make, and what it
                  costs to pay the people who make it fairly. Reducing those prices
                  later would only mean we had set them too high to begin with.
                </p>
              </div>
              <div>
                <p className="font-serif text-display-sm font-light italic text-ink mb-4">
                  We do not release new collections every season.
                </p>
                <p>
                  We release pieces when they are ready. Some pieces stay in our
                  catalogue for years. Some are made once and never again. We are
                  not interested in the rhythm of fashion calendars.
                </p>
              </div>
              <div>
                <p className="font-serif text-display-sm font-light italic text-ink mb-4">
                  We do not chase trends.
                </p>
                <p>
                  We are interested in the opposite — garments that do not date
                  because they were never of any particular moment. A heavyweight
                  cotton t-shirt is a heavyweight cotton t-shirt. The work is in
                  making it correctly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The materials */}
      <section className="bg-cream-warm py-24 md:py-32">
        <div className="container-page max-w-prose mx-auto">
          <Reveal>
            <p className="small-caps-xs text-ink-muted mb-6">The materials</p>
            <h2 className="font-serif text-display-md font-light leading-tight italic mb-12">
              Five fabrics. No more.
            </h2>
            <ul className="space-y-3 text-body-lg text-ink-soft leading-relaxed mb-10">
              <li>Heavyweight organic cotton (Portugal, 280gsm and 320gsm).</li>
              <li>Merino wool, undyed (Italy, single-estate).</li>
              <li>European linen (Belgium, woven in Portugal).</li>
              <li>Lambswool (England, family-owned mill).</li>
              <li>Wool-linen blend (Portugal, for tailoring).</li>
            </ul>
            <p className="text-body-lg text-ink-soft leading-relaxed">
              We do not use synthetic blends, recycled polyester, or fabrics whose
              origins we cannot trace. This is a constraint. It is also a clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Where we are */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-page max-w-prose mx-auto">
          <Reveal>
            <p className="small-caps-xs text-ink-muted mb-6">Where we are</p>
            <h2 className="font-serif text-display-md font-light leading-tight italic mb-12">
              Designed in Bela Vista, Gaspar — Santa Catarina.
            </h2>
            <div className="space-y-5 text-body-lg text-ink-soft leading-relaxed">
              <p>
                AUREN is a small house. Our studio sits at the foot of the
                Itajaí valley, in a quiet town in the south of Brazil. We work in
                daylight, mostly — the room faces east, and the morning light is
                the only light worth designing in.
              </p>
              <p>We answer messages slowly. We make things slowly. The pace is the point.</p>
              <p>
                If you would like to speak with us, write on{' '}
                <a
                  href="https://wa.me/5547992754013?text=Hello%20AUREN%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  WhatsApp at +55 47 99275-4013
                </a>
                . We respond within a day or two — never immediately, always
                thoughtfully.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream-warm py-24 md:py-32">
        <div className="container-page max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-serif text-display-md md:text-display-lg font-light italic text-ink-soft leading-tight">
              AUREN is a small project that takes itself seriously.
              <br />
              Thank you for being here.
            </p>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
