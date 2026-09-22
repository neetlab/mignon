import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryo Igarashi",
  description: "le site de web de ryo igarashi",
};

export default function RootLayout(props: LayoutProps<"/">) {
  const { children } = props;

  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
