import Marketplace from '@/components/Marketplace';
import { siteUrl } from '@/lib/site';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: 'ZEROTHAM',
  description: 'Discover libraries, gyms, co-working spaces and exam hubs near you.',
  inLanguage: 'en-IN',
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c') }} />
    <Marketplace />
  </>;
}
