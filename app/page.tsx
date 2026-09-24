import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Layers3,
  PenTool,
  Ruler,
  Shapes,
} from "lucide-react";
import { APP_STORE_URL, SITE_URL } from "../lib/site";

const images = {
  projects: "/scaleink-projects.png",
  measurement: "/scaleink-measurement.png",
  layers: "/scaleink-layers.png",
  redline: "/scaleink-redline.jpeg",
};

function AppStoreButton({
  label = "App Storeで無料で始める",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      href={APP_STORE_URL}
      className={`button ${light ? "button-light" : "button-dark"}`}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function Screenshot({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`shot-wrap ${className}`}>
      <div className="shot">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 52vw" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const featureCards = [
  [PenTool, "手書き・マーカー", "線の太さや色を選び、図面上に指示や検討内容を書き込めます。"],
  [Shapes, "テキスト・図形", "文字、直線、矩形などを使い、手書きだけでは伝わりにくい内容も明確に残せます。"],
  [Ruler, "定規", "画面上に定規を表示し、角度を保ちながら線を引けます。"],
  [Layers3, "参照PDFレイヤー", "別のPDFページを参照レイヤーとして重ね、位置を合わせながら比較できます。"],
  [FileText, "複数ページ", "ページ数を気にせず、複数ページのPDF図面を一つのプロジェクトで扱えます。"],
  [ArrowDown, "PDF書き出し", "検討内容を反映したPDFを書き出し、そのまま共有できます。"],
] as const;

const faqs = [
  ["ScaleInkはどの端末で使えますか？", "ScaleInkはiPad専用アプリです。図面への手書きや操作にはApple Pencilを利用できます。"],
  ["PDF図面に直接書き込めますか？", "一般的なPDF図面を読み込み、ペン、マーカー、テキスト、図形などで検討内容を追加できます。"],
  ["PDF図面の寸法はどのように測りますか？", "図面内に記載された既知寸法を使って縮尺を登録し、測定したい2点を指定します。測定結果は登録した縮尺に基づいて表示されます。"],
  ["無料版でも計測やPDF書き出しはできますか？", "はい。無料版でも縮尺登録・計測とPDF書き出しを利用できます。書き出したPDFに透かしは入りません。"],
  ["無料版にはどのような制限がありますか？", "作成できるプロジェクトは合計3件、レイヤーは元のPDF背景を含めて1ページあたり合計4層までです。PDFのページ数に上限はありません。"],
  ["アカウント登録は必要ですか？", "ScaleInk独自のアカウント登録は必要ありません。現時点ではクラウド同期や共同編集には対応していません。"],
] as const;

function FeatureSection({
  id,
  eyebrow,
  title,
  children,
  image,
  alt,
  caption,
  reverse = false,
  crop = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  alt: string;
  caption: string;
  reverse?: boolean;
  crop?: boolean;
}) {
  return (
    <section id={id} className={`feature-section ${reverse ? "reverse" : ""}`}>
      <div className="feature-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="body-copy">{children}</div>
      </div>
      <Screenshot src={image} alt={alt} caption={caption} className={crop ? "crop-projects" : ""} />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">建築・設計・施工のためのiPad図面レビューアプリ</p>
          <h1>
            <span className="hero-line">図面レビューを、</span>
            <span className="hero-line">iPadひとつで。</span>
          </h1>
          <p className="lead">
            PDF図面への赤入れ、縮尺計測、レイヤー整理を一つに。ScaleInk（スケールインク）なら、図面を開いて、その場で書く・測る・まとめるまで進められます。
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a href="#features" className="text-link">
              できることを見る <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <p className="microcopy">iPad専用・Apple Pencil対応・アカウント登録不要</p>
        </div>
        <Screenshot
          src={images.redline}
          alt="ScaleInkで受付カウンター詳細図に赤い円と矢印、R50の手書きメモを加えているiPad画面"
          caption="図面上に検討メモを手書きした画面。"
        />
      </section>

      <section id="features" className="intro-feature container">
        <div className="intro-copy">
          <p className="eyebrow">REDLINE</p>
          <h2>気づいたその場で、<br />図面に赤入れ。</h2>
        </div>
        <div className="intro-body body-copy">
          <p>ScaleInkは、Apple Pencilを使ってPDF図面に直接書き込めます。ペンやマーカー、消しゴムに加えて、テキストや図形でも指示を残せます。</p>
          <p>紙に出力せず、図面を見ながらそのまま検討を進められます。</p>
        </div>
        <div className="intro-rule" aria-hidden="true"><span>01</span><i /></div>
      </section>

      <div className="container feature-list">
        <FeatureSection
          id="measurement"
          eyebrow="MEASUREMENT"
          title="縮尺を合わせて、その場で測る。"
          image={images.measurement}
          alt="ScaleInkで図面の既知寸法2400mmから縮尺を登録し、通路幅を1.8mと計測しているiPad画面"
          caption="既知寸法2,400mmで縮尺を合わせ、通路幅1,800mmを実測。"
        >
          <p>図面内の既知寸法を使ってスケールを登録。測りたい区間をなぞるだけで、図面上に実寸を表示します。</p>
          <p>紙のスケールを当て直さず、PDFのまま距離や寸法を確認できます。</p>
          {/* 将来ここに縮尺・計測SEO記事へのリンクを追加 */}
        </FeatureSection>
        <FeatureSection
          id="layers"
          eyebrow="LAYERS"
          title="検討線も配線メモも、レイヤーで分ける。"
          image={images.layers}
          alt="ScaleInkのレイヤーパネルに2つのレイヤーが表示され、図面上に赤い検討線と青い配線メモが重なっているiPad画面"
          caption="赤い検討線と青い配線メモを、別レイヤーで管理。"
          reverse
        >
          <p>赤入れと設備メモを別レイヤーに整理。表示・非表示を切り替えながら、必要な検討内容だけを確認できます。</p>
          <p>レイヤーの名称変更、複製、不透明度の調整、ロックにも対応しています。</p>
        </FeatureSection>
        <FeatureSection
          id="projects"
          eyebrow="PROJECTS"
          title="図面を、プロジェクトごとにまとめる。"
          image={images.projects}
          alt="ScaleInkのProject Homeに3つの図面プロジェクトがサムネイル表示されているiPad画面"
          caption="図面を作業単位のプロジェクトとして一覧表示。"
          crop
        >
          <p>読み込んだPDFは、プロジェクトごとに保存。平面検討、詳細確認、改修案件など、作業単位でサムネイルを見ながら整理できます。</p>
          <p>必要な図面へすぐに戻り、前回の検討から作業を続けられます。</p>
        </FeatureSection>
      </div>

      <section className="tools-section container">
        <div className="section-heading">
          <p className="eyebrow">TOOLKIT</p>
          <h2>図面レビューに必要な道具を、<br />ひとつに。</h2>
        </div>
        <div className="tools-grid">
          {featureCards.map(([Icon, title, text]) => (
            <article className="tool-card" key={title}>
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">PRICING</p>
            <h2>まずは無料で。<br />必要になったらProへ。</h2>
            <p className="section-lead">
              無料版でも、PDFへの赤入れ、縮尺計測、レイヤー管理、PDF書き出しなどの基本機能を利用できます。<br className="desktop-only" />
              プロジェクトやレイヤーを増やしたいときは、ScaleInk Proへアップグレードできます。
            </p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <div><p className="plan-label">Free</p><div className="price">¥0</div></div>
              <ul>
                <li>プロジェクト：3件まで</li><li>レイヤー：1ページあたり合計4層まで</li><li>PDFのページ数：無制限</li><li>赤入れ・手書き</li><li>テキスト・図形</li><li>縮尺登録・寸法計測</li><li>PDF書き出し</li>
              </ul>
              <AppStoreButton label="無料で始める" />
            </article>
            <article className="price-card pro">
              <div className="pro-top">
                <div><p className="plan-label">ScaleInk Pro</p><p className="plan-note">プロジェクト・レイヤー数の制限なし</p></div>
                <span className="annual-badge">年額を推奨</span>
              </div>
              <div className="plan-prices"><span>月額 <b>¥600</b></span><span className="selected">年額 <b>¥3,600</b></span><span>買い切り <b>¥9,800</b></span></div>
              <ul><li>Freeのすべての機能</li><li>プロジェクト数の制限なし</li><li>レイヤー数の制限なし</li><li>Stackの作成・移動・複製</li></ul>
              <AppStoreButton label="App Storeでプランを見る" />
            </article>
          </div>
          <p className="price-footnote">年額プランは月あたり¥300相当です。買い切りプランはファミリー共有に対応しています。レイヤー上限には元のPDF背景を含みます。価格はApp Store上の表示が優先されます。</p>
        </div>
      </section>

      <section id="faq" className="faq-section container">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>よくある質問</h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-inner">
          <div><p className="eyebrow">SCALEINK</p><h2>次の図面レビューを、<br />iPadから。</h2><p>PDFを読み込んで、書く・測る・整理する。<br />ScaleInkは無料で始められます。</p></div>
          <div className="final-action"><AppStoreButton light /><span>iPad専用・Apple Pencil対応</span></div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ScaleInk",
            alternateName: "スケールインク",
            applicationCategory: "BusinessApplication",
            operatingSystem: "iPadOS",
            description: "PDF図面への赤入れ、Apple Pencilでの手書き、縮尺登録・寸法計測、レイヤー管理を一つにまとめたiPad専用の図面レビューアプリです。",
            offers: [
              { "@type": "Offer", name: "ScaleInk Free", price: "0", priceCurrency: "JPY" },
              { "@type": "Offer", name: "ScaleInk Pro 月額", price: "600", priceCurrency: "JPY" },
              { "@type": "Offer", name: "ScaleInk Pro 年額", price: "3600", priceCurrency: "JPY" },
              { "@type": "Offer", name: "ScaleInk Pro 買い切り", price: "9800", priceCurrency: "JPY" },
            ],
            url: SITE_URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          }),
        }}
      />
    </>
  );
}
