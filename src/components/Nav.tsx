import Link from "next/link"
import { FC } from "react"
import styles from "./Nav.module.css";

export const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {/* <li> */}
        {/*   <Link href="/blog"> */}
        {/*     ブログ */}
        {/*   </Link> */}
        {/* </li> */}

        <li>
          <Link href="/bio">
            プロフィール
          </Link>
        </li>

        <li>
          <Link href="/contact">
            連絡先
          </Link>
        </li>
      </ul>
    </nav>
  )
}
