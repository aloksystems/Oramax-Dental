import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import CTABand from "@/components/CTABand";
import { services, clinic, serviceDisclaimer } from "@/data/clinic";
import { serviceDetails } from "@/data/serviceDetails";

export function generateStaticParams() {
  return services.filter((s) => s.enabled).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug as keyof typeof serviceDetails];
  if (!detail) return { title: "Service not found" };
  return {
    title: detail.title,
    description: detail.description,
    alternates: { canonical: `/services/${detail.slug}` },
    openGraph: {
      title: detail.title,
      description: detail.description,
      url: `/services/${detail.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug as keyof typeof serviceDetails];
  if (!detail) notFound();

  const others = services.filter((s) => s.enabled && s.slug !== detail.slug).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const medicalJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: detail.name,
    procedureType: "SurgicalProcedure",
    description: detail.intro,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalJsonLd) }} />

      <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All services
      </Link>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
        {clinic.name} · Juhu, Mumbai
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink-900 md:text-5xl">
        {detail.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
        {detail.intro}
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="space-y-10 md:col-span-2">
          <section aria-labelledby={`${detail.slug}-what`}>
            <h2 id={`${detail.slug}-what`} className="font-serif text-2xl text-ink-900">
              What is it?
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-ink-600">
              {detail.whatIs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby={`${detail.slug}-when`}>
            <h2 id={`${detail.slug}-when`} className="font-serif text-2xl text-ink-900">
              When may it be recommended?
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-600">
              {detail.whenRecommended.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${detail.slug}-expect`}>
            <h2 id={`${detail.slug}-expect`} className="font-serif text-2xl text-ink-900">
              What to expect
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-ink-600">
              {detail.whatToExpect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section aria-labelledby={`${detail.slug}-faq`}>
            <h2 id={`${detail.slug}-faq`} className="font-serif text-2xl text-ink-900">
              Common questions
            </h2>
            <div className="mt-3 divide-y divide-ink-100 rounded-2xl border border-ink-100">
              {detail.faqs.map((f) => (
                <div key={f.q} className="px-5 py-4">
                  <h3 className="font-semibold text-ink-900">{f.q}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby={`${detail.slug}-consult`} className="rounded-2xl bg-cream p-6 md:p-8">
            <h2 id={`${detail.slug}-consult`} className="font-serif text-2xl text-ink-900">
              Consultation
            </h2>
            <p className="mt-2 leading-relaxed text-ink-600">
              Only an in-person examination can determine what is right for
              you. Request a consultation to discuss your symptoms, review
              your imaging and receive individualized advice.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link href="/appointment" className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">
                Request an Appointment
              </Link>
              <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900">
                <Phone className="h-4 w-4" aria-hidden="true" /> {clinic.phoneDisplay}
              </a>
            </div>
          </section>

          <p className="rounded-xl border border-ink-100 bg-white px-5 py-4 text-xs leading-relaxed text-ink-500">
            <strong className="text-ink-700">Please note:</strong> {serviceDisclaimer}
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
              Other services
            </h2>
            <ul className="mt-3 space-y-1">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream hover:text-ink-900">
                    {o.name}
                    <ArrowRight className="h-4 w-4 text-ink-300 group-hover:text-teal-600" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ink-900 p-6 text-white">
            <h2 className="font-serif text-xl">Not sure where to start?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-200">
              Book a surgical consultation — the first step is a conversation,
              not a procedure.
            </p>
            <Link href="/services/surgical-consultation" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-200 hover:text-white">
              About consultations <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <CTABand />
      </div>
    </div>
  );
}
