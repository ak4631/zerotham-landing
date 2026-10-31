import type { MetadataRoute } from 'next';
import { informationLinks, siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, lastModified: '2026-11-01', changeFrequency: 'weekly', priority: 1 },
    ...informationLinks.map(link => ({ url: `${siteUrl}${link.href}`, lastModified: '2026-11-01', changeFrequency: 'monthly' as const, priority: link.kind === 'company' ? 0.7 : 0.4 }))];
}
