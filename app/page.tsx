import Link from "next/link";

export default function HomePage() {
  return (
    <div className="content">
      <h1>ScaleInk</h1>
      <p className="lede">
        ScaleInk is an iPad app for marking up, measuring, and organizing PDF
        drawings.
      </p>
      <p>
        Visit the <Link href="/support">Support</Link> page for help and
        contact information, or read the{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </div>
  );
}
