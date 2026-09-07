import { PortableText } from '@portabletext/react';

import { urlFor } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1200).fit('max').url();
      return (
        <figure className="post-figure">
          <img src={url} alt={value.alt || ''} loading="lazy" />
          {value.alt && <figcaption>{value.alt}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PostBody({ value }) {
  if (!value) return null;
  return (
    <div className="post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
