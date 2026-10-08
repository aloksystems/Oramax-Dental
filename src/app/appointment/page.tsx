import type { Metadata } from "next";
import { Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AppointmentForm from "@/components/AppointmentForm";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Request an appointment at Oramax Dental & Maxillofacial Clinic, Juhu Mumbai. Share your details and the clinic will confirm availability.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <SectionHeading
            eyebrow="Appointment"
            title="Request an Appointment"
            description="Fill in the form and the clinic will contact you to confirm availability. For a quicker response, call directly."
          />
          <a
            href={clinic.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phoneDisplay}
          </a>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink-600">
            <p><strong className="text-ink-900">1.</strong> Share your name, phone number and reason for visit.</p>
            <p><strong className="text-ink-900">2.</strong> Suggest a preferred date and time.</p>
            <p><strong className="text-ink-900">3.</strong> The clinic calls you back to confirm.</p>
          </div>
          <p className="mt-6 rounded-xl bg-cream px-5 py-4 text-xs leading-relaxed text-ink-500">
            Online requests are requests only — your slot is confirmed when
            the clinic speaks with you. In an urgent situation, please seek
            appropriate emergency care rather than waiting for a callback.
          </p>
        </div>
        <div className="md:col-span-3">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
