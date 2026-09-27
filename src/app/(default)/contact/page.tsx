import { Fragment } from "react/jsx-runtime";
import data from "./data.json" assert { type: "json" };
import styles from "./page.module.css";
import { PageTitle } from "@/components/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "連絡先",
  description: "御連絡はこちらから。",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <PageTitle>連絡先</PageTitle>

      <p>
        御連絡はこちらから。
      </p>

      <dl className={styles.contact_list}>
        {data.map((item) => (
          <Fragment key={item.label}>
            <dt>{item.name}</dt>
            <dd>
              <a href={item.url}>{item.label}</a>
            </dd>
          </Fragment>
        ))}
      </dl>
    </>
  )
}
