import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neet.love"),
  title: {
    default: "Ryō Igarashi",
    template: "%s | Ryō Igarashi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  const { children } = props;

  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
