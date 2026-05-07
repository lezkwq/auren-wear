import { CampaignImage } from '@/components/ui/CampaignImage';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <CampaignImage
        variant="hero-couple"
        alt="AUREN Spring/Summer 2026 — a man and woman in soft concrete light"
        priority
        sizes="100vw"
      />

      {/* Subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.30) 100%)',
        }}
      />

      {/* Caption — bottom left */}
      <div className="absolute bottom-12 left-6 md:bottom-20 md:left-16 lg:left-24 max-w-md text-cream">
        <p className="small-caps-xs mb-4 opacity-80">Spring / Summer 2026</p>
        <p className="font-serif text-display-md md:text-display-lg font-light leading-tight">
          Essentials, considered.
        </p>
      </div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream opacity-70">
        <span className="small-caps-xs">Scroll</span>
        <div aria-hidden="true" className="w-px h-8 bg-cream/60" />
      </div>
    </section>
  );
}
