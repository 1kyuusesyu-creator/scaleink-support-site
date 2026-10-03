import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  APP_STORE_URL,
  DRAWING_SCALE_ARTICLE_DATES,
  DRAWING_SCALE_ARTICLE_URL,
  SITE_URL,
} from "../../../lib/site";

const TITLE = "図面の縮尺を計算する方法｜PDFを実寸で測れるアプリの使い方";
const DESCRIPTION =
  "縮尺が分からないPDF図面でも、既知寸法を基準にすれば実寸を確認できます。手作業で縮尺を合わせる方法と、iPadアプリScaleInkで距離を測り、赤入れする手順を紹介します。";

const FIGURE_SIZE = { width: 1600, height: 1199 };
const FIGURE_BASE = "/images/articles/drawing-scale-app";

// 記事専用のOGP画像は未確定のため、サイト共通のOGP画像（app/layout.tsx と同じファイル）を流用している。
const OG_IMAGE = {
  url: new URL("/scaleink-redline.jpeg", SITE_URL).toString(),
  width: 1536,
  height: 1152,
  alt: "ScaleInkでPDF図面に赤入れしているiPad画面",
};

// 画面上の著者表示と Article JSON-LD の author の共通ソース。
const AUTHOR = {
  "@type": "Organization",
  name: "ScaleInk",
  url: SITE_URL,
} as const;

// 公開日・更新日は lib/site.ts の DRAWING_SCALE_ARTICLE_DATES で設定する。未設定・空文字の間は何も出力しない。
const { datePublished, dateModified } = DRAWING_SCALE_ARTICLE_DATES;

function formatDateJa(date: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  return match ? `${match[1]}年${Number(match[2])}月${Number(match[3])}日` : date;
}

// 画面上のパンくずと BreadcrumbList JSON-LD の共通ソース。
const BREADCRUMBS = [
  { name: "ホーム", url: SITE_URL, href: "/" },
  { name: TITLE, url: DRAWING_SCALE_ARTICLE_URL },
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: DRAWING_SCALE_ARTICLE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: DRAWING_SCALE_ARTICLE_URL,
    siteName: "ScaleInk",
    locale: "ja_JP",
    type: "article",
    images: [OG_IMAGE],
  },
};

function AppStoreButton() {
  return (
    <a href={APP_STORE_URL} className="button button-dark" target="_blank" rel="noreferrer">
      App StoreでScaleInkを見る
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function AppStoreCta() {
  return (
    <div className="article-cta">
      <AppStoreButton />
    </div>
  );
}

function ArticleFigure({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="article-figure">
      <Image
        src={`${FIGURE_BASE}/${file}`}
        alt={alt}
        width={FIGURE_SIZE.width}
        height={FIGURE_SIZE.height}
        sizes="(max-width: 800px) calc(100vw - 36px), 720px"
      />
    </figure>
  );
}

export default function DrawingScaleAppArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": DRAWING_SCALE_ARTICLE_URL },
    url: DRAWING_SCALE_ARTICLE_URL,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: AUTHOR,
    publisher: {
      "@type": "Organization",
      name: "ScaleInk",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: new URL("/scaleink-app-icon.jpeg", SITE_URL).toString(),
      },
    },
    image: [OG_IMAGE.url],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMBS.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <div className="article">
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <ol>
          {BREADCRUMBS.map((crumb) => (
            <li key={crumb.name} aria-current={"href" in crumb ? undefined : "page"}>
              {"href" in crumb ? <Link href={crumb.href}>{crumb.name}</Link> : crumb.name}
            </li>
          ))}
        </ol>
      </nav>

      <article>
        <header className="article-header">
          <h1>{TITLE}</h1>
          <div className="article-meta">
            <span className="article-author">{AUTHOR.name}</span>
            {datePublished ? (
              <span>
                公開日：<time dateTime={datePublished}>{formatDateJa(datePublished)}</time>
              </span>
            ) : null}
            {dateModified ? (
              <span>
                更新日：<time dateTime={dateModified}>{formatDateJa(dateModified)}</time>
              </span>
            ) : null}
          </div>
        </header>
        <p>通路幅や家具と壁の間隔など、図面には寸法が直接書かれていない箇所があります。PDFの縮尺が分からない場合、定規や三角スケールでは実寸は読み取れません。</p>
        <p>このような場合は、あらかじめ寸法が明記されている区間を基準にして測定するしかありません。手作業でも対応できますが、アプリを使えば基準を登録し、画面上の定規で効率よく確認できます。</p>

        <h2>PDF図面で寸法のない場所を測りにくい理由</h2>

        <h3>PDF図面は表示倍率によって画面上の長さが変わる</h3>
        <p>PDFは画面の拡大率に応じて描画上の長さが変わります。図面に「1/100」と記載されていても、当たり前ですが物理的な定規を画面に直接当てるだけでは実寸を割り出せません。</p>

        <h3>寸法測定には縮尺か既知寸法の基準が必要</h3>
        <p>実寸を求めるには、正確な縮尺か、長さが判明している区間の基準が必要です。図面に記載されている寸法を「既知寸法」として基準に活用します。</p>

        <h2>図面の縮尺を手作業で計算・調整する方法</h2>

        <h3>縮尺計算では既知寸法との比率から実寸を求める</h3>
        <p>既知寸法の区間と測りたい区間をそれぞれ定規で測り、その比率から算出します。測りたい区間が基準の半分の長さであれば、実寸も半分です。</p>
        <p>作業時はPDFの表示倍率を固定し、同じ縮尺の範囲同士を比較します。ただし、測定箇所が多い場合は毎回計算の手間が生じます。</p>

        <h3>PDF図面を物理定規や定規画像に合わせて測る</h3>
        <p>かなり力技ですが、iPadの画面に物理の定規を当てて、既知寸法が目盛りと一致するまでPDFを拡大・縮小する方法もあります。</p>
        <p>PCで作業する場合は、PowerPoint上で図面と定規画像を並べ、既知寸法に合うよう大きさを調整します。その際、図面や定規画像の縦横比は維持します。</p>
        <p>いずれも図面と定規の比率関係を保って測定します。PDFの表示倍率を変更した際や、どちらか一方のサイズを変えた場合は、再度合わせ直す必要があります。</p>

        <h2>アプリで縮尺を合わせて図面の距離を確認する方法</h2>

        <h3>寸法測定の基準となる2点と既知寸法を登録する</h3>
        <p>PDFの縮尺を設定できるアプリであれば、既知寸法の両端を指定して実寸の数値を入力することができます。</p>
        <p>その際基準にする寸法は、なるべく長く、両端の位置が明確な場所を選びます。区間が短くなると、指定位置のわずかなズレが結果に影響するためです。</p>

        <h3>PDF図面の別の既知寸法で登録した縮尺を確かめる</h3>
        <p>登録完了後は、別の既知寸法を計測して記載値と一致するか確認します。スキャン図面などの場合は、縦方向と横方向の双方で検証すると確実です。</p>
        <p>数値が合わない場合は、入力単位、指定した2点の位置、ページ全体や詳細図の縮尺定義を再確認します。画像自体が歪んで縦横比が変わっている場合は、一つの縮尺設定では補正できません。</p>

        <h3>寸法測定は登録した縮尺に合う画面上の定規で行う</h3>
        <p>画面上の定規を移動・回転させ、始点に目盛りを合わせて終点までの距離を読み取ります。画面の拡大・縮小に応じて目盛りが自動追従するアプリであれば、表示倍率を変えても合わせ直す必要はありません。</p>
        <p>図面に寸法が記載されている箇所は、その数値を優先します。読み取った値はあくまで図面レビュー時の確認値であり、設計原本や現場での実測値に代わるものではありません。</p>

        <h3>図面の縮尺を計算できるアプリ「ScaleInk」―PDF図面の確認から赤入れまで</h3>
        <p>
          <a href={SITE_URL}>ScaleInk（スケールインク）</a>
          は、iPad専用の図面レビューアプリです。PDFを読み込み、Scaleツールで既知寸法の2点から縮尺を登録します。
        </p>
        <ArticleFigure file="scale-calibration.webp" alt="ScaleInkでPDF図面の既知寸法の両端を指定し、実寸を入力して縮尺を登録する画面" />
        <p>登録後は、移動・回転できる画面上の定規で距離を読み取ります。縮尺設定はページ単位のため、同じページ内に縮尺の異なる詳細図がある場合は、一つの設定で同時に測定することはできません。</p>
        <ArticleFigure file="ruler-measurement.webp" alt="ScaleInkで登録した縮尺の定規をPDF図面の線に合わせ、距離を確認する画面" />
        <p>確認後はApple Pencilで手軽に赤入れを行え、テキストや図形も追加できます。検討内容ごとにレイヤーを分け、表示中の赤入れを合成したPDFとして書き出して共有もできます。</p>
        <p>なお、画面上の定規自体はPDFに保存されません。計測した距離を共有する場合は、手書きやテキストで書き加えます。</p>
        <AppStoreCta />

        <h2>まとめ</h2>
        <p>既知寸法が分かれば、縮尺の分からないPDFでも実寸距離を確認できます。複数箇所を繰り返し測定する場合は、基準を登録できるアプリを活用することで計算や位置合わせの手間を削減できます。</p>
        <p>確認から赤入れまでをiPadでスムーズに進めたい場合は、ScaleInkを使ってみてください。</p>
        <AppStoreCta />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
