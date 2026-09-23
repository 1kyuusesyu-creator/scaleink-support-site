import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" href="/">
          <Image className="app-icon footer-app-icon" src="/scaleink-app-icon.jpeg" alt="" width={21} height={21} />
          ScaleInk
        </Link>
        <nav aria-label="フッターナビゲーション">
          <Link href="/#features">できること</Link>
          <Link href="/#pricing">料金</Link>
          <Link href="/#faq">よくある質問</Link>
          <Link href="/support">サポート</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
        <p>© {new Date().getFullYear()} ScaleInk</p>
      </div>
    </footer>
  );
}
