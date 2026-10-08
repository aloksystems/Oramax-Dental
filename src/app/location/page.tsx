import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MapEmbed from "@/components/MapEmbed";
import CTABand from "@/components/CTABand";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Clinic Location — Juhu, Mumbai",
  description:
    "Find Oramax Dental & Maxillofacial Clinic at Sukh Shanti, N S Rd Number 8, Juhu, Mumbai 400049. Get directions, call +91 98239 00884.",
  alternates: { canonical: "/location" },
};

export default function LocationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <SectionHeading
        eyebrow="Location"
        title="Visit Our Clinic in Juhu"
        description="Conveniently located in Juhu, Mumbai — with directions and phone access from every device."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <h2 className="font-semibold text-ink-900">Address</h2>
            <address className="mt-2 text-[15px] not-italic leading-relaxed text-ink-700">
              {clinic.address.line1}
              <br />
              {clinic.address.line2}
              <br />
              {clinic.address.line3}
              <br />
              {clinic.address.city}, {clinic.address.state}{" "}
              {clinic.address.postalCode}
              <br />
              {clinic.address.country}
            </address>
            <div className="mt-5 flex flex-col gap-2">
              <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700">
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
              <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-ink-900">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {clinic.phoneDisplay}
              </a>
              <Link href="/appointment" className="inline-flex items-center justify-center rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-teal-700">
                Request an Appointment
              </Link>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-cream p-6 text-sm leading-relaxed text-ink-600">
            <h2 className="font-semibold text-ink-900">Finding us</h2>
            <p className="mt-2">
              The clinic is in the Juhu area of Mumbai, on N S Road Number 8
              near Vithal Nagar. Tap “Get Directions” to open the exact
              location in Google Maps on your phone.
            </p>
            <p className="mt-2 text-xs text-ink-500">
              Parking, landmark and public-transport details are not published
              here until verified — please call the clinic if you need help
              planning your visit.
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <MapEmbed />
          <p className="mt-3 text-xs text-ink-500">
            Map provided by Google Maps.{" "}
            <a href={clinic.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Open in Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <CTABand />
      </div>
    </div>
  );
}
