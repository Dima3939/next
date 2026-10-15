import type { Metadata, Viewport } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MONOLITH® — Swiss Creative Engineering & Interactive Systems',
  description:
    'Independent digital studio operating at the intersection of Swiss International typography, real-time GLSL shaders, and high-performance Next.js motion.',
  keywords: [
    'MONOLITH',
    'Swiss Design',
    'Creative Studio',
    'Bureau Borsche Style',
    'Next.js 14',
    'Framer Motion',
    'Interactive Agency',
    'Awwwards SOTD',
  ],
  authors: [{ name: 'MONOLITH Studio' }],
  openGraph: {
    title: 'MONOLITH® — Swiss Creative Engineering & Interactive Systems',
    description:
      'Swiss International typography, real-time GLSL shaders, and high-performance Next.js motion.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MONOLITH Studio',
  },
};

export const viewport: Viewport = {
  themeColor: '#08080a',
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
      <body className="bg-[#08080a] text-[#f5f5f7] font-sans antialiased selection:bg-[#0038ff] selection:text-white min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
