import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '../../components/Footer';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries';
import CommentForm from '../CommentForm';
import PostBody from './PostBody';
import { formatDate } from '../format';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(postSlugsQuery);
    return (slugs || []).map((slug) => ({ slug }));
  } catch (err) {
    console.error('Failed to load post slugs:', err);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch {
    // ignore — fall back to default metadata
  }
  if (!post) return { title: 'News — TIYE' };
  return {
    title: `${post.title} — TIYE`,
    description: post.excerpt || undefined,
    openGraph: post.mainImage
      ? { images: [urlFor(post.mainImage).width(1200).height(630).fit('crop').url()] }
      : undefined,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch (err) {
    console.error('Failed to load post:', err);
  }

  if (!post) notFound();

  const heroImg = post.mainImage
    ? urlFor(post.mainImage).width(1400).height(760).fit('crop').url()
    : null;
  const comments = post.comments || [];

  return (
    <>
      <article className="post">
        <header className="post-hero">
          <div className="wrap narrow">
            <div className="breadcrumb">
              <Link href="/news">News</Link>
              <span>/</span>
              <span>{post.category?.title || 'Story'}</span>
            </div>
            <div className="news-meta post-hero-meta">
              {post.category?.title && (
                <span className="news-cat">{post.category.title}</span>
              )}
              <span className="news-date">{formatDate(post.publishedAt)}</span>
            </div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="lede">{post.excerpt}</p>}
            {post.author?.name && (
              <p className="post-byline">By {post.author.name}</p>
            )}
          </div>
        </header>

        {heroImg && (
          <div className="wrap">
            <div className="post-cover">
              <img src={heroImg} alt={post.mainImage?.alt || post.title} />
            </div>
          </div>
        )}

        <div className="wrap narrow post-content">
          <PostBody value={post.body} />
        </div>

        {/* COMMENTS */}
        <section className="wrap narrow post-comments">
          <h2 className="comments-title">
            Comments {comments.length > 0 && <span>({comments.length})</span>}
          </h2>

          {comments.length === 0 ? (
            <p className="news-empty" style={{ marginTop: 0 }}>
              No comments yet. Be the first to share your thoughts.
            </p>
          ) : (
            <ul className="comment-list">
              {comments.map((c) => (
                <li key={c._id} className="comment-item">
                  <div className="comment-head">
                    <span className="comment-author">{c.name}</span>
                    <span className="comment-date">{formatDate(c.createdAt)}</span>
                  </div>
                  <p className="comment-text">{c.comment}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="comment-form-wrap">
            <h3 className="comment-form-title">Leave a comment</h3>
            <p className="comment-note">
              Comments are reviewed before they appear.
            </p>
            <CommentForm postId={post._id} />
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}
