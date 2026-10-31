import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';
import SiteChrome from './SiteChrome';
import { contactEmail, informationLinks } from '@/lib/site';

export type ContentSection = { id: string; title: string; paragraphs?: string[]; bullets?: string[]; content?: ReactNode };

type Props = { title: string; eyebrow: string; description: string; path: string; sections?: ContentSection[]; children?: ReactNode; policy?: boolean };

export default function InformationPage({ title, eyebrow, description, path, sections = [], children, policy = false }: Props) {
  return <SiteChrome><main id="main" className="information-page">
    <div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <header className="information-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{policy && <span className="policy-date">Last updated: 1 November 2026 · Current website preview</span>}</header>
      <div className="information-grid">
        <aside className="information-sidebar">
          {sections.length > 0 && <nav aria-label="On this page"><h2>On this page</h2>{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>}
          <nav className="related-pages" aria-label="Company and policies"><h2>Explore ZEROTHAM</h2>{informationLinks.map(link => <Link key={link.href} href={link.href} aria-current={path === link.href ? 'page' : undefined}>{link.label}<ArrowUpRight size={14} aria-hidden="true"/></Link>)}</nav>
        </aside>
        <div className="information-content">
          {children}
          {sections.map(section => <section className="information-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}{section.content}</section>)}
          <div className="information-help"><Mail size={23} aria-hidden="true"/><div><h2>Let’s talk.</h2><p>Questions about ZEROTHAM or this page?</p><a href={`mailto:${contactEmail}`}>{contactEmail}<ArrowUpRight size={15} aria-hidden="true"/></a></div></div>
        </div>
      </div>
      <div className="information-back"><Link className="arrow-link" href="/"><ArrowLeft size={16} aria-hidden="true"/>Back to ZEROTHAM</Link></div>
    </div>
  </main></SiteChrome>;
}
