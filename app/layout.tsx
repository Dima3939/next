import type { Metadata, Viewport } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
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
  themeColor: '#09090b',
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
    <html lang="en" className={`dark ${syne.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#09090b] text-[#f4f3ef] font-sans antialiased selection:bg-[#d4ff32] selection:text-black min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
