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

const TITLE = "図面の縮尺を計算できるアプリとは？PDFを実寸で測る方法";
const DESCRIPTION =
  "図面の縮尺計算に使うアプリを用途別に整理。PDF図面の既知寸法から縮尺を登録し、画面上で距離を確認する方法と、ScaleInkで赤入れまで行う手順を紹介します。";
const OG_DESCRIPTION =
  "PDF図面の既知寸法から縮尺を合わせ、画面上で距離を確認する方法を解説します。ScaleInkで縮尺を登録し、赤入れしたPDFを書き出す手順も紹介します。";

const TOOL_RANGER_URL = "https://ple-cre.jp/toolranger/scale/";

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
    description: OG_DESCRIPTION,
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
        <p>PDF図面で寸法記載のない箇所の距離を確認したい場合、単に数値を入力して換算するだけの計算アプリでは対応できません。必要になるのは、図面データ上の既知寸法から縮尺を設定し、画面上で直接距離を読み取れるアプリです。</p>
        <p>1回限りの数値換算であれば電卓で十分ですが、通路幅や取り合いの余裕を繰り返し測るなら、基準となる縮尺を登録して画面上で距離を測定できる環境が適しています。ここでは用途の整理からPDFを計測する際の注意点、実際にiPadアプリで縮尺を合わせて赤入れまで進める手順を整理します。</p>

        <h2>図面の縮尺計算に使うアプリは目的で異なる</h2>

        <h3>縮尺計算だけを行う電卓・Webツール・計算アプリ</h3>
        <p>図面上ですでに計測済みの長さがあり、実寸値だけを求めたい場合は数値の換算処理を行います。計算の基本式は次のとおりです。</p>
        <ul>
          <li>実寸＝図面上の長さ×縮尺の分母</li>
          <li>図面上の長さ＝実寸÷縮尺の分母</li>
          <li>縮尺＝図面上の長さ÷実寸</li>
        </ul>
        <p>たとえば、1/100の図面上で測った24mmの実寸は 24mm × 100 = 2,400mm となります。この実寸2,400mmを1/50で描くなら 2,400mm ÷ 50 = 48mm、2,400mmの実寸が図面上24mmで表現されているなら 24mm ÷ 2,400mm = 1/100 です。実寸がメートル表記で与えられている場合は、あらかじめミリメートル単位に揃えて計算します。</p>
        <div className="article-table-wrap">
          <table aria-label="縮尺早見表">
            <thead>
              <tr>
                <th scope="col">縮尺</th>
                <th scope="col">図面上の10mmに対応する実寸</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1/50</th>
                <td>500mm（0.5m）</td>
              </tr>
              <tr>
                <th scope="row">1/100</th>
                <td>1,000mm（1m）</td>
              </tr>
              <tr>
                <th scope="row">1/200</th>
                <td>2,000mm（2m）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          単発の数値換算であれば、標準の電卓や
          <a href={TOOL_RANGER_URL} target="_blank" rel="noopener noreferrer">ツールレンジャーの縮尺計算ツール</a>
          のようなWeb計算機で事足ります。これらは数値を変換するツールであり、PDFを開いて図面上の対象位置を直接測定する用途には使えません。
        </p>

        <h3>寸法測定に使う画面上の縮尺定規アプリ</h3>
        <p>画面上に様々な縮尺の目盛りを表示し、画面を直接図面に当てて長さを読み取るタイプのアプリがあります（例：「定規 - スケール定規」など）。</p>
        <p>紙の図面に端末を当てて計測する場合、表示される目盛りが実測値と一致しているか実物定規での校正が必要です。また、紙図面がA3からA4へ縮小印刷されている場合、図面枠に「1/100」と記載されていても実際の縮尺は異なっています。PDFを端末内に取り込んで計測したい場合は、目盛りを表示するだけでなく、PDFデータそのものに対して縮尺を割り当てられる機能が前提となります。</p>

        <h3>PDF図面を読み込み、縮尺を合わせて測るアプリ</h3>
        <p>PDF上で未記載の距離を確認するには、図面内の既知寸法（例：特定の2点間が実寸2,400mm）を指定してアプリ側に縮尺を登録します。一度この基準を設定すれば、画面の表示倍率に左右されず、任意の区間の距離を画面上で確認できます。</p>
        <p>留意点として、図面上に「2,400」などの寸法線が明記されている箇所は、記載された数値をそのまま読み取ります。画面上で線を測って距離を割り出す操作は、寸法線のない部分の追記や納まりの検討時に限られます。測定結果と記載寸法に乖離がある場合も、測定値で元の数値を書き換えるのではなく、図面側の不整合や変形を疑う必要があります。</p>

        <h2>PDF図面をアプリで測るときに確認すること</h2>

        <h3>PDF図面や画像をそのまま読み込めるか</h3>
        <p>受領したファイルがベクトルデータとしてのPDFか、紙図面をスキャンした画像PDFかによって扱いが変わります。画像をPDF化している場合や画像を貼り付けた図面では、線の潰れや画像の歪みが計測精度に影響します。</p>
        <p>図面枠にある「1/100」の表記は、現在のデジタルデータでも正しいとは限りません。A3図面がA4に縮小印刷された後にスキャンされた場合や、PDF書き出し時に「用紙に合わせる」などで伸縮された場合、文字情報としての「1/100」だけが残り、線の実寸比率は崩れます。一方で、余白領域のみの修正であれば図面要素の長さ自体は保持されます。</p>
        <p>なお、PDF閲覧ソフトの「100%表示」はディスプレイ上の表示比率であり、図面の1/100縮尺とは無関係です。100%表示だからといって縮尺が正確に保持されているわけではありません。</p>

        <h3>寸法測定の基準を既知寸法から登録できるか</h3>
        <p>作成過程で縦横比や倍率が変化した可能性がある図面では、既知の寸法線を利用した縮尺登録処理が不可欠です。図面上の2点間を指定し、対応する実寸値を入力することで、印刷・スキャン時の倍率変化に影響されず現在のデータに合わせた縮尺を設定できます。</p>
        <p>基準区間の指定には、建具などの短いスパンではなく、両端の位置が明確な通り芯間など比較的長い区間を選びます。計測位置のわずかなズレが全体に与える誤差の比率は、基準区間が短いほど大きくなるためです。</p>

        <h3>PDF図面のページごとに縮尺を扱えるか</h3>
        <p>複数ページのPDFでは、ページごとに縮尺が異なっているケースが一般的です。1ページ目の平面図が1/100、2ページ目の展開図が1/30であれば、各ページで個別に縮尺を登録する必要があります。</p>
        <p>同じ1ページの中に平面図と部分詳細図が混在している場合は、ページ共通の縮尺設定だけでは部分詳細図の計測に対応できません。測定対象の領域が、基準設定した図面と同じ縮尺領域にあるかを個別に確認してください。</p>
        <p>なお、後述するScaleInkは縮尺を「ページ単位」で保持する仕様です。同一ページ内に配された異なる縮尺の図面を、単一の縮尺設定でまとめて測定することはできません。</p>

        <h3>寸法測定のあとに赤入れやPDF書き出しができるか</h3>
        <p>距離を確認した箇所に対し、注釈や納まりの検討線を残す作業が発生します。画面上で手書き・テキスト・図形を追記でき、それらをレイヤーで整理できるかを確認します。</p>
        <p>書き出し機能においては、追記した注釈がPDFの描画要素として保持されるかが重要です。画面上に表示される計測用の定規と、ファイルに残る赤入れデータは別物です。画面で読み取った距離や線が自動的に注釈オブジェクトとして保存されるわけではないため、共有に必要な数値や指示文は明示的に書き込む必要があります。</p>

        <h2>アプリで縮尺を合わせて図面を測る手順</h2>

        <h3>PDF図面で基準にする既知寸法を探す</h3>
        <p>アプリにPDFを読み込んだら、まずは縮尺の基準として使う既知の寸法線を探します。通り芯の交点や構造体の基準線など、始点と終点が明確に特定できる箇所が適しています。</p>
        <p>「2,400」などの寸法値があっても、それが壁の内法寸法なのか、壁芯間の寸法なのかで基準点の取り方は変わります。基準にできる明確な寸法表記がない場合は、感覚で位置を指定して登録せず、元の設計データや寸法記載のある図面を入手してください。</p>

        <h3>寸法測定の2点を指定して実寸を入力する</h3>
        <p>基準区間の始点と終点を画面上でタップ指定し、対応する実寸値を入力します。ここで入力するのは、図面データ上の距離と実測値の対応関係です。</p>
        <p>入力時の単位確認には注意してください。図面表記が「2,400」（mm）の場合、2,400mm = 240cm = 2.4m となります。メートル入力欄に誤って「2400」と入力すると1,000倍のスケールで設定されます。端点の位置が曖昧にならないよう、画面を十分拡大して指定します。</p>

        <h3>寸法測定の前に登録した縮尺を別の区間で確かめる</h3>
        <p>縮尺を登録したら、計測に入る前に他の既知寸法を測って検証します。たとえば2,400mmの区間で設定した場合、別の3,600mmの寸法線を測り、正確な値が表示されるか確認します。スキャンされた図面では、縦方向と横方向の両方で検証してください。</p>
        <p>数値が一致しない場合は、単位選択、指定位置のズレ、ページの選択間違い、部分詳細図エリアでの測定などを疑います。画像の取り込み時に縦横比が歪んでいる場合、単一比率での縮尺設定では誤差を吸収できません。</p>
        <p>アプリで取得する計測値は図面レビュー時の補足的な確認値であり、設計図書の原本情報や現場での実測値に代わるものではありません。</p>

        <h3>図面の縮尺を計算して測るアプリ「ScaleInk」―PDF図面の確認から赤入れまで</h3>
        <p>
          <a href={SITE_URL}>ScaleInk（スケールインク）</a>
          は、iPad専用の図面レビューアプリです。PDFを読み込み、既知寸法からページの縮尺を登録したあと、画面上の定規で距離を読みます。
        </p>
        <p>操作手順：</p>
        <ol>
          <li>iPadに保存したPDF図面をScaleInkへ読み込み、確認したいページを開きます。</li>
          <li>Scaleツールを選び、寸法が分かっている区間の2点を指定します。</li>
          <li>
            記載された実寸を、入力欄の単位に合わせて入力し、縮尺を登録します。
            <ArticleFigure
              file="scale-calibration.webp"
              alt="ScaleInkでPDF図面の既知寸法の両端を指定し、実寸を入力して縮尺を登録する画面"
            />
          </li>
          <li>画面上に定規を表示し、別の既知寸法で設定を確かめます。</li>
          <li>
            定規を移動・回転して目的の線へ合わせ、目盛りの基準位置を区間の始点に合わせて、終点までの距離を読みます。
            <ArticleFigure
              file="ruler-measurement.webp"
              alt="ScaleInkで登録した縮尺の定規をPDF図面の線に合わせ、距離を確認する画面"
            />
          </li>
          <li>確認したい箇所や変更案を、Apple Pencilで赤入れします。文字を整えて残したい箇所にはテキスト、範囲を示したい箇所には図形を使えます。</li>
          <li>検討案と確認事項をレイヤーで分け、共有する内容を表示します。</li>
          <li>表示中の赤入れやレイヤーを合成したPDFを書き出し、共有します。</li>
        </ol>
        <p>定規は画面上の補助ツールの役割を果たすため、PDF出力時には書き出されません。また、選択した2点間の計測値や計測線を注釈データとして自動保存する仕様ではありません。距離の情報を共有する場合は、読み取った数値と確認値である旨を、手書きやテキストオブジェクトとして直接追記します。</p>
        <p>
          PDFを見ながら距離を確認し、そのまま検討内容を残したい場合は、
          <AppStoreButton />
          から操作画面を確認できます。
        </p>

        <h2>まとめ</h2>
        <p>図面の縮尺に関するツールは、単なる数値換算、画面上の定規表示、PDFを取り込んで縮尺を設定するタイプの3つに分かれます。PDF上で寸法の書いていない場所を計測する際は、基準となる既知寸法から縮尺を設定し、別の区間で確認を行ったうえで読み取る手順をとります。</p>
        <p>数値だけの換算であれば既存の電卓処理で問題ありません。図面内の記載寸法がある場所は元の記載を最優先とし、データの拡大縮小やページ・詳細図ごとの縮尺違いに注意して扱います。</p>
        <p>図面上の距離の読み取りから指示の書き込みまでをiPad上で完結させたい場合は、ScaleInkの操作画面をApp Storeで確認することで実際の画面イメージを把握できます。</p>
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
