import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { clinic, doctor } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Contact the Clinic",
  description:
    "Contact Oramax Dental & Maxillofacial Clinic, Juhu Mumbai — address, phone +91 98239 00884, directions and contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Contact the Clinic"
        description={`${doctor.name}, ${doctor.specialty} — ${clinic.name}, Juhu Mumbai.`}
      />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <h2 className="font-semibold text-ink-900">Clinic details</h2>
            <address className="mt-2 text-sm not-italic leading-relaxed text-ink-600">
              {clinic.fullAddress}
            </address>
            <p className="mt-3 text-sm">
              <a href={clinic.phoneHref} className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800">
                <Phone className="h-4 w-4" aria-hidden="true" /> {clinic.phoneDisplay}
              </a>
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
              <Link href="/appointment" className="inline-flex items-center justify-center rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900">
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <MapEmbed />
          </div>
        </div>
        <div>
          <ContactForm />
          <p className="mt-4 text-xs leading-relaxed text-ink-500">
            Details you share are used only to respond to your enquiry. See
            our <Link href="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
