import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleInk",
  description:
    "ScaleInk is an iPad app for marking up, measuring, and organizing PDF drawings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="site-header">
            <div className="header-inner">
              <Link href="/" className="brand">
                ScaleInk
              </Link>
            </div>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div className="footer-inner">
              <span>&copy; {new Date().getFullYear()} ScaleInk</span>
              <nav className="footer-links">
                <Link href="/support">Support</Link>
                <Link href="/privacy">Privacy</Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
