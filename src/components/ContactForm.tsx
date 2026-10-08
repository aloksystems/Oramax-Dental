"use client";

import { useState } from "react";
import { clinic } from "@/data/clinic";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (String(data.get("company") || "").trim() !== "") return;
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) {
      setError("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!/^[+\d][\d\s-]{6,16}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      setStatus("error");
      return;
    }
    if (message.length < 3) {
      setError("Please write a short message.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
        <h2 className="font-serif text-xl text-ink-900">Message received.</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Thank you for contacting {clinic.name}. The clinic will get back
          to you. For urgent queries, please call{" "}
          <a href={clinic.phoneHref} className="font-semibold text-teal-700 underline underline-offset-2">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
    >
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-800">Your name *</label>
          <input id="c-name" name="name" maxLength={80} autoComplete="name" required placeholder="Full name" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[16px] text-ink-900 focus:border-teal-600 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink-800">Phone *</label>
          <input id="c-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} required placeholder="+91 …" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[16px] text-ink-900 focus:border-teal-600 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-ink-800">Message *</label>
          <textarea id="c-msg" name="message" rows={4} maxLength={1000} required placeholder="How can the clinic help you?" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[16px] text-ink-900 focus:border-teal-600 focus:outline-none" />
        </div>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-3 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{error}</p>
      )}
      <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
