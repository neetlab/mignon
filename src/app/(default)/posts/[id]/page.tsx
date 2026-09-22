import { Metadata } from "next";
import { createClient } from "microcms-js-sdk";

import { microcms } from "@/models";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journals",
  description: "fragments of my thoughts, feelings, and memory",
  alternates: {
    canonical: "/journals",
  },
};

export const revalidate = 60;

export default async function Page(props: PageProps<"/posts/[id]">) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });

  const data = await client.get<microcms.Post>({
    endpoint: "blogs",
    contentId: params.id,
    queries: { draftKey: searchParams.draftKey as string },
  });

  return (
    <div>
      <h1>
        {data.title}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}
