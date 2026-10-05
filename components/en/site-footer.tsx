import Image from "next/image";
import Link from "next/link";
import { EN_FOOTER_PAGES, EN_TOP_PATH } from "../../lib/site-en";

export default function SiteFooterEn() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" href={EN_TOP_PATH}>
          <Image className="app-icon footer-app-icon" src="/scaleink-app-icon.jpeg" alt="" width={21} height={21} />
          ScaleInk
        </Link>
        <nav aria-label="Footer navigation">
          <Link href={`${EN_TOP_PATH}#features`}>Features</Link>
          <Link href={`${EN_TOP_PATH}#pricing`}>Pricing</Link>
          <Link href={`${EN_TOP_PATH}#faq`}>FAQ</Link>
          {/* 日本語サイト側（別 root layout）のページなので <a> で通常遷移させる。 */}
          {EN_FOOTER_PAGES.map((page) => (
            <a key={page.href} href={page.href}>
              {"note" in page ? `${page.label} (${page.note})` : page.label}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} ScaleInk</p>
      </div>
    </footer>
  );
}
