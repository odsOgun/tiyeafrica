import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

// Read-only client used by the public site. Uses the CDN for fast, cached reads.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
