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
import { APP_STORE_URL_EN, EN_IMAGES, EN_TOP_URL } from "../../../lib/site-en";

// 英語版トップ。日本語版（app/(ja)/page.tsx）の構成・クラス名をそのまま使い、文言だけを英語にしている。
// 日本語版への副作用を避けるため、共通コンポーネント化はせずここに持つ。

function AppStoreButton({
  label = "Start free on the App Store",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      href={APP_STORE_URL_EN}
      className={`button ${light ? "button-light" : "button-dark"}`}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

// className: "shot-full" = 4:3 のスクリーンショットを切り抜かずに全体表示（/en/ 専用。globals.css の html[lang="en"] 側で定義）。
// "crop-projects" = Project Home を上部だけ見せる（日本語版と同じ共通ルール）。
function Screenshot({
  image,
  caption,
  className = "",
}: {
  image: { src: string; alt: string };
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`shot-wrap ${className}`}>
      <div className="shot">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 52vw" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const featureCards = [
  [PenTool, "Pen & marker", "Choose line width and color to write instructions and review notes right on the drawing."],
  [Shapes, "Text & shapes", "Use text, lines, rectangles, and more to capture what handwriting alone can't make clear."],
  [Ruler, "Ruler", "Show a ruler on screen and draw straight lines while keeping the angle."],
  [Layers3, "Reference PDF layer", "Overlay another PDF page as a reference PDF layer and compare the two while aligning their positions."],
  [FileText, "Multiple pages", "Work with multi-page PDF drawings in a single project, without worrying about page count."],
  [ArrowDown, "PDF export", "Export a PDF that reflects your review and share it as is."],
] as const;

const faqs = [
  ["Which devices does ScaleInk run on?", "ScaleInk is an iPad-only app. You can use Apple Pencil for writing on drawings and working with them."],
  ["Can I write directly on PDF drawings?", "Yes. Import a standard PDF drawing and add your review with the pen, marker, text, shapes, and more."],
  ["How do I measure dimensions on a PDF drawing?", "Register the scale using a known dimension shown on the drawing, then pick the two points you want to measure. Results are displayed based on the scale you registered. Both metric and feet-and-inches units are supported."],
  ["Can I measure and export PDFs with the free version?", "Yes. The free version includes scale registration, measurement, and PDF export. Exported PDFs have no watermark."],
  ["What limits does the free version have?", "You can create up to 3 projects in total, and up to 4 layers per page in total, including the original PDF background. There is no limit on the number of PDF pages."],
  ["Do I need an account?", "No ScaleInk account is required. Cloud sync and collaborative editing are not supported at this time."],
] as const;

function FeatureSection({
  id,
  eyebrow,
  title,
  children,
  image,
  caption,
  reverse = false,
  crop = false,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  image: { src: string; alt: string };
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
      <Screenshot image={image} caption={caption} className={crop ? "crop-projects" : "shot-full"} />
    </section>
  );
}

export default function HomePageEn() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">An iPad drawing review app for architecture, design, and construction</p>
          <h1>
            <span className="hero-line">Mark up and measure</span>{" "}
            <span className="hero-line">PDF drawings on your iPad.</span>
          </h1>
          <p className="lead">
            Review drawings, measure to scale, and organize your notes in layers, all in one app. With ScaleInk, open a drawing and mark it up, measure it, and sort out your notes right on the spot.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a href="#features" className="text-link">
              See what it can do <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <p className="microcopy">iPad only · Apple Pencil supported · No ScaleInk account required</p>
        </div>
        <Screenshot image={EN_IMAGES.redline} caption="Handwritten review notes on a drawing." className="shot-full" />
      </section>

      <section id="features" className="intro-feature container">
        <div className="intro-copy">
          <p className="eyebrow">REDLINE</p>
          <h2>Spot an issue?<br />Mark it up right on the drawing.</h2>
        </div>
        <div className="intro-body body-copy">
          <p>ScaleInk lets you write directly on PDF drawings with Apple Pencil. Besides the pen, marker, and eraser, you can leave instructions with text and shapes.</p>
          <p>No printing needed. Keep reviewing right on the drawing, as you look at it.</p>
        </div>
      </section>

      <div className="container feature-list">
        <FeatureSection
          id="measurement"
          eyebrow="MEASUREMENT"
          title="Set the scale and measure on the spot."
          image={EN_IMAGES.measurement}
          caption="Scale set from the known 2,400 mm dimension, then the 1,800 mm passage width measured."
        >
          <p>Register the scale from a known dimension on the drawing. Trace the span you want to measure, and the real-world length appears right on the drawing.</p>
          <p>No need to re-apply a paper scale. Check distances and dimensions directly on the PDF.</p>
          <p>Works with both metric and feet-and-inches units.</p>
        </FeatureSection>
        <FeatureSection
          id="layers"
          eyebrow="LAYERS"
          title="Keep review marks and wiring notes on separate layers."
          image={EN_IMAGES.layers}
          caption="Red review marks and blue wiring notes, managed on separate layers."
          reverse
        >
          <p>Organize your markup and equipment notes on separate layers. Toggle visibility to see only the notes you need.</p>
          <p>You can also rename, duplicate, adjust the opacity of, and lock layers.</p>
        </FeatureSection>
        <FeatureSection
          id="projects"
          eyebrow="PROJECTS"
          title="Keep your drawings organized by project."
          image={EN_IMAGES.projects}
          caption="Drawings listed as projects, one for each piece of work."
          crop
        >
          <p>Imported PDFs are saved by project. Floor plan studies, detail reviews, renovation jobs: organize your work by project while browsing thumbnails.</p>
          <p>Jump back to the drawing you need and pick up where your last review left off.</p>
        </FeatureSection>
      </div>

      <section className="tools-section container">
        <div className="section-heading">
          <p className="eyebrow">TOOLKIT</p>
          <h2>Everything drawing review needs,<br />in one app.</h2>
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
            <h2>Start free.<br />Upgrade to Pro when you need more.</h2>
            <p className="section-lead">
              The free version includes the basics: PDF markup, scale measurement, layer management, and PDF export.{" "}<br className="desktop-only" />
              When you want more projects or layers, you can upgrade to ScaleInk Pro.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <div><p className="plan-label">ScaleInk Free</p><div className="price price-text">Free to start</div></div>
              <ul>
                <li>Projects: up to 3</li><li>Layers: up to 4 per page in total</li><li>PDF pages: unlimited</li><li>Markup and handwriting</li><li>Text and shapes</li><li>Scale registration and measurement</li><li>PDF export with no watermark</li>
              </ul>
              <AppStoreButton label="Start free" />
            </article>
            <article className="price-card pro">
              <div className="pro-top">
                <div><p className="plan-label">ScaleInk Pro</p><p className="plan-note">No limits on projects or layers</p></div>
                <span className="annual-badge">Annual recommended</span>
              </div>
              <div className="plan-prices plan-names"><span>Monthly</span><span className="selected">Annual</span><span>Lifetime</span></div>
              <ul><li>Everything in Free</li><li>Unlimited projects</li><li>Unlimited layers</li><li>Create, move, and duplicate Stacks</li></ul>
              <div className="plan-boundary">
                <p className="plan-boundary-note">
                  <strong>Monthly / Annual:</strong> Use the ScaleInk Pro features. Ongoing online services may be added in the future.
                </p>
                <p className="plan-boundary-note">
                  <strong>Lifetime:</strong> One purchase gives you lasting access to the ScaleInk Pro features provided on your device, with no expiration.
                </p>
                {/* /purchase/ は日本語のみ。別 root layout のページなので <a> で通常遷移させる。 */}
                <a href="/purchase/" className="plan-boundary-link">Plan and purchase terms (Japanese)</a>
              </div>
              <AppStoreButton label="View plans on the App Store" />
            </article>
          </div>
          <p className="price-footnote">The Lifetime plan supports Family Sharing. The layer limit includes the original PDF background. Prices are shown in your local currency on the App Store.</p>
        </div>
      </section>

      <section id="faq" className="faq-section container">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Frequently asked questions</h2></div>
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
          <div><p className="eyebrow">SCALEINK</p><h2>Your next drawing review,<br />from your iPad.</h2><p>Import a PDF, then mark it up, measure it, and organize it.<br />ScaleInk is free to start.</p></div>
          <div className="final-action"><AppStoreButton light /><span>iPad only · Apple Pencil supported</span></div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ScaleInk",
            applicationCategory: "BusinessApplication",
            operatingSystem: "iPadOS",
            description: "ScaleInk is an iPad app to mark up PDF drawings with Apple Pencil, set the scale to measure real dimensions, and organize notes in layers.",
            inLanguage: "en",
            url: EN_TOP_URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "en",
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
