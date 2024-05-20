import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, writeToken } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // token: writeToken,
});
