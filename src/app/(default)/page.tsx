import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        こんにちは。私の名前は五十嵐 涼です。ソフトウェア開発者として働いています。コンピュータと言語が好きです。また、障害者、先住民族、不登校といった社会問題について関心があります。
      </p>

      <p>
        私の経歴について知りたい方は<Link href="/bio">プロフィール</Link>を、連絡をしたい方は<Link href="/contact">連絡先</Link>をご覧ください。
      </p>
    </div>
  );
}
