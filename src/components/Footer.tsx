import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="/sitemap.xml">
            サイトマップ
          </a>
        </li>

        <li>
          <a href="/rss.xml">
            RSS
          </a>
        </li>

        <li>
          <a href="/accessibility">
            アクセシビリティ
          </a>
        </li>

        <li>
          <a href="/llm">
            生成AIについての考え
          </a>
        </li>
      </ul>

      <p>
        © 2015–2026 Ryō Igarashi
      </p>
    </footer>
  );
};

