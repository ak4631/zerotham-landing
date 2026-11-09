import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Dumbbell, Laptop, GraduationCap } from 'lucide-react';
import InformationPage from '@/components/InformationPage';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata('About Us', 'Meet ZEROTHAM: a platform being built to connect people with libraries, gyms, co-working spaces and exam preparation hubs.', '/about-us');
export default function AboutUs() {
  return <InformationPage title="About Us" eyebrow="ABOUT ZEROTHAM" description="We believe the right environment can help you make room for your next goal." path="/about-us" sections={[
    { id: 'our-purpose', title: 'Your ambition deserves a space.', paragraphs: ['A quiet desk to study. A place to do focused work. A gym to build a routine. A dedicated environment to prepare for an exam. Different goals call for different spaces, but finding them should feel straightforward.', 'ZEROTHAM is being built to bring those possibilities together, helping people discover spaces around their locality and choose an environment that fits their schedule and ambitions.'] },
    { id: 'one-platform', title: 'Many goals. One place to begin.', content: <div className="about-categories">{[{icon:BookOpen,title:'Libraries',text:'Make room for deep focus and a steady study routine.'},{icon:Dumbbell,title:'Gyms & fitness',text:'Find an environment for showing up and getting stronger.'},{icon:Laptop,title:'Co-working spaces',text:'Give your ideas a productive place to take shape.'},{icon:GraduationCap,title:'Exam hubs',text:'Find a dedicated setting for your next milestone.'}].map(c=><div key={c.title}><c.icon size={24} aria-hidden="true"/><h3>{c.title}</h3><p>{c.text}</p></div>)}</div> },
    { id: 'our-approach', title: 'Designed around everyday decisions.', bullets: ['Local discovery: start with the areas that fit into your day.', 'Clear information: understand facilities, plans and pricing before deciding.', 'Flexible access: explore options that suit different schedules and routines.', 'Simple organisation: a single place for managing different kinds of spaces as the platform develops.'] },
    { id: 'for-partners', title: 'Good spaces deserve to be found.', paragraphs: ['ZEROTHAM also has a place for the people who run libraries, gyms, co-working spaces and exam hubs. Our aim is to help space partners reach local customers and simplify how they present availability, passes and memberships.', 'If you own or manage a space and would like to discuss the platform, we’d like to hear your perspective.'], content: <p><Link className="arrow-link" href="/contact-us">Talk to us about your space<ArrowUpRight size={17} aria-hidden="true"/></Link></p> },
    { id: 'where-we-are', title: 'A glimpse of what’s next.', paragraphs: ['This website is an interactive preview of the experience we are building. Listings, ratings, prices and testimonials are clearly marked as sample content. Real accounts, reservations and payments are not enabled here.', 'Explore the idea, try the sample discovery experience, and share what would make finding your next space easier.'], content: <Link className="button" href="/#discover">Explore sample spaces<ArrowUpRight size={17} aria-hidden="true"/></Link> },
  ]}>
    <figure className="about-photo"><Image src="/images/partner.webp" alt="A naturally lit shared workspace with desks and greenery" width={1200} height={801} sizes="(max-width: 768px) 90vw, 65vw" priority/><figcaption>Find your space. Find your flow.</figcaption></figure>
  </InformationPage>;
}
