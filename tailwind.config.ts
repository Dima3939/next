import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090a',
        surface: {
          50: '#1e222b',
          100: '#15171e',
          200: '#0e1015',
          DEFAULT: '#0d0e12',
          card: '#0f1117',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.14)',
        },
        brand: {
          emerald: '#10b981',
          emeraldHover: '#059669',
          emeraldLight: '#34d399',
          glow: 'rgba(16, 185, 129, 0.2)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tight: '-0.02em',
      },
      boxShadow: {
        glow: '0 0 50px -10px rgba(16, 185, 129, 0.15)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
