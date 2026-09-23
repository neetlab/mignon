import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        私の名前は五十嵐 涼です。ソフトウェア開発者として働いています。
      </p>

      <p>
        コンピュータと言語が好きです。また、障害者の権利、脱植民地化、脱学校論に関心があります。
      </p>

      <p>
        私の経歴について知りたい方は<Link href="/bio">プロフィール</Link>を、連絡をしたい方は<Link href="/contact">連絡先</Link>をご覧ください。
      </p>
    </div>
  );
}
