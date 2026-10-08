import Link from "next/link";
import {
  Stethoscope,
  ScanFace,
  Activity,
  PlusCircle,
  Anchor,
  MessagesSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/clinic";

const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "scan-face": ScanFace,
  activity: Activity,
  "plus-circle": PlusCircle,
  anchor: Anchor,
  messages: MessagesSquare,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon] ?? Stethoscope;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-soft">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink-900">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
        {service.short}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
