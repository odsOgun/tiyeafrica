export const comment = {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description:
        'Comments are hidden from the site until this is turned on.',
      initialValue: false,
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
      readOnly: true,
    },
    {
      name: 'createdAt',
      title: 'Submitted at',
      type: 'datetime',
      readOnly: true,
    },
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      approved: 'approved',
      post: 'post.title',
    },
    prepare({ name, comment, approved, post }) {
      return {
        title: `${approved ? '✓' : '⏳'} ${name || 'Anonymous'}`,
        subtitle: `${post ? `on “${post}” — ` : ''}${comment || ''}`,
      };
    },
  },
};
