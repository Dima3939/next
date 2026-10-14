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
  title: 'ENDORPHIN — Creative Production & Motion Studio',
  description:
    'Award-winning creative production studio directing, designing, and animating high-impact 3D commercials, product films, and motion identities for visionary brands.',
  keywords: [
    'Creative Studio',
    '3D Commercials',
    'Product Films',
    'Motion Design',
    'CGI Animation',
    'Endorphin Studio',
    'Awwwards',
  ],
  authors: [{ name: 'Endorphin Studio' }],
  openGraph: {
    title: 'ENDORPHIN — Creative Production & Motion Studio',
    description:
      'Directing, designing, and animating high-impact 3D commercials, product films, and motion identities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Endorphin Studio',
  },
};

export const viewport: Viewport = {
  themeColor: '#08080c',
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
      <body className="bg-[#08080c] text-zinc-100 font-sans antialiased selection:bg-[#6B1EEF]/30 selection:text-white min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
