import Link from 'next/link';

import Footer from '../components/Footer';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import {
  featuredPostQuery,
  postsQuery,
  categoriesQuery,
} from '@/sanity/lib/queries';
import PostGrid from './PostGrid';
import { formatDate } from './format';

export const metadata = {
  title: 'News — TIYE',
  description:
    'Stories, updates, and insights from TIYE — digital skills, AI literacy, and responsible AI across Africa.',
};

// Revalidate the listing periodically so new posts appear without a rebuild.
export const revalidate = 60;

export default async function NewsPage() {
  let featured = null;
  let posts = [];
  let categories = [];
  try {
    [featured, posts, categories] = await Promise.all([
      client.fetch(featuredPostQuery),
      client.fetch(postsQuery),
      client.fetch(categoriesQuery),
    ]);
    posts = posts || [];
    categories = categories || [];
  } catch (err) {
    console.error('Failed to load news from Sanity:', err);
  }

  const featuredImg = featured?.mainImage
    ? urlFor(featured.mainImage).width(1200).height(720).fit('crop').url()
    : null;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--green)' }}>Newsroom</span>
          <h1 style={{ marginTop: '16px', maxWidth: '20ch' }}>
            News &amp; stories from the TIYE community.
          </h1>
          <p className="lede">
            Programme updates, field notes, and perspectives on digital skills,
            AI literacy, and responsible AI across Africa.
          </p>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          {!featured && posts.length === 0 ? (
            <p className="news-empty" style={{ marginTop: 0 }}>
              No stories published yet — check back soon.
            </p>
          ) : (
            <>
              {featured && (
                <Link href={`/news/${featured.slug}`} className="news-featured">
                  <div className="news-featured-media">
                    {featuredImg ? (
                      <img
                        src={featuredImg}
                        alt={featured.mainImage?.alt || featured.title}
                      />
                    ) : (
                      <div className="news-card-media-ph" />
                    )}
                  </div>
                  <div className="news-featured-body">
                    <div className="news-meta">
                      <span className="news-tag-featured">Featured</span>
                      {featured.category?.title && (
                        <span className="news-cat">{featured.category.title}</span>
                      )}
                      <span className="news-date">
                        {formatDate(featured.publishedAt)}
                      </span>
                    </div>
                    <h2>{featured.title}</h2>
                    {featured.excerpt && <p>{featured.excerpt}</p>}
                    <span className="news-readmore">
                      Read story <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              )}

              <PostGrid posts={posts} categories={categories} />
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
