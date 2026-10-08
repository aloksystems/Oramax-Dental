import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { services } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Oral & Maxillofacial Services in Juhu, Mumbai",
  description:
    "Information about oral surgery, maxillofacial surgery, wisdom teeth, tooth extraction, dental implants and surgical consultation at Oramax Clinic, Juhu Mumbai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <SectionHeading
        eyebrow="Services"
        title="Oral & Maxillofacial Services"
        description="Educational overviews of areas of care. Suitability for any procedure can only be decided after an in-person consultation."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.filter((s) => s.enabled).map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-500">
        These categories describe general areas of information — not a
        promise that every procedure listed is offered in every case. Website
        content is educational and does not replace professional medical
        advice. See our <a href="/disclaimer" className="underline underline-offset-2">medical disclaimer</a>.
      </p>
      <div className="mt-12">
        <CTABand />
      </div>
    </div>
  );
}
