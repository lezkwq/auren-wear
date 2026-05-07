import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE7',
        'cream-warm': '#EDE6DA',
        'off-white': '#FAF7F2',
        ink: '#1C1815',
        'ink-soft': '#3D3833',
        'ink-muted': '#8A847C',
        'ink-faint': '#B8B0A4',
        espresso: '#3D2E26',
        border: 'rgba(28, 24, 21, 0.08)',
        'border-hover': 'rgba(28, 24, 21, 0.16)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'display-sm': ['28px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['15px', { lineHeight: '1.6' }],
        caption: ['13px', { lineHeight: '1.5' }],
        'ui-md': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'ui-sm': ['12px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'ui-xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      maxWidth: {
        page: '1440px',
        prose: '640px',
      },
      transitionTimingFunction: {
        auren: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
