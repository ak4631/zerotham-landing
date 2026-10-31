import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://zerotham-grow-spaces.berry-wasp-7821.chatgpt.site'),
  title: 'ZEROTHAM — Find Your Space. Find Your Flow.',
  description: 'Discover libraries, gyms, co-working spaces and exam hubs near you. Find the right environment for your next goal with ZEROTHAM.',
  icons: { icon: '/images/symbol.png', apple: '/images/symbol.png' },
  openGraph: { title: 'ZEROTHAM — A Better Way to Grow', description: 'Your space. Your goals. Your growth.', images: ['/images/logo.png'] },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
