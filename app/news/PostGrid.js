'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import { formatDate } from './format';

export default function PostGrid({ posts, categories }) {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return posts;
    return posts.filter((p) => p.category?.slug === active);
  }, [active, posts]);

  return (
    <>
      {categories.length > 0 && (
        <div className="news-filter" role="tablist" aria-label="Filter posts by category">
          <button
            role="tab"
            aria-selected={active === 'all'}
            className={`filter-pill ${active === 'all' ? 'is-active' : ''}`}
            onClick={() => setActive('all')}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              role="tab"
              aria-selected={active === c.slug}
              className={`filter-pill ${active === c.slug ? 'is-active' : ''}`}
              onClick={() => setActive(c.slug)}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="news-empty">No posts in this category yet.</p>
      ) : (
        <div className="news-grid">
          {filtered.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

function PostCard({ post }) {
  const img = post.mainImage
    ? urlFor(post.mainImage).width(720).height(460).fit('crop').url()
    : null;

  return (
    <Link href={`/news/${post.slug}`} className="news-card">
      <div className="news-card-media">
        {img ? (
          <img src={img} alt={post.mainImage?.alt || post.title} loading="lazy" />
        ) : (
          <div className="news-card-media-ph" />
        )}
      </div>
      <div className="news-card-body">
        <div className="news-meta">
          {post.category?.title && <span className="news-cat">{post.category.title}</span>}
          <span className="news-date">{formatDate(post.publishedAt)}</span>
        </div>
        <h3>{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
      </div>
    </Link>
  );
}
