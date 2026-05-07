import { CampaignImage } from '@/components/ui/CampaignImage';
import { Reveal } from '@/components/ui/Reveal';

export function EditorialPause() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
      <CampaignImage
        variant="architectural"
        alt="AUREN — minimalist concrete interior, soft daylight from a tall window"
        sizes="100vw"
      />

      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24">
        <Reveal>
          <p className="font-serif text-display-sm md:text-display-md font-light text-ink-soft tracking-wide">
            Spring/Summer 26 — A study in restraint.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
