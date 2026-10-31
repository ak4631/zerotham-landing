import type { Metadata } from 'next';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zerotham.vercel.app').replace(/\/$/, '');
export const contactEmail = 'contact@zerotham.com';
export const informationLinks = [
  { label: 'About Us', href: '/about-us', kind: 'company' },
  { label: 'Contact Us', href: '/contact-us', kind: 'company' },
  { label: 'Privacy Policy', href: '/privacy-policy', kind: 'policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions', kind: 'policy' },
  { label: 'Cancellation & Refund Policy', href: '/cancellation-and-refund', kind: 'policy' },
] as const;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} | ZEROTHAM`, description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ZEROTHAM`, description, url: path, type: 'website', images: ['/images/logo.png'] },
    twitter: { card: 'summary', title: `${title} | ZEROTHAM`, description, images: ['/images/logo.png'] },
  };
}
