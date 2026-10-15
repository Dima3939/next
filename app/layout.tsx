import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MONOLITH — Creative Engineering & Interactive Motion Studio',
  description:
    'Award-winning independent digital studio operating at the intersection of architectural typography, 3D WebGL experiences, and high-performance Next.js motion.',
  keywords: [
    'MONOLITH',
    'Creative Studio',
    '3D WebGL',
    'Next.js 14',
    'Framer Motion',
    'Interactive Agency',
    'Awwwards SOTD',
  ],
  authors: [{ name: 'MONOLITH Studio' }],
  openGraph: {
    title: 'MONOLITH — Creative Engineering & Interactive Motion Studio',
    description:
      'Architectural typography, 3D WebGL experiences, and high-performance Next.js motion.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MONOLITH Studio',
  },
};

export const viewport: Viewport = {
  themeColor: '#07070a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#07070a] text-zinc-100 font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
