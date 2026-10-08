import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { clinic, doctor } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About Dr. Khushal Gangwani",
  description:
    "About Dr. Khushal Gangwani, Oral and Maxillofacial Surgeon at Oramax Dental & Maxillofacial Clinic, Juhu Mumbai.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
        About
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink-900 md:text-5xl">
        {doctor.name}
      </h1>
      <p className="mt-2 text-lg text-ink-600">
        {doctor.specialty} · {doctor.hindiName}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionHeading title="Professional introduction" />
          <div className="mt-4 space-y-4 leading-relaxed text-ink-600">
            <p>{doctor.shortIntro}</p>
            <p>
              {clinic.name} is located in Juhu, Mumbai, and provides
              consultation and surgical planning for conditions relating to
              the teeth, jaws and associated structures. Each patient is
              examined individually, and treatment options — including the
              option of no immediate treatment where appropriate — are
              discussed openly.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>
              <strong>Qualifications &amp; detailed profile:</strong>{" "}
              {doctor.profileStatus} No degrees, affiliations, awards or
              experience details are published here until they are verified.
            </p>
          </div>

          <h2 className="mt-10 font-serif text-2xl text-ink-900">
            Approach to care
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink-600">
            <li>Unrushed first consultations with time for questions.</li>
            <li>Explanations in plain language, without pressure.</li>
            <li>Individualized planning based on examination and imaging review.</li>
            <li>Clear guidance on follow-up and healing after any procedure.</li>
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-ink-100 bg-white p-6 shadow-card" aria-label="Practice details">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Practice details
          </h2>
          <dl className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
            <div><dt className="font-semibold text-ink-900">Doctor</dt><dd>{doctor.name}</dd></div>
            <div><dt className="font-semibold text-ink-900">Specialty</dt><dd>{doctor.specialty}</dd></div>
            <div><dt className="font-semibold text-ink-900">Clinic</dt><dd>{clinic.name}</dd></div>
            <div>
              <dt className="font-semibold text-ink-900">Address</dt>
              <dd>{clinic.fullAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Phone</dt>
              <dd><a href={clinic.phoneHref} className="font-semibold text-teal-700 hover:underline">{clinic.phoneDisplay}</a></dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-col gap-2">
            <Link href="/appointment" className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white">
              Request an Appointment
            </Link>
            <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <CTABand />
      </div>
    </div>
  );
}
