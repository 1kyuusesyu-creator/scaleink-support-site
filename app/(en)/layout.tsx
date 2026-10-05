import { Source_Sans_3 } from "next/font/google";
import type { Metadata, Viewport } from "next";
import SiteFooterEn from "../../components/en/site-footer";
import SiteHeaderEn from "../../components/en/site-header";
import { SITE_URL } from "../../lib/site";
import { EN_OG_IMAGE, EN_TOP_URL, TOP_PAGE_LANGUAGES } from "../../lib/site-en";
import "../globals.css";

// 英語ページでは和文フォント（Noto Sans JP）を読み込まない。
// Noto Sans JP のラテン字形は Source Sans 系なので、見た目が揃う Source Sans 3 を使う。
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const TITLE = "ScaleInk | PDF Drawing Markup & Scale Measurement App for iPad";
const DESCRIPTION =
  "ScaleInk is an iPad app to mark up PDF drawings with Apple Pencil, set the scale to measure real dimensions, and organize notes in layers. Free to start.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: EN_TOP_URL, languages: TOP_PAGE_LANGUAGES },
  icons: { icon: "/scaleink-app-icon.jpeg", apple: "/scaleink-app-icon.jpeg" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: EN_TOP_URL,
    siteName: "ScaleInk",
    locale: "en_US",
    type: "website",
    images: [EN_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [EN_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F1ECDF",
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>
        <div className="site-shell">
          <SiteHeaderEn />
          <main id="top">{children}</main>
          <SiteFooterEn />
        </div>
      </body>
    </html>
  );
}
