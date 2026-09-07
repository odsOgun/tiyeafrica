/**
 * Embedded Sanity Studio at /studio.
 * Only users you invite to the Sanity project (admins) can log in and edit.
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
