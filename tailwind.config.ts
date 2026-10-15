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
        background: '#09090b',
        surface: {
          50: '#1c1c22',
          100: '#141418',
          200: '#0e0e12',
          DEFAULT: '#111115',
        },
        studio: {
          accent: '#d4ff32', // Acid Lime - iconic modern studio accent
          ivory: '#f4f3ef',
          muted: '#9c9991',
          subtle: '#2a2a30',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
