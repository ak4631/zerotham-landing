import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'ZEROTHAM',
  verification: { google: '3c1OVTKgf1R3UJqn7jPyrhzKLr8McLN97dGtFscQhAM' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/images/symbol.webp', apple: '/images/symbol.png' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" data-scroll-behavior="smooth"><head>
    <link rel="preload" href="/fonts/font-0.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/font-8.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
  </head><body>{children}</body></html>;
}
