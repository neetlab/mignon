import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
// import { SkipLink } from "@/components/SkipLink";
import styles from "./layout.module.css";

export default function DefaultLayout(props: LayoutProps<"/">) {
  const { children } = props;
  return (
    <>
      {/* <SkipLink /> */}
      <div className={styles.container}>
        <Header />
        <main tabIndex={-1} className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
