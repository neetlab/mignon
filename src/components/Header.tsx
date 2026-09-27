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
          Ryō Igarashi
        </Link>
        <p>
          エピメテウス的人間の再生
        </p>
      </div>
    </header>
  );
};

