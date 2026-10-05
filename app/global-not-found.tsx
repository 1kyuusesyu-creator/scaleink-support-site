import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import "./globals.css";

// route group (ja) / (en) で root layout が分かれているため、404 は従来どおり日本語サイトの
// ヘッダー・フッター付きで返す。
// ここで next/font を使うと、その Web フォントが全ページ（/en/ を含む）の preload に紐づいてしまうため、
// 404 だけは Noto Sans JP を読み込まず、システムの日本語フォントで表示する。
// globals.css の body は var(--font-noto-sans-jp) を先頭に参照するので、未定義だと宣言ごと無効になる。
// そのため、同じ変数にシステムフォントを定義しておく。
const FONT_VARS = { "--font-noto-sans-jp": '"Hiragino Kaku Gothic ProN"' } as React.CSSProperties;

export const metadata: Metadata = {
  title: "ScaleInk（スケールインク）｜建築・設計のためのiPad図面レビューアプリ",
};

// Next.js 既定の 404 表示（単一 root layout 時の not-found と同じマークアップ・スタイル）。
const DEFAULT_404_STYLE =
  "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}";

export default function GlobalNotFound() {
  return (
    <html lang="ja" style={FONT_VARS}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main id="top">
            <div
              style={{
                fontFamily:
                  'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                height: "100vh",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <style dangerouslySetInnerHTML={{ __html: DEFAULT_404_STYLE }} />
                <h1
                  className="next-error-h1"
                  style={{
                    display: "inline-block",
                    margin: "0 20px 0 0",
                    padding: "0 23px 0 0",
                    fontSize: 24,
                    fontWeight: 500,
                    verticalAlign: "top",
                    lineHeight: "49px",
                  }}
                >
                  404
                </h1>
                <div style={{ display: "inline-block" }}>
                  <h2 style={{ fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 }}>
                    This page could not be found.
                  </h2>
                </div>
              </div>
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
