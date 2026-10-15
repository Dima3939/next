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
        obsidian: '#08080a',
        surface: {
          50: '#1a1a22',
          100: '#14141a',
          200: '#0f0f14',
          DEFAULT: '#0f0f13',
        },
        swiss: {
          blue: '#0038ff', // International Klein Blue - Bureau Borsche / Studio Temp signature
          blueHover: '#002edb',
          titanium: '#f5f5f7',
          muted: '#8e8e96',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: '#18181f',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        architectural: '-0.03em',
      },
    },
  },
  plugins: [],
};

export default config;
