import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
        Oramax Dental &amp; Maxillofacial Clinic
      </p>
      <h1 className="mt-3 font-serif text-5xl text-ink-900">Page not found</h1>
      <p className="mt-4 leading-relaxed text-ink-600">
        The page you are looking for may have moved or no longer exists. You
        can return home, explore services, or contact the clinic directly.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row">
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white">
          Back to Home
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-900">
          Contact the Clinic
        </Link>
      </div>
    </div>
  );
}
