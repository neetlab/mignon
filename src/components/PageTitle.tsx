import { FC, ReactNode } from "react";
import styles from "./PageTitle.module.css";

export type PageTitleProps = {
  readonly children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = (props) => {
  const { children } = props;
  return <h1 className={styles.page_title}>{children}</h1>
}
