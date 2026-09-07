import { groq } from 'next-sanity';

// A single featured post (most recent one flagged as featured).
export const featuredPostQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)]
    | order(publishedAt desc)[0]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      "category": category->{title, "slug": slug.current},
      "author": author->{name}
    }
`;

// All published posts except the featured one, newest first.
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(featured == true)]
    | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      "category": category->{title, "slug": slug.current}
    }
`;

// All categories that are actually used by at least one post.
export const categoriesQuery = groq`
  *[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0]
    | order(title asc){
      title,
      "slug": slug.current
    }
`;

// Slugs for static generation.
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// A single post by slug, plus only its approved comments.
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "category": category->{title, "slug": slug.current},
    "author": author->{name, bio, image},
    "comments": *[_type == "comment" && references(^._id) && approved == true]
      | order(createdAt desc){
        _id,
        name,
        comment,
        createdAt
      }
  }
`;
