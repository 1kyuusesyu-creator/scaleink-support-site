"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_STORE_URL } from "../lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="ScaleInk ホーム">
          <Image className="app-icon header-app-icon" src="/scaleink-app-icon.jpeg" alt="" width={29} height={29} priority />
          ScaleInk
        </Link>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="メインナビゲーション">
          <Link href="/#features" onClick={closeMenu}>できること</Link>
          <Link href="/#pricing" onClick={closeMenu}>料金</Link>
          <Link href="/#faq" onClick={closeMenu}>よくある質問</Link>
        </nav>
        <div className="header-cta">
          <a href={APP_STORE_URL} className="button button-dark" target="_blank" rel="noreferrer">
            App Storeで無料で始める <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
