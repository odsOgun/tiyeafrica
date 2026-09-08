import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

// Server-only client with a write token. NEVER import this into a client
// component — the token must not reach the browser.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
});
