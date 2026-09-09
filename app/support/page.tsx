import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ScaleInk Support",
  description:
    "ScaleInk support, troubleshooting, feedback and contact information.",
};

const SUPPORT_EMAIL = "scaleink.support@gmail.com";

export default function SupportPage() {
  return (
    <div className="content">
      <h1>ScaleInk Support</h1>
      <p className="lede">
        ScaleInk is an iPad app for marking up, measuring, and organizing PDF
        drawings. This page explains how to reach us for help, report
        problems, suggest features, or ask about purchases.
      </p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Contact Us</h2>
        <p>
          For any question about ScaleInk, email us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We read
          every message and aim to respond as quickly as we can.
        </p>
      </div>

      <h2>Report a Bug</h2>
      <p>
        If something isn&rsquo;t working as expected, please email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=ScaleInk%20Bug%20Report`}>
          {SUPPORT_EMAIL}
        </a>
        . Including your iPad model, iPadOS version, ScaleInk version, and the
        steps that led to the issue helps us fix it faster.
      </p>

      <h2>Feature Requests</h2>
      <p>
        Have an idea that would make ScaleInk more useful for your workflow?
        We&rsquo;d like to hear it &mdash; email{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=ScaleInk%20Feature%20Request`}
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <h2>Purchases &amp; Subscriptions</h2>
      <p>
        Purchases and payments are processed through Apple&rsquo;s App
        Store. ScaleInk does not collect payment details such as credit
        card information. To provide Pro features, ScaleInk checks the
        purchase status and entitlement information supplied by
        Apple&rsquo;s StoreKit, to the extent necessary to unlock what
        you&rsquo;ve purchased.
      </p>
      <p>
        If you have a question about a charge, a subscription, or a purchase
        you made, you&rsquo;re welcome to email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=ScaleInk%20Purchase%20Question`}>
          {SUPPORT_EMAIL}
        </a>{" "}
        and we&rsquo;ll help however we can. Refunds are issued by Apple, so
        refund requests must be submitted through your Apple ID purchase
        history or Apple Support.
      </p>

      <h2>Privacy</h2>
      <p>
        For details on what information ScaleInk collects (and does not
        collect), see the <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </div>
  );
}
