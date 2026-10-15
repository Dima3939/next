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

import ButtonScramble from '@/components/ButtonScramble';
import ThemeManager from '@/components/ThemeManager';

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
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/next/favicon.ico" sizes="any" />
        <script
          id="v2-theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t='light';try{var p=new URLSearchParams(window.location.search);var q=p.get('theme');var s=null;try{if(q==='dark'||q==='light'){localStorage.setItem('v2-theme',q);}s=localStorage.getItem('v2-theme');}catch(err){}if(q==='dark'||q==='light'){t=q;}else if(s==='dark'){t='dark';}}catch(e){}document.documentElement.setAttribute('data-v2-theme',t);if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}})();`,
          }}
        />
      </head>
      <body 
        suppressHydrationWarning 
        className="font-sans antialiased bg-[var(--v2-color-bg-page,#ffffff)] text-[var(--v2-color-text,#000000)] selection:bg-[#f5f841] selection:text-black transition-colors duration-200"
      >
        <ThemeManager />
        <ButtonScramble />
        {children}
      </body>
    </html>
  );
}

