import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'MONOLITH | The Modern Creative Engineering Platform',
  description:
    'All-in-one digital laboratory to design, engineer, and deploy high-performance Next.js 14 applications, 3D WebGL experiences, and kinetic brand systems.',
  keywords: [
    'MONOLITH',
    'Creative Engineering',
    'Next.js 14',
    'WebGL',
    'Three.js',
    'Framer Motion',
    'Interactive Studio',
    'DevTools Design',
  ],
  authors: [{ name: 'MONOLITH Studio' }],
  openGraph: {
    title: 'MONOLITH | The Modern Creative Engineering Platform',
    description:
      'All-in-one digital laboratory for high-performance Next.js 14 applications, 3D WebGL experiences, and kinetic brand systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MONOLITH Platform',
  },
};

export const viewport: Viewport = {
  themeColor: '#08090a',
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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#08090a] text-[#f1f5f9] font-sans antialiased selection:bg-emerald-500 selection:text-black min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
