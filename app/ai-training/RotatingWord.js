'use client';

import { useEffect, useState } from 'react';

// Cycles through `words` in the hero headline. Re-keying the span replays the
// CSS entrance animation each time the word changes.
export default function RotatingWord({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span key={index} className="ait-word" aria-hidden="true">
      {words[index]}
    </span>
  );
}
