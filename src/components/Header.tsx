import { FC } from "react"
import Link from "next/link";
import { Nav } from "./Nav"
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Nav />

      <Link href="/" className={styles.title}>
        Ryō Igarashi
      </Link>

      <p>
        aime les ordinateurs et les langues
      </p>
    </header>
  );
};

