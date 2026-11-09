import Marketplace from '@/components/Marketplace';
import { pageMetadata, siteUrl } from '@/lib/site';

export const metadata = pageMetadata(
  'Libraries, Gyms & Co-working Spaces Near You',
  'Explore libraries, gyms, co-working spaces and exam preparation hubs with ZEROTHAM. Compare sample spaces in Pune, facilities and flexible pass options.',
  '/',
);

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
