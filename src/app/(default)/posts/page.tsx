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

export default async function Page() {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });

  const data = await client.getList<microcms.Post>({
    endpoint: "blogs",
  });

  return (
    <div>
      <h1>
        ブログ
      </h1>
      <p>
        最近あった出来事です。
      </p>

      <div className={styles.post_container}>
        {data.contents.map((blog) => (
          <div className={styles.post} key={blog.id}>
            <div>
              <div>
                {blog.lang}
              </div>

              <Link href={`/posts/${blog.id}`}>
                {blog.title}
              </Link>

              <div>
                {blog.hashtags.map((v) => `#${v.title}`).join(", ")}
              </div>
            </div>

            <Image
              className={styles.eyecatch}
              src={blog.eyecatch.url}
              width={blog.eyecatch.width}
              height={blog.eyecatch.height}
              alt={blog.eyecatch.alt ?? ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
