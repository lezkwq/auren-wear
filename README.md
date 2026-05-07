# AUREN

A luxury minimalist fashion ecommerce experience, built per `AUREN_CLAUDE_CODE_PROMPT.md`. The aesthetic sits in the COS / Toteme / Arket axis — quiet, editorial, restrained. No filled buttons, no drop shadows, no badges, no urgency timers.

## Build status — production ready

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation | ✓ |
| 2 | Homepage sections | ✓ |
| 3 | Navigation, footer, persistent contact | ✓ |
| 4 | Product pages and cart | ✓ |
| 5 | Polish, content, SEO, real images | ✓ |

### Final verification

```
npx tsc --noEmit       # zero errors (strict mode)
npx next lint          # zero warnings
npx next build         # 15 routes, 6 PDPs prerendered, 0 errors
```

Bundle sizes (First Load JS):

| Route | Type | Size |
|---|---|---|
| `/` | Static | 136 kB |
| `/about` | Static | 129 kB |
| `/shop` | Dynamic | 107 kB |
| `/shop/[slug]` × 6 | SSG | 149 kB |
| `/checkout` | Static | 105 kB |
| `/_not-found` | Static | 87.3 kB |

All routes under the 150 kB First Load budget. Sitemap, robots.txt, OG image, Twitter card image, favicon, and Apple touch icon are all generated at build time.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production deployment (Vercel)

```bash
# Required environment variable
NEXT_PUBLIC_SITE_URL=https://auren.example.com  # replace with real domain
```

The site is statically prerendered where possible. Vercel will deploy the App Router build directly from `npm run build`. No server-side dependencies beyond Next.js itself.

---

## Phase summary

### Phase 1 — Foundation

Scaffolded Next.js 14 with strict TypeScript, Tailwind CSS, design tokens (cream palette, ink scale, espresso accent), Cormorant Garamond + Inter via `next/font/google`, and empty placeholder shells for all six homepage sections. Built `useScrolled` hook and `cn()` / `formatPrice()` utilities.

### Phase 2 — Homepage

Six section components — Hero, BrandStatement, FeaturedCollection, EditorialPause, CategoryGrid, Philosophy — each using the `Reveal` scroll-fade component for editorial pacing. Pacing is loud → quiet → loud → quiet across the scroll, with the EditorialPause as the central breath.

### Phase 3 — Navigation, footer, persistent contact

Final scroll-aware Nav (transparent over the homepage hero, solid cream elsewhere), full-screen MobileMenu with body scroll lock and Escape-to-close, oversized editorial Footer with 4-column links + underlined newsletter input + Instagram icon in legal row, brand-aligned WhatsApp floating button (ink/cream, deliberately not the standard green pill).

### Phase 4 — Product pages and cart

Six mock products spanning all three categories. Zustand cart store with localStorage persist. ProductCard with hover image swap, ProductGrid (3-col → 2-col → 1-col), ProductGallery on PDP (vertical stack), ProductInfo with color and size selectors and three accordions (Materials, Fit, Care). CartOverlay slides down from the top with body lock and sticky close button. Checkout deep-links the cart contents into a pre-formatted WhatsApp message.

### Phase 5 — Polish

- All six campaign images now load from `/public/images/` via `next/image` through the `CampaignImage` wrapper. The placeholder system is gone.
- About page narrative — seven scrolling sections matching the AUREN voice (opening, how we make things, fabric pause, what we don't do, the materials, where we are, closing).
- Quiet 404 at `app/not-found.tsx` — two sentences, single return link.
- SEO complete: per-route metadata, OpenGraph image (1200×630, generated at build time via `next/og`), Twitter card image, `robots.txt`, `sitemap.xml`, favicon and Apple touch icon.
- `MotionProvider` wraps the app with framer-motion's `MotionConfig reducedMotion="user"` so all motion components honor `prefers-reduced-motion`.
- Sticky close buttons on the cart overlay (and mobile menu where it matters) keep navigation reachable when scrolling long content.
- CategoryGrid links fixed: now route to `/shop?category=X` rather than treating category names as product slugs.

---

## File structure

```
src/
├── app/
│   ├── layout.tsx                    # Nav + main + Footer + WhatsApp + CartOverlay + MotionProvider, full SEO metadata
│   ├── page.tsx                      # homepage (6 section components)
│   ├── globals.css                   # design tokens, base styles, link-underline utility, reduced-motion override
│   ├── not-found.tsx                 # 404 page
│   ├── opengraph-image.tsx           # 1200×630 OG image, edge runtime
│   ├── twitter-image.tsx             # Twitter card image, edge runtime
│   ├── icon.tsx                      # 32×32 favicon, edge runtime
│   ├── apple-icon.tsx                # 180×180 Apple touch icon, edge runtime
│   ├── robots.ts                     # robots.txt generator
│   ├── sitemap.ts                    # sitemap.xml generator
│   ├── about/page.tsx                # About page narrative
│   ├── shop/
│   │   ├── page.tsx                  # category-filtered grid
│   │   └── [slug]/page.tsx           # PDP, generateStaticParams over all 6 products
│   └── checkout/
│       ├── layout.tsx                # metadata wrapper for client checkout
│       └── page.tsx                  # WhatsApp deep-link bridge
├── components/
│   ├── layout/
│   │   ├── Nav.tsx                   # scroll- and route-aware
│   │   ├── MobileMenu.tsx            # full-screen overlay with body lock
│   │   ├── Footer.tsx                # 4-col, newsletter input, Instagram icon
│   │   ├── WhatsAppButton.tsx        # floating, hides when cart open
│   │   └── MotionProvider.tsx        # framer-motion reduced-motion config
│   ├── home/                         # Hero, BrandStatement, FeaturedCollection, EditorialPause, CategoryGrid, Philosophy
│   ├── product/                      # ProductCard, ProductGrid, ProductGallery, ProductInfo
│   ├── cart/                         # CartTrigger, CartItem, CartOverlay
│   └── ui/
│       ├── CampaignImage.tsx         # next/image wrapper reading from asset map
│       ├── Reveal.tsx                # scroll-triggered fade-in (framer-motion useInView)
│       ├── Button.tsx                # 3 variants — primary line, secondary arrow, tertiary underline
│       └── Accordion.tsx             # thin-border, +/− indicator
├── hooks/
│   └── useScrolled.ts                # scroll-position threshold detection
├── lib/
│   ├── utils.ts                      # cn() + formatPrice()
│   ├── images.ts                     # imageAssets map (variant → file path + object-position)
│   └── products.ts                   # 6 mock products + helpers
├── store/
│   └── cart.ts                       # Zustand cart with persist middleware
└── types/
    └── product.ts
public/
└── images/
    ├── hero-couple.png               # 1672×941
    ├── female-solo.png               # 1672×941
    ├── male-solo.png                 # 1672×941
    ├── architectural.png             # 1672×941
    ├── fabric-detail.png             # 1672×941
    ├── flat-lay-tee.png              # 1672×941
    └── mobile-portrait.png           # 941×1672 (reserved for future mobile-first hero)
```

---

## Brand contact (live)

- **WhatsApp:** +55 47 99275-4013 (`https://wa.me/5547992754013`) — floating button, mobile menu, checkout deep-link
- **Instagram:** `@leanzzk` (`https://instagram.com/leanzzk`) — footer legal row icon, mobile menu contact section
- **Studio:** Bela Vista, Gaspar — Santa Catarina, Brazil — footer copyright, mobile menu, About page, checkout closing line

## Restraint checklist (final)

- [x] No filled colored buttons except WhatsApp (intentional, ink/cream brand-aligned)
- [x] No drop shadows
- [x] No rounded corners beyond 2px
- [x] No bold text in body copy (font-light + font-medium only)
- [x] No exclamation marks in any UI string
- [x] No "Sale", "Bestseller", "Only X left", urgency timers
- [x] No trust badges, press logos, testimonials, reviews with stars
- [x] No "Quick view" on product cards
- [x] No "frequently bought together" or upsells in checkout
- [x] No live chat widget (WhatsApp is the contact channel)
- [x] No success-green or error-red colors anywhere
- [x] No bouncy spring animations — only `cubic-bezier(0.4, 0, 0.2, 1)`
- [x] No parallax or scroll-jacking
- [x] All transitions ≥ 400ms (cart 600ms, accordion 400ms, image swap 600ms, hover labels 400ms)
- [x] All animations honor `prefers-reduced-motion` (CSS + MotionConfig)
- [x] All interactive elements keyboard-accessible (Esc closes cart and mobile menu)
- [x] Cart overlay and mobile menu use `role="dialog"` `aria-modal="true"`
- [x] All images have descriptive alt text
- [x] All icons have `aria-label` or `aria-hidden`
- [x] Hydration-safe — cart count and checkout page guard `mounted` state

## Notes for future work

- **Real payment processor** — checkout currently bridges to WhatsApp for manual order completion. To add Stripe, replace `app/checkout/page.tsx` with a real checkout flow and remove the deep-link.
- **Real product backend** — `lib/products.ts` is mock data. Replace with calls to Shopify Storefront, Medusa, Saleor, or similar. The `Product` and `ProductWithVariants` types stay the same.
- **Search** — the search icon in the nav is a placeholder. A search route would mount a full-screen overlay with autosuggest, in the same restrained voice as the rest of the site.
- **Journal** — `/journal` is a footer link with no page yet. Would be the obvious place to publish the "On the weight of a t-shirt" essay drafted in the brand voice exercise, plus subsequent essays.
- **Internationalization** — the site is single-locale (en_US). For multi-language, add `next-intl` and split the route tree into `[locale]/`.
