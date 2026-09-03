'use client';

import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

const reasons = [
  'General enquiry',
  'Volunteer',
  'Partnership',
  'Sponsorship',
  'Invite us to an event',
  'School / Education programme',
  'AI literacy training',
  'Other',
];

const involvement = [
  {
    title: 'Volunteer',
    description: 'Join our community of volunteers and help deliver impactful programmes across Africa.',
    cta: 'Volunteer with us →',
    reason: 'Volunteer',
    color: 'blue',
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us to expand digital skills and responsible AI education.',
    cta: 'Start a partnership →',
    reason: 'Partnership',
    color: 'green',
  },
  {
    title: 'Sponsor Our Programmes',
    description: 'Support initiatives that create opportunities for underserved communities and prepare young people for the future.',
    cta: 'Become a sponsor →',
    reason: 'Sponsorship',
    color: 'orange',
  },
  {
    title: 'Invite Us',
    description: 'Invite us to deliver AI literacy, digital skills training, or a keynote at your school or organisation.',
    cta: 'Send an invite →',
    reason: 'Invite us to an event',
    color: 'navy',
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const hashReason = window.location.hash.replace('#', '');
    const matchingReason = reasons.find((option) => option.toLowerCase().replaceAll(' ', '-') === hashReason);
    if (matchingReason) {
      setReason(matchingReason);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const focusForm = (selectedReason = '') => {
    setReason(selectedReason);
    setStatus('idle');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus('ready');
  };

  return (
    <>
      <main>
        <section className="contact-hero">
          <div className="wrap contact-hero-grid">
            <div>
              <span className="eyebrow contact-eyebrow">Get in touch</span>
              <h1>Let&apos;s work together to empower the next generation.</h1>
              <p className="lede">Whether you want to volunteer, partner with us, support our programmes, or bring digital skills and AI literacy to your community, we&apos;d love to hear from you.</p>
              <button type="button" className="btn btn-primary" onClick={() => focusForm()}>Get in touch →</button>
            </div>
            <div className="contact-hero-art" aria-hidden="true">
              <div className="contact-orbit contact-orbit-one"></div>
              <div className="contact-orbit contact-orbit-two"></div>
              <div className="contact-art-card">
                <span className="contact-art-label">Open to possibility</span>
                <strong>Ideas become impact when we build together.</strong>
                <div className="contact-art-dots"><i></i><i></i><i></i><i></i><i></i></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white contact-main" ref={formRef} id="contact-form">
          <div className="wrap contact-grid">
            <div className="contact-details">
              <span className="eyebrow" style={{ color: 'var(--green)' }}>Start a conversation</span>
              <h2>Have a question? Let&apos;s talk.</h2>
              <p>Whether you have a question about our programmes or you&apos;re interested in working with us, our team would love to hear from you.</p>
              <div className="contact-info-list">
                <a href="mailto:hello@tiyeafrica.org" className="contact-info">
                  <span className="contact-info-icon" aria-hidden="true">@</span>
                  <span><small>Email</small><strong>hello@tiyeafrica.org</strong></span>
                </a>
                <div className="contact-info">
                  <span className="contact-info-icon" aria-hidden="true">+</span>
                  <span><small>Location</small><strong>Africa</strong></span>
                </div>
                <div className="contact-info">
                  <span className="contact-info-icon" aria-hidden="true">↗</span>
                  <span><small>Phone</small><strong>Phone number to be confirmed</strong></span>
                </div>
              </div>
              <p className="contact-reassurance">We&apos;re always open to conversations that create meaningful opportunities for young people.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span className="eyebrow" style={{ color: 'var(--orange)' }}>Send a message</span><p>Tell us a little about how we can work together.</p></div>
              <div className="form-row">
                <label>Full Name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
                <label>Email Address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              </div>
              <div className="form-row">
                <label>Organisation <span>(optional)</span><input name="organisation" type="text" autoComplete="organization" placeholder="Your organisation" /></label>
                <label>Phone Number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+234..." /></label>
              </div>
              <label>Reason for contacting us<select name="reason" value={reason} onChange={(event) => setReason(event.target.value)} required><option value="" disabled>Select a reason</option>{reasons.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label>Message<textarea name="message" required minLength="10" rows="6" placeholder="How can we help?"></textarea></label>
              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Preparing message…' : 'Send Message →'}</button>
              {status === 'ready' && <p className="form-status" role="status">Your message is ready to connect to TIYE&apos;s enquiry service. Please connect a backend endpoint to complete delivery.</p>}
            </form>
          </div>
        </section>
        {/* <section className="section contact-involved">
          <div className="wrap">
            <div className="section-head"><span className="eyebrow" style={{ color: 'var(--orange)' }}>Get involved</span><h2>There are many ways to make an impact.</h2><p>Whether you have time, expertise, resources, or simply a platform to share our work, you can help create opportunities for young people.</p></div>
            <div className="contact-involved-grid">
              {involvement.map((item) => <article className={`contact-involved-card ${item.color}`} key={item.title}><span className="contact-card-dot" aria-hidden="true"></span><h3>{item.title}</h3><p>{item.description}</p><button type="button" className="link contact-card-link" onClick={() => focusForm(item.reason)}>{item.cta}</button></article>)}
            </div>
          </div>
        </section> */}

        {/* <section className="section contact-impact">
          <div className="wrap contact-impact-inner"><span className="eyebrow">Our shared future</span><h2>Together, we can create more opportunities.</h2><p>Young people deserve access to the skills, knowledge, and opportunities they need to shape the future. Let&apos;s build that future together.</p><button type="button" className="btn btn-white" onClick={() => focusForm()}>Get Involved →</button></div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
