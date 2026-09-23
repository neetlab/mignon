import { Fragment } from "react/jsx-runtime";
import data from "./data.json" assert { type: "json" };
import styles from "./page.module.css";
import { PageTitle } from "@/components/PageTitle";

export default function Contact() {
  return (
    <>
      <PageTitle>連絡先</PageTitle>

      <p>
        あいうえおあいうえおあいうえお
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
