import { Noto_Sans_JP } from "next/font/google";
import type { Metadata, Viewport } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { SITE_URL } from "../lib/site";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  fallback: ["Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ScaleInk（スケールインク）｜建築・設計のためのiPad図面レビューアプリ",
  description:
    "ScaleInk（スケールインク）は、PDF図面への赤入れ、Apple Pencilでの手書き、縮尺登録・寸法計測、レイヤー管理を一つにまとめたiPad専用の図面レビューアプリです。",
  alternates: { canonical: SITE_URL },
  icons: { icon: "/scaleink-app-icon.jpeg", apple: "/scaleink-app-icon.jpeg" },
  openGraph: {
    title: "ScaleInk｜建築・設計のためのiPad図面レビューアプリ",
    description: "PDF図面への赤入れ、縮尺計測、レイヤー整理を一つに。",
    url: SITE_URL,
    siteName: "ScaleInk",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/scaleink-redline.jpeg",
        width: 2752,
        height: 2064,
        alt: "ScaleInkでPDF図面に赤入れしているiPad画面",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F1ECDF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main id="top">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
