import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

const token = process.env.SANITY_API_READ_TOKEN;
if(!token) {
    throw new Error("Sanity read token is required");
}
 
export const {sanityFetch, SanityLive}=defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
})
