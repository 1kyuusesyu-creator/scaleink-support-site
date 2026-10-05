import { EN_TOP_PATH } from "../lib/site-en";

// ヘッダーの「日本語 / English」。自動リダイレクトはせず、手動リンクのみ。
export default function LangSwitch({
  current,
  label,
}: {
  current: "ja" | "en";
  label: string;
}) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {current === "ja" ? (
        <span lang="ja" aria-current="true">日本語</span>
      ) : (
        <a href="/" lang="ja" hrefLang="ja">日本語</a>
      )}
      <span className="lang-switch-sep" aria-hidden="true">/</span>
      {current === "en" ? (
        <span lang="en" aria-current="true">English</span>
      ) : (
        <a href={EN_TOP_PATH} lang="en" hrefLang="en">English</a>
      )}
    </div>
  );
}
