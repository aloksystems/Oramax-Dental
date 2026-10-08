import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl leading-tight text-ink-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <div className="mt-3 text-base leading-relaxed text-ink-600">
          {description}
        </div>
      )}
    </div>
  );
}
