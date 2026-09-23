import { createClient, MicroCMSImage } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type MicroCMSDefaultFields = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Hashtag = {
  id: string;
  title: string;
};

export type Post = MicroCMSDefaultFields & {
  id: string;
  lang: string[];
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  hashtags: Hashtag[];
};

