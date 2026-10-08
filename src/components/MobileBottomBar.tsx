"use client";

import { Phone, MapPin, CalendarCheck } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-100 bg-white/98 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <nav
        aria-label="Quick actions"
        className="grid grid-cols-3 divide-x divide-ink-100"
      >
        <a
          href={clinic.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink-900"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <a
          href={clinic.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink-900"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" /> Directions
        </a>
        <a
          href="/appointment"
          className="flex items-center justify-center gap-2 bg-ink-900 py-3.5 text-sm font-semibold text-white"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Appointment
        </a>
      </nav>
    </div>
  );
}
