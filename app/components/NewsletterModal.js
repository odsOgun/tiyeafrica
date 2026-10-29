'use client';

import { useEffect, useState } from 'react';

import NewsletterForm from './NewsletterForm';

export default function NewsletterModal({ triggerLabel = 'Join the newsletter' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="newsletter-trigger"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="newsletter-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            className="newsletter-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-modal-title"
          >
            <button
              type="button"
              className="newsletter-modal-close"
              aria-label="Close newsletter form"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <div className="newsletter-modal-image" aria-hidden="true">
              {/* <span className="newsletter-modal-kicker">TIYE dispatch</span> */}
              <img src="/img/newsletter.png" alt="" />
              {/* <div className="newsletter-modal-note">
                <b>Fresh from the field</b>
                <span>Stories, resources, and opportunities from our youth tech community.</span>
              </div> */}
            </div>
            <div className="newsletter-modal-content">
              <p className="eyebrow newsletter-modal-eyebrow">Newsletter & updates</p>
              <h2 id="newsletter-modal-title">Stay close to the work shaping digital opportunity.</h2>
              <p>
                Join our community for programme news, impact stories, learning resources,
                partnership calls, and opportunities from TIYE.
              </p>
              <ul className="newsletter-modal-list">
                <li>Field notes from digital skills and AI literacy programmes</li>
                <li>Invitations, openings, and community opportunities</li>
                <li>Practical updates you can read in a few minutes</li>
              </ul>
              <NewsletterForm className="newsletter-modal-form" title="Stay updated!" />
              {/* <p className="newsletter-modal-privacy">No spam. Just thoughtful updates when there is something useful to share.</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
