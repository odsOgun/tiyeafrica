'use client';

import { useState } from 'react';

export default function CommentForm({ postId }) {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.currentTarget;
    const data = {
      postId,
      name: form.name.value,
      comment: form.comment.value,
      website: form.website.value, // honeypot
    };

    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setMessage(json.error || 'Something went wrong. Please try again.');
        return;
      }

      form.reset();
      setStatus('done');
      setMessage('Thanks! Your comment was submitted and will appear once approved.');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <div className="comment-field">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" name="name" type="text" maxLength={80} required
          placeholder="Your name" />
      </div>

      <div className="comment-field">
        <label htmlFor="c-comment">Comment</label>
        <textarea id="c-comment" name="comment" rows={4} maxLength={2000} required
          placeholder="Share your thoughts…" />
      </div>

      {/* Honeypot — hidden from real users. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="comment-actions">
        <button type="submit" className="btn btn-blue btn-sm" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Post comment'}
        </button>
        {message && (
          <p className={`comment-msg ${status === 'error' ? 'is-error' : 'is-ok'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
