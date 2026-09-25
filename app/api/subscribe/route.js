import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_NAME = 80;

export async function POST(request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId < 1) {
    return NextResponse.json(
      { error: 'Newsletter is not configured yet.' },
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
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const trap = typeof body.website === 'string' ? body.website.trim() : '';

  if (trap) return NextResponse.json({ ok: true });

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: { FIRSTNAME: name },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const errorCode = typeof errorBody.code === 'string' ? errorBody.code : 'unknown';
      const errorMessage = typeof errorBody.message === 'string' ? errorBody.message : 'No details returned';

      console.error('Brevo subscription failed:', {
        status: response.status,
        code: errorCode,
        message: errorMessage,
        listId,
      });

      return NextResponse.json(
        {
          error: 'Could not subscribe you right now. Please try again.',
          reason: `Brevo returned ${response.status} (${errorCode}).`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to contact Brevo:', error);
    return NextResponse.json(
      { error: 'Could not subscribe you right now. Please try again.' },
      { status: 502 }
    );
  }
}