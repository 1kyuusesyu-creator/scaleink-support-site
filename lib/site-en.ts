import { SITE_URL } from "./site";

export const EN_TOP_PATH = "/en/";
export const EN_TOP_URL = new URL(EN_TOP_PATH, SITE_URL).toString();

// 国別ストアへ自動遷移するURL。キャンペーン計測が必要になったら pt / ct クエリをここに足す。
export const APP_STORE_URL_EN = "https://apps.apple.com/app/scaleink/id6806526421";

// 日本語トップ（/）と英語トップ（/en/）の双方の <head> に出す hreflang。x-default は英語版。
export const TOP_PAGE_LANGUAGES = {
  ja: SITE_URL,
  en: EN_TOP_URL,
  "x-default": EN_TOP_URL,
} as const;

// 英語版トップで使うスクリーンショット（パス・alt・実ファイルの画素寸法を1か所に集約）。
// 英語化済みの *-en 版ができたら、src（と width / height）だけ差し替えればよい。
// 現状は英語化済み画像がないため、すべて日本語表記の元画像を暫定で使っている。
export const EN_IMAGES = {
  redline: {
    src: "/scaleink-redline.jpeg", // TODO: /scaleink-redline-en.jpeg
    width: 1536,
    height: 1152,
    alt: "iPad screen showing ScaleInk with a red circle, an arrow, and a handwritten note marked up on a reception counter drawing",
  },
  measurement: {
    src: "/scaleink-measurement.png", // TODO: /scaleink-measurement-en.png
    width: 1536,
    height: 1152,
    alt: "iPad screen showing ScaleInk with the scale set from a known 2,400 mm dimension and a passage width measured at 1,800 mm (1.8 m)",
  },
  layers: {
    src: "/scaleink-layers.png", // TODO: /scaleink-layers-en.png
    width: 1536,
    height: 1152,
    alt: "ScaleInk layers panel listing two layers, with red review marks and a blue wiring note overlaid on the drawing",
  },
  projects: {
    src: "/scaleink-projects.png", // TODO: /scaleink-projects-en.png
    width: 2752,
    height: 2064,
    alt: "ScaleInk Project Home showing three drawing projects as thumbnails",
  },
} as const;

// og:image / twitter:image はヒーロー画像（redline）に揃える。
export const EN_OG_IMAGE = {
  url: new URL(EN_IMAGES.redline.src, SITE_URL).toString(),
  width: EN_IMAGES.redline.width,
  height: EN_IMAGES.redline.height,
  alt: EN_IMAGES.redline.alt,
};

// フッターの補助ページ。/support/ と /privacy/ の本文は英語、/purchase/ は日本語のみ。
// 言語注記が必要なリンクは note に書く（表示は「ラベル (note)」）。
export const EN_FOOTER_PAGES = [
  { label: "Support", href: "/support/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Plans & Purchase Terms", href: "/purchase/", note: "Japanese" },
] as const;
