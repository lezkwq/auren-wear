import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not found — AUREN',
};

export default function NotFound() {
  return (
    <div className="bg-cream-warm flex items-center justify-center min-h-screen">
      <div className="container-page max-w-prose mx-auto text-center py-32">
        <p className="small-caps-xs text-ink-muted mb-8">404</p>

        <h1 className="font-serif text-display-md md:text-display-lg font-light leading-tight mb-6">
          The page you were looking for is no longer here.
        </h1>

        <p className="font-serif text-display-sm font-light italic text-ink-muted leading-relaxed mb-16">
          Or perhaps it never was.
        </p>

        <Link
          href="/"
          className="link-underline small-caps inline-flex items-center gap-2 group"
        >
          Return home
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
