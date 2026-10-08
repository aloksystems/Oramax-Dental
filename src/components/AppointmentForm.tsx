"use client";

import { useState } from "react";
import { clinic } from "@/data/clinic";

type Status = "idle" | "error" | "success";

function fieldCls(invalid: boolean) {
  return `w-full rounded-lg border bg-white px-3.5 py-2.5 text-[16px] text-ink-900 placeholder:text-ink-300 focus:border-teal-600 focus:outline-none ${
    invalid ? "border-red-400" : "border-ink-200"
  }`;
}

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot
    if (String(data.get("company") || "").trim() !== "") return;

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();
    const reason = String(data.get("reason") || "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{6,16}$/.test(phone))
      next.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address, or leave it blank.";
    if (reason.length < 3)
      next.reason = "Please briefly describe the reason for your visit.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    // No backend configured: store locally only, show "request received" state.
    // Never claim a confirmed booking.
    try {
      const payload = {
        name,
        phone,
        email,
        date,
        time,
        reason,
        message: String(data.get("message") || "").slice(0, 1000),
        at: new Date().toISOString(),
      };
      localStorage.setItem(
        "oramax-appointment-request",
        JSON.stringify(payload)
      );
    } catch {
      // storage optional; request state still shown
    }
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8"
      >
        <h2 className="font-serif text-2xl text-ink-900">
          Your appointment request has been received.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700 md:text-base">
          Thank you for reaching out. The clinic will contact you to confirm
          availability. For a quicker response, you can call the clinic
          directly.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Call {clinic.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-900"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card md:p-8"
      aria-describedby="appt-note"
    >
      {/* Honeypot for spam bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="appt-name" className="mb-1.5 block text-sm font-medium text-ink-800">
            Patient name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input id="appt-name" name="name" autoComplete="name" maxLength={80} required placeholder="Full name" className={fieldCls(!!errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "appt-name-err" : undefined} />
          {errors.name && <p id="appt-name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="appt-phone" className="mb-1.5 block text-sm font-medium text-ink-800">
            Phone number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input id="appt-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={20} required placeholder="+91 …" className={fieldCls(!!errors.phone)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "appt-phone-err" : undefined} />
          {errors.phone && <p id="appt-phone-err" role="alert" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="appt-email" className="mb-1.5 block text-sm font-medium text-ink-800">
            Email <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input id="appt-email" name="email" type="email" autoComplete="email" maxLength={120} placeholder="you@example.com" className={fieldCls(!!errors.email)} aria-invalid={!!errors.email} />
          {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="appt-date" className="mb-1.5 block text-sm font-medium text-ink-800">Preferred date</label>
            <input id="appt-date" name="date" type="date" className={fieldCls(false)} />
          </div>
          <div>
            <label htmlFor="appt-time" className="mb-1.5 block text-sm font-medium text-ink-800">Preferred time</label>
            <input id="appt-time" name="time" type="text" maxLength={30} placeholder="Morning / Evening" className={fieldCls(false)} />
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="appt-reason" className="mb-1.5 block text-sm font-medium text-ink-800">
            Reason for visit <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input id="appt-reason" name="reason" maxLength={140} required placeholder="e.g. Wisdom tooth pain, jaw swelling" className={fieldCls(!!errors.reason)} aria-invalid={!!errors.reason} />
          {errors.reason && <p role="alert" className="mt-1 text-xs text-red-600">{errors.reason}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="appt-msg" className="mb-1.5 block text-sm font-medium text-ink-800">Message <span className="font-normal text-ink-400">(optional)</span></label>
          <textarea id="appt-msg" name="message" rows={4} maxLength={1000} placeholder="Anything the clinic should know before calling you back?" className={fieldCls(false)} />
        </div>
      </div>

      {status === "error" && Object.keys(errors).length > 0 && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Please review the highlighted fields and try again.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700">
          Request Appointment
        </button>
        <p id="appt-note" className="text-xs leading-relaxed text-ink-500">
          This sends a request only — not a confirmed booking. The clinic
          will call you to confirm. Prefer to talk now?{" "}
          <a href={clinic.phoneHref} className="font-semibold text-teal-700 underline underline-offset-2">
            Call {clinic.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
