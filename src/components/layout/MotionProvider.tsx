'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Wraps the application with Framer Motion's MotionConfig so that all
 * motion components honour `prefers-reduced-motion: reduce`. This is the
 * counterpart to the CSS-level reduced-motion rule in globals.css.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
