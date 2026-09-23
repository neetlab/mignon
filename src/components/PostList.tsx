import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { microcms } from "@/libs";

import styles from "./PostList.module.css";

export type PostListProps = {
  readonly posts: readonly microcms.Post[];
}

export const PostList: FC<PostListProps> = (props) => {
  const { posts } = props;

  return (
    <div className={styles.post_container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>

            <div>
              {post.hashtags.map((v) => `#${v.title}`).join(", ")}
            </div>
          </div>

          <div className={styles.eyecatch}>
            <Image
              src={post.eyecatch.url}
              // width={post.eyecatch.width}
              // height={post.eyecatch.height}
              alt={post.eyecatch.alt ?? ""}
              fill
            />
          </div>
        </div>
      ))}
    </div>

  )
}
