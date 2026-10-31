import Link from 'next/link';
import { Mail, ArrowUpRight, Building2, CircleHelp } from 'lucide-react';
import InformationPage from '@/components/InformationPage';
import ContactForm from '@/components/ContactForm';
import { contactEmail, pageMetadata } from '@/lib/site';

export const metadata = pageMetadata('Contact Us', 'Contact ZEROTHAM at contact@zerotham.com for platform questions, partner enquiries, feedback, privacy and booking information.', '/contact-us');
export default function ContactUs() {
  return <InformationPage title="Contact Us" eyebrow="GOOD CONVERSATIONS START HERE" description="A question, an idea, or a space worth sharing. We’d like to hear from you." path="/contact-us">
    <div className="contact-email-card"><Mail size={28} aria-hidden="true"/><span>EMAIL THE ZEROTHAM TEAM</span><a href={`mailto:${contactEmail}`}>{contactEmail}<ArrowUpRight size={22} aria-hidden="true"/></a><p>For general questions, feedback, privacy enquiries and partnership conversations.</p></div>
    <div className="contact-topics"><section><Building2 size={22} aria-hidden="true"/><h2>Have a space?</h2><p>Tell us about your library, gym, co-working space or exam hub. Include your business name, locality and the best way to reach you.</p><a href={`mailto:${contactEmail}?subject=ZEROTHAM%20partner%20enquiry`}>Discuss a partnership<ArrowUpRight size={15} aria-hidden="true"/></a></section><section><CircleHelp size={22} aria-hidden="true"/><h2>Have a question?</h2><p>Ask about the platform, share feedback or get clarity on the sample booking experience.</p><Link href="/cancellation-and-refund">Booking & refund information<ArrowUpRight size={15} aria-hidden="true"/></Link></section></div>
    <ContactForm/>
  </InformationPage>;
}
