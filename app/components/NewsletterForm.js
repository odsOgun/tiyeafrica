'use client';

import { useState } from 'react';

export default function NewsletterForm({ className = '', title = 'Subscribe to our newsletter & updates' }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      website: form.website.value,
    };

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
        return;
      }

      form.reset();
      setStatus('done');
      setMessage('Thanks for subscribing. We will keep you updated.');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <div className={`newsletter ${className}`.trim()}>
      {title && <h5>{title}</h5>}
      <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <div className="newsletter-fields">
          <label>
            <span className="sr-only">Name</span>
            <input name="name" type="text" maxLength={80} placeholder="Your name" required />
          </label>
          <label>
            <span className="sr-only">Email address</span>
            <input name="email" type="email" placeholder="Your email" required />
          </label>
        </div>

        <div aria-hidden="true" className="newsletter-trap">
          <label htmlFor="newsletter-website">Website</label>
          <input id="newsletter-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm" disabled={status === 'sending'}>
          {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`newsletter-message ${status === 'error' ? 'is-error' : 'is-ok'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
