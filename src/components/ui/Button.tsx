import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        className={cn(
          'block w-full border-y border-ink py-4 small-caps text-center transition-colors duration-400 ease-auren hover:bg-cream-warm disabled:opacity-50 disabled:hover:bg-transparent',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className={cn(
          'group inline-flex items-center gap-2 small-caps transition-colors duration-300 hover:text-ink-muted',
          className
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-auren group-hover:translate-x-1"
        >
          →
        </span>
      </button>
    );
  }

  return (
    <button
      className={cn('link-underline small-caps', className)}
      {...props}
    >
      {children}
    </button>
  );
}
