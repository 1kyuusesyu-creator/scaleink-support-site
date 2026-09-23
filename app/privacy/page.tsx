import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "ScaleInk Privacy Policy",
  description:
    "Privacy Policy for ScaleInk, an iPad PDF drawing and measurement app.",
  alternates: { canonical: new URL("/privacy", SITE_URL).toString() },
};

const SUPPORT_EMAIL = "scaleink.support@gmail.com";
const EFFECTIVE_DATE = "2026-09-23";

export default function PrivacyPage() {
  return (
    <div className="content" lang="en">
      <h1>ScaleInk Privacy Policy</h1>
      <p className="lede">
        ScaleInk is an iPad app for marking up, measuring, and organizing PDF
        drawings. This policy explains what information ScaleInk collects,
        what it does not collect, and how it is handled.
      </p>

      <h2>Information We Collect</h2>
      <p>
        ScaleInk does not require an account and does not collect personal
        information as part of normal app use. The only personal information
        we receive is what you choose to send us directly &mdash; for
        example, if you email us for support, we receive your email address
        and the contents of your message.
      </p>

      <h2>Information We Do Not Collect</h2>
      <ul>
        <li>No user accounts or sign-in of any kind</li>
        <li>No cloud sync of your files or data</li>
        <li>No collaboration or sharing features that transmit your data to other users</li>
        <li>No custom analytics or tracking SDKs in the ScaleInk app</li>
        <li>No advertising SDKs</li>
        <li>No upload of your PDFs or drawings to any server we operate</li>
      </ul>

      <h2>PDF and Drawing Data</h2>
      <p>
        The PDF files, drawings, measurements, and annotations you work with
        in ScaleInk are processed and stored on your device. ScaleInk does
        not transmit these files or their contents to any server we operate.
      </p>

      <h2>App Store &amp; StoreKit Purchases</h2>
      <p>
        ScaleInk is offered under a Free tier as well as Monthly, Annual, and
        Lifetime purchase options. Purchases and payments are processed
        entirely by Apple through the App Store. ScaleInk does not collect
        or receive payment details such as credit card information or your
        Apple Account&rsquo;s billing information &mdash; that is handled
        directly by Apple. To determine whether Pro features should be
        unlocked, ScaleInk checks the purchase status and entitlement
        information that Apple&rsquo;s StoreKit framework provides to the
        app on your device. ScaleInk does not operate its own payment
        processing system.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Other than Apple&rsquo;s App Store and StoreKit (used to process
        purchases as described above), the ScaleInk app does not integrate
        third-party analytics, advertising, or data-sharing services. We do
        not sell or share your personal information with third parties for
        advertising purposes.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you email us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, we receive
        the information needed to respond to your inquiry (such as your email
        address and message content). We use this information only to
        handle your request, and we do not use it for any other purpose
        except where required by law.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        ScaleInk is not designed for, or directed at, children, and is not
        intended for use by children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        If this Privacy Policy changes, the updated version will be posted
        on this page with a revised effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this Privacy Policy can be sent to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. See also the{" "}
        <Link href="/support">Support</Link> page.
      </p>

      <p className="muted">Effective date: {EFFECTIVE_DATE}</p>
    </div>
  );
}
