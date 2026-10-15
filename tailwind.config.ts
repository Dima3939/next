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
        v2: {
          bg: '#0b0d10',
          page: '#0b0d10',
          surface: '#0e1014',
          card: '#12141a',
          tint: '#1e1f22',
          tintHover: '#2b2c30',
          border: '#26272b',
          frame: '#323439',
          borderDark: '#1a1c20',
          text: '#ebebeb',
          muted: 'rgba(228, 228, 231, 0.5)',
          subtle: '#adaeb0',
          faint: '#707174',
          volt: '#c2d72a', // Infisical's signature electric volt/lime
          voltHover: '#afc224',
          green: '#4ac26b',
          amber: '#d29922',
          red: '#e5685f',
          blue: '#58a6ff',
          purple: '#c4b5fd',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      },
      boxShadow: {
        'v2-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        'v2-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'v2-glow': '0 0 35px -5px rgba(194, 215, 42, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
