import { FC } from "react"
import Link from "next/link";
import { Nav } from "./Nav"
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Nav />


      <div className={styles.title}>
        <Link href="/">
          Défaut de l&apos;Éducation
        </Link>
        <p>
          教育の欠陥
        </p>
      </div>
    </header>
  );
};

