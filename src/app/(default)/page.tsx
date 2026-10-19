import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        私の名前は
        <ruby>五十嵐<rt>いがらし</rt></ruby>
        <ruby>涼<rt>りょう</rt></ruby>
        です。ソフトウェア開発者として働いています。
      </p>

      <p>
        コンピュータと言語が好きです。また、社会学や障害学に関心があります。
      </p>

      <p>
        私の経歴について知りたい方は<Link href="/bio">プロフィール</Link>を、連絡をしたい方は<Link href="/contact">連絡先</Link>をご覧ください。
      </p>
    </div>
  );
}
