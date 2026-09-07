import { NextResponse } from 'next/server';

import { writeClient } from '@/sanity/lib/writeClient';

export const runtime = 'nodejs';

const MAX_NAME = 80;
const MAX_COMMENT = 2000;

export async function POST(request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { error: 'Comments are not configured yet.' },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const comment = typeof body.comment === 'string' ? body.comment.trim() : '';
  const postId = typeof body.postId === 'string' ? body.postId.trim() : '';
  // Honeypot: bots fill hidden fields, humans leave them empty.
  const trap = typeof body.website === 'string' ? body.website.trim() : '';

  if (!name || !comment || !postId) {
    return NextResponse.json(
      { error: 'Please add your name and a comment.' },
      { status: 400 }
    );
  }
  if (name.length > MAX_NAME || comment.length > MAX_COMMENT) {
    return NextResponse.json(
      { error: 'That comment is a little too long.' },
      { status: 400 }
    );
  }
  if (trap) {
    // Silently accept to avoid tipping off bots, but store nothing.
    return NextResponse.json({ ok: true });
  }

  try {
    // Confirm the post actually exists before attaching a comment to it.
    const post = await writeClient.fetch(
      `*[_type == "post" && _id == $postId][0]._id`,
      { postId }
    );
    if (!post) {
      return NextResponse.json({ error: 'Unknown post.' }, { status: 400 });
    }

    await writeClient.create({
      _type: 'comment',
      name,
      comment,
      approved: false,
      createdAt: new Date().toISOString(),
      post: { _type: 'reference', _ref: postId },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to save comment:', err);
    return NextResponse.json(
      { error: 'Could not save your comment. Please try again.' },
      { status: 500 }
    );
  }
}
