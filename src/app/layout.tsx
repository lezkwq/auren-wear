import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { CartOverlay } from '@/components/cart/CartOverlay';
import { MotionProvider } from '@/components/layout/MotionProvider';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://auren.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AUREN — Essentials, considered',
    template: '%s — AUREN',
  },
  description:
    'AUREN designs everyday garments for those who choose less, and choose well. Slowly made in Portugal, Italy, England.',
  keywords: [
    'AUREN',
    'minimalist fashion',
    'essentials',
    'quiet luxury',
    'considered design',
    'Bela Vista',
    'Gaspar',
    'Santa Catarina',
  ],
  authors: [{ name: 'AUREN' }],
  creator: 'AUREN',
  publisher: 'AUREN',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'AUREN',
    title: 'AUREN — Essentials, considered',
    description:
      'AUREN designs everyday garments for those who choose less, and choose well.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUREN — Essentials, considered',
    description:
      'AUREN designs everyday garments for those who choose less, and choose well.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <MotionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CartOverlay />
        </MotionProvider>
      </body>
    </html>
  );
}
