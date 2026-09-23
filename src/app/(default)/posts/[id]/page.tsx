import { Metadata, ResolvingMetadata } from "next";

import { microcms } from "@/libs";
import { getTextContent } from "@/utils/html";
import { Prose } from "@/components/Prose";

import styles from "./page.module.css";
import { PageTitle } from "@/components/PageTitle";

export async function generateMetadata(
  props: PageProps<"/posts/[id]">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await props.params;
  const { draftKey } = await props.searchParams;

  const data = await microcms.client.get<microcms.Post>({
    endpoint: "blogs",
    contentId: id,
    queries: { draftKey: draftKey as string },
  });

  const description = getTextContent(data.content).slice(0, 160) + "…";

  return {
    title: data.title,
    robots: (await parent).robots?.basic,
    description,
    openGraph: {
      images: [new URL(data.eyecatch.url)],
    },
    alternates: {
      canonical: `/posts/${id}`,
    },
  };
}

export const revalidate = 60;

export default async function Page(props: PageProps<"/posts/[id]">) {
  const { id } = await props.params;
  const { draftKey } = await props.searchParams;

  const data = await microcms.client.get<microcms.Post>({
    endpoint: "blogs",
    contentId: id,
    queries: { draftKey: draftKey as string },
  });

  return (
    <article className={styles.article}>
      <PageTitle>
        {data.title}
      </PageTitle>

      <Prose content={data.content} />
    </article>
  );
}
