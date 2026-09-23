import { Metadata } from "next";

import { microcms } from "@/libs";
import { PostList } from "@/components/PostList";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Journals",
  description: "fragments of my thoughts, feelings, and memory",
  alternates: {
    canonical: "/journals",
  },
};

export const revalidate = 60;

export default async function Page() {
  const data = await microcms.client.getList<microcms.Post>({
    endpoint: "blogs",
  });

  return (
    <div>
      <PageTitle>ブログ</PageTitle>

      <p>
        最近あった出来事です。
      </p>

      <PostList posts={data.contents} />
    </div>
  );
}
