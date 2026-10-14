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
  title: 'ENDORPHIN — Creative Digital Design & Motion Studio',
  description:
    'Award-winning creative design studio crafting high-octane digital experiences, 3D web interfaces, and high-conversion architectures for visionary brands.',
  keywords: [
    'Design Studio',
    'Next.js 14',
    'Creative Agency',
    'WebGL',
    '3D Website',
    'Framer Motion',
    'Awwwards',
    'Endorphin Studio',
  ],
  authors: [{ name: 'Endorphin Studio' }],
  openGraph: {
    title: 'ENDORPHIN — Creative Digital Design & Motion Studio',
    description:
      'Award-winning creative design studio crafting high-octane digital experiences, 3D web interfaces, and high-conversion architectures.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Endorphin Studio',
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
      <body className="bg-[#07070a] text-zinc-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
