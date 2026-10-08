"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic, navLinks } from "@/data/clinic";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Oramax Dental and Maxillofacial Clinic — home"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 font-serif text-lg text-white"
          >
            O
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] font-semibold text-ink-900">
              Oramax Dental &amp; Maxillofacial Clinic
            </span>
            <span className="block truncate text-xs text-ink-500">
              Dr. Khushal Gangwani · Juhu, Mumbai
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href))
                  ? "text-ink-900 underline decoration-teal-500 decoration-2 underline-offset-8"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="ml-3 inline-flex items-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Book Appointment
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={clinic.phoneHref}
            aria-label={`Call clinic ${clinic.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-800"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <Link
            href="/appointment"
            className="inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-800"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink-100 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="divide-y divide-ink-100">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 text-base font-medium text-ink-800"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="block py-3 text-base font-semibold text-teal-700"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 px-3 py-2.5 text-sm font-semibold text-ink-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call Clinic
            </a>
            <a
              href={clinic.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-3 py-2.5 text-sm font-semibold text-white"
            >
              Get Directions
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
