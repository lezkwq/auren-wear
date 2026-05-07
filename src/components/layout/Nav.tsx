'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';
import { CartTrigger } from '@/components/cart/CartTrigger';

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
];

export function Nav() {
  const scrolled = useScrolled(80);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const overHero = pathname === '/';
  const showSolid = scrolled || !overHero;
  const textTone = showSolid ? 'text-ink' : 'text-cream';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-auren',
          showSolid
            ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-page flex h-16 md:h-20 items-center justify-between">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn('md:hidden transition-colors duration-500', textTone)}
          >
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>

          <Link
            href="/"
            className={cn(
              'font-serif text-xl font-light tracking-[0.2em] transition-colors duration-500 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0',
              textTone
            )}
          >
            AUREN
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'small-caps link-underline transition-colors duration-500',
                  textTone
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              'flex items-center gap-5 transition-colors duration-500',
              textTone
            )}
          >
            <button
              aria-label="Search"
              className="hidden md:inline-flex transition-opacity duration-300 hover:opacity-70"
            >
              <Search size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <CartTrigger />
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
