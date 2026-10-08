import { clinic } from "@/data/clinic";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card">
      <iframe
        title={`Map showing ${clinic.name}, Juhu Mumbai`}
        src={clinic.embedUrl}
        className="h-[320px] w-full border-0 md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
