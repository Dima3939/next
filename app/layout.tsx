import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './infisical_exact.css';

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
  title: 'MONOLITH | Security Infrastructure for Developers and Agents',
  description:
    'All-in-one platform to securely manage application secrets, certificates, and privileged access across cloud, on-prem, and AI infrastructure.',
  keywords: [
    'MONOLITH',
    'Secrets Management',
    'Agent Vault',
    'Certificate Management',
    'PKI',
    'Privileged Access Management',
    'PAM',
    'Developer Security',
  ],
  authors: [{ name: 'MONOLITH' }],
  openGraph: {
    title: 'MONOLITH | Security Infrastructure for Developers and Agents',
    description:
      'All-in-one platform to securely manage application secrets, certificates, and privileged access across cloud, on-prem, and AI infrastructure.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MONOLITH Platform',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/next/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-white text-black selection:bg-[#f5f841] selection:text-black">
        {children}
      </body>
    </html>
  );
}
