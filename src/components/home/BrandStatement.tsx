import { Reveal } from '@/components/ui/Reveal';

export function BrandStatement() {
  return (
    <section className="bg-cream-warm flex items-center justify-center min-h-[60vh] md:min-h-[80vh] py-24 md:py-32">
      <Reveal className="container-page max-w-4xl text-center">
        <p className="font-serif text-display-md md:text-display-lg font-light text-ink-soft leading-[1.15]">
          AUREN designs everyday garments
          <br />
          for those who choose less,
          <br />
          and choose well.
        </p>
      </Reveal>
    </section>
  );
}
