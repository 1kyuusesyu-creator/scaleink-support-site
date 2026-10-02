export const SITE_URL = "https://scaleink.app/";

export const APP_STORE_URL =
  "https://apps.apple.com/jp/app/scaleink/id6806526421";

export const DRAWING_SCALE_ARTICLE_PATH = "/articles/drawing-scale-app/";

export const DRAWING_SCALE_ARTICLE_URL = new URL(
  DRAWING_SCALE_ARTICLE_PATH,
  SITE_URL,
).toString();

// 記事の公開日・更新日（YYYY-MM-DD）。公開時に実際のデプロイ日を設定する。
// 未設定（undefined または空文字）の間は、画面・Article JSON-LD・sitemapのいずれにも出力されない。
export const DRAWING_SCALE_ARTICLE_DATES: {
  datePublished?: string;
  dateModified?: string;
} = { datePublished: "2026-10-03", dateModified: "2026-10-03" };
