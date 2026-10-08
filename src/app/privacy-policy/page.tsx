import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Oramax Dental & Maxillofacial Clinic handles contact and appointment information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Legal</p>
      <h1 className="mt-2 font-serif text-4xl text-ink-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-500">Last updated: October 2026</p>
      <div className="mt-8 space-y-6 leading-relaxed text-ink-600">
        <section>
          <h2 className="font-serif text-xl text-ink-900">What we collect</h2>
          <p className="mt-2 text-[15px]">
            When you use the contact or appointment-request forms, we receive
            the details you enter — such as your name, phone number, email
            address (if provided), preferred date/time and your message.
            Currently, appointment requests are processed on your device and
            shown as a confirmation message; they are not sent to a server
            until an email/appointment backend is connected.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-ink-900">How we use it</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px]">
            <li>To respond to your enquiry or appointment request.</li>
            <li>To contact you about availability and your visit.</li>
            <li>We do not sell your personal information.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl text-ink-900">Cookies &amp; analytics</h2>
          <p className="mt-2 text-[15px]">
            This website does not currently use advertising cookies. If
            privacy-friendly analytics are added in future, they will be
            configured without collecting sensitive health information, and
            form contents will never be sent to analytics platforms.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-ink-900">Third-party services</h2>
          <p className="mt-2 text-[15px]">
            Tapping “Get Directions” or viewing the embedded map loads Google
            Maps, which is governed by Google&apos;s privacy policy. Phone
            links use your device&apos;s dialler.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-ink-900">Your choices</h2>
          <p className="mt-2 text-[15px]">
            You may contact the clinic by phone instead of using the forms.
            To ask about information you have shared, call{" "}
            <a href="tel:+919823900884" className="font-semibold text-teal-700 hover:underline">
              +91 98239 00884
            </a>
            .
          </p>
        </section>
        <p className="text-sm">
          Related: <Link href="/disclaimer" className="font-semibold text-teal-700 hover:underline">Medical disclaimer</Link>
        </p>
      </div>
    </article>
  );
}
