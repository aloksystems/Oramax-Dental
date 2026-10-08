import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Website content is for general education only and does not replace professional medical advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Legal</p>
      <h1 className="mt-2 font-serif text-4xl text-ink-900">Medical Disclaimer</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-ink-600">
        <p>
          Content on this website is for general educational purposes only. It
          is not medical advice, and it does not create a doctor–patient
          relationship.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Do not use website information for self-diagnosis or self-treatment.</li>
          <li>Individual treatment decisions require an in-person professional consultation.</li>
          <li>Service descriptions are general information, not promises of outcome or availability.</li>
          <li>In an urgent medical situation, seek appropriate emergency medical care promptly.</li>
        </ul>
        <p>
          If you have questions about a dental or maxillofacial concern,
          please <a href="/appointment" className="font-semibold text-teal-700 hover:underline">request a consultation</a> or{" "}
          <a href="tel:+919823900884" className="font-semibold text-teal-700 hover:underline">call the clinic</a>.
        </p>
      </div>
    </article>
  );
}
