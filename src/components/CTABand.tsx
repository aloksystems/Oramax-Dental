import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="rounded-3xl bg-ink-900 px-6 py-10 text-center md:px-12 md:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
        Request a visit
      </p>
      <h2
        id="cta-heading"
        className="mx-auto mt-2 max-w-xl font-serif text-3xl text-white md:text-4xl"
      >
        Speak with the clinic before your visit
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-200 md:text-base">
        Share your concern and a preferred time. The clinic will contact you
        to confirm availability.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/appointment"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 sm:w-auto"
        >
          Request an Appointment
        </Link>
        <a
          href={clinic.phoneHref}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white sm:w-auto"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {clinic.phoneDisplay}
        </a>
        <a
          href={clinic.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white sm:w-auto"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </section>
  );
}
