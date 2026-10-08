import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  MessagesSquare,
  ClipboardList,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import MapEmbed from "@/components/MapEmbed";
import { clinic, doctor, services } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Dr. Khushal Gangwani | Oramax Dental & Maxillofacial Clinic, Juhu Mumbai",
  description:
    "Oramax Dental & Maxillofacial Clinic in Juhu, Mumbai — oral and maxillofacial care by Dr. Khushal Gangwani. Request an appointment, call +91 98239 00884, or get directions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Specialized Oral & Maxillofacial Care in Juhu, Mumbai",
    description:
      "Patient-focused oral and maxillofacial care by Dr. Khushal Gangwani at Oramax Dental & Maxillofacial Clinic, Juhu.",
    url: "/",
  },
};

const values = [
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "Your condition and options are explained in plain language before any decision is made.",
  },
  {
    icon: ClipboardList,
    title: "Individualized planning",
    text: "Treatment planning is based on your examination and needs — not a one-size-fits-all approach.",
  },
  {
    icon: Stethoscope,
    title: "Specialist focus",
    text: "Care centred on oral and maxillofacial conditions, from consultation through follow-up.",
  },
  {
    icon: HeartHandshake,
    title: "Patient comfort",
    text: "A calm, unhurried clinic experience with attention to comfort at every step.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-2 md:items-center md:pb-20 md:pt-16">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              {clinic.name}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.12] text-ink-900 md:text-5xl">
              Specialized Oral &amp; Maxillofacial Care in Juhu, Mumbai
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-600 md:text-lg">
              Professional oral and maxillofacial care with a
              patient-focused approach in Juhu, Mumbai.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                Request an Appointment
              </Link>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {clinic.phoneDisplay}
              </a>
              <a
                href={clinic.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-500">
              <ShieldCheck className="h-4 w-4 text-teal-700" aria-hidden="true" />
              {doctor.name} · {doctor.specialty}
            </p>
          </div>

          {/* Trust-first visual panel (no stock doctor imagery) */}
          <div className="reveal reveal-delay-1">
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-card md:p-9">
              <p className="font-serif text-2xl text-ink-900">
                {doctor.name}
              </p>
              <p className="mt-1 text-sm font-medium text-teal-700">
                {doctor.specialty}
              </p>
              <p className="mt-1 text-sm text-ink-500">
                {doctor.hindiName} · {clinic.shortAddress}
              </p>
              <div className="my-6 h-px bg-ink-100" aria-hidden="true" />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-ink-900">Clinic</dt>
                  <dd className="mt-0.5 text-ink-600">{clinic.name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-900">Address</dt>
                  <dd className="mt-0.5 leading-relaxed text-ink-600">
                    {clinic.address.line1} {clinic.address.line2}{" "}
                    {clinic.address.line3} {clinic.address.city},{" "}
                    {clinic.address.state} {clinic.address.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-900">Phone</dt>
                  <dd className="mt-0.5">
                    <a
                      href={clinic.phoneHref}
                      className="font-semibold text-teal-700 underline-offset-2 hover:underline"
                    >
                      {clinic.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                View Full Profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-3 text-center text-xs text-ink-400">
              Photo of the doctor and clinic coming soon — real imagery only.
            </p>
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section aria-labelledby="doctor-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <SectionHeading
              eyebrow="The doctor"
              title="Meet Dr. Khushal Gangwani"
            />
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-600">
              {doctor.shortIntro}
            </p>
            <div className="mt-4 rounded-xl border border-ink-100 bg-cream px-5 py-4 text-sm leading-relaxed text-ink-600">
              <p className="font-medium text-ink-800">About this profile</p>
              <p className="mt-1">{doctor.profileStatus}</p>
            </div>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:border-teal-600 hover:text-teal-700"
            >
              View Full Profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <aside className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card" aria-label="At a glance">
            <h3 id="doctor-heading" className="text-sm font-semibold uppercase tracking-wider text-ink-500">
              At a glance
            </h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
              <li><strong className="text-ink-900">Name:</strong> {doctor.name}</li>
              <li><strong className="text-ink-900">Specialty:</strong> {doctor.specialty}</li>
              <li><strong className="text-ink-900">Practice:</strong> {clinic.name}</li>
              <li><strong className="text-ink-900">Area:</strong> Juhu, Mumbai</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="services-heading" className="bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Services"
              title="Oral & Maxillofacial Services"
              description="General information about areas of care. Your suitability for any procedure can only be determined after an in-person consultation."
            />
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
              All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.filter((s) => s.enabled).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink-500">
            These categories describe general areas of information — not a
            promise that every procedure listed is offered in every case.
            Please consult the clinic for advice about your situation.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section aria-labelledby="why-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Patient-centred care"
          title="Why patients contact our clinic"
          align="center"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <v.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS — placeholder, no fabricated reviews */}
      <section aria-labelledby="reviews-heading" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:pb-20">
        <div className="rounded-3xl border border-dashed border-ink-200 bg-cream px-6 py-10 text-center md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Patient feedback
          </p>
          <h2 id="reviews-heading" className="mt-2 font-serif text-2xl text-ink-900 md:text-3xl">
            What Patients Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-600">
            Verified patient reviews will appear here once they are approved
            for publication. Reviews shown here will always be attributed to
            their source and never edited or manufactured.
          </p>
          <a
            href={clinic.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            View clinic on Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section aria-labelledby="visit-heading" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:pb-20">
        <SectionHeading
          eyebrow="Location"
          title="Visit Our Clinic in Juhu"
        />
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <address className="text-[15px] not-italic leading-relaxed text-ink-700">
              {clinic.address.line1}
              <br />
              {clinic.address.line2}
              <br />
              {clinic.address.line3}
              <br />
              {clinic.address.city}, {clinic.address.state}{" "}
              {clinic.address.postalCode}, {clinic.address.country}
            </address>
            <div className="mt-5 flex flex-col gap-2">
              <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
              <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-900">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {clinic.phoneDisplay}
              </a>
              <Link href="/location" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                More location details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <CTABand />
      </div>
    </>
  );
}
