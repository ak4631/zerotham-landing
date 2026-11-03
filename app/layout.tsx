import type { Metadata } from 'next';
import './globals.css';
import { pageMetadata, siteUrl } from '@/lib/site';
export const metadata: Metadata = {
  ...pageMetadata('Find Your Space. Find Your Flow.', 'Discover libraries, gyms, co-working spaces and exam hubs near you. Find the right environment for your next goal with ZEROTHAM.', '/'),
  metadataBase: new URL(siteUrl),
  applicationName: 'ZEROTHAM',
  title: 'ZEROTHAM — Find Your Space. Find Your Flow.',
  verification: { google: '3c1OVTKgf1R3UJqn7jPyrhzKLr8McLN97dGtFscQhAM' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/images/symbol.png', apple: '/images/symbol.png' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
