"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_STORE_URL_EN, EN_TOP_PATH } from "../../lib/site-en";
import LangSwitch from "../lang-switch";

export default function SiteHeaderEn() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href={EN_TOP_PATH} aria-label="ScaleInk home">
          <Image className="app-icon header-app-icon" src="/scaleink-app-icon.jpeg" alt="" width={29} height={29} priority />
          ScaleInk
        </Link>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <Link href={`${EN_TOP_PATH}#features`} onClick={closeMenu}>Features</Link>
          <Link href={`${EN_TOP_PATH}#pricing`} onClick={closeMenu}>Pricing</Link>
          <Link href={`${EN_TOP_PATH}#faq`} onClick={closeMenu}>FAQ</Link>
          <LangSwitch current="en" label="Language" />
        </nav>
        <div className="header-cta">
          <a href={APP_STORE_URL_EN} className="button button-dark" target="_blank" rel="noreferrer">
            Start free on the App Store <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
