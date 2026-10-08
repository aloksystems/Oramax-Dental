import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { clinic, doctor, navLinks } from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-xl text-white">{clinic.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-200">
            {doctor.name}
            <br />
            {doctor.specialty}
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-ink-200">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
            <br />
            {clinic.address.line3}
            <br />
            {clinic.address.city}, {clinic.address.state}{" "}
            {clinic.address.postalCode}
          </address>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {clinic.phoneDisplay}
            </a>
            <a
              href={clinic.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-200 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="text-ink-200 hover:text-white"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="text-ink-200 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-ink-200 hover:text-white"
              >
                Medical Disclaimer
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-ink-300">
            Website information is for general education only and does not
            replace professional medical advice.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-ink-300 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {clinic.name}. All rights reserved.</p>
          <p>
            {doctor.name} · {doctor.specialty} · Juhu, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
