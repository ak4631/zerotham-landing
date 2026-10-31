'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { contactEmail } from '@/lib/site';

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function compose(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `ZEROTHAM — ${data.get('topic')}`;
    const body = `Name: ${data.get('name')}\nReply email: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <section className="contact-form-section" aria-labelledby="contact-form-title"><h2 id="contact-form-title">Start a conversation.</h2><p>Write your message here, then send it using your email app.</p><form className="dialog-form" onSubmit={compose}>
    <div className="form-grid"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label></div>
    <label>What can we help with?<select name="topic" required defaultValue="General enquiry"><option>General enquiry</option><option>Space discovery and bookings</option><option>List my space</option><option>Privacy and data</option><option>Cancellation and refunds</option><option>Feedback</option></select></label>
    <label>Your message<textarea name="message" required minLength={10} maxLength={4000} rows={6} placeholder="Tell us a little about how we can help."/></label>
    <p className="contact-form-note">This opens a draft addressed to {contactEmail}. You review and send it in your email app. This website does not store or submit the form.</p>
    <button className="button" type="submit"><Mail size={17} aria-hidden="true"/>Compose email<ArrowUpRight size={17} aria-hidden="true"/></button>
    {prepared && <div className="notice" role="status">Your email draft was requested. If your email app did not open, email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> directly. No message has been sent by this website.</div>}
  </form></section>;
}
