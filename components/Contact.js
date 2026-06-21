"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const services = [
  "Modular Kitchen",
  "Wardrobe / Storage",
  "Living Room",
  "Bedroom",
  "False Ceiling",
  "Full Home Interior",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Urban Craft! I'd like a consultation.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Service: ${form.service}\n` +
        `Details: ${form.message || "—"}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-ink shadow-soft">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="relative p-8 sm:p-12">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="relative">
                <span className="eyebrow text-gold-400">
                  <span className="h-px w-8 bg-gold-400/60" />
                  Get In Touch
                </span>
                <h2 className="section-title mt-4 text-white">
                  Let&apos;s build your dream space
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                  Share a few details and we&apos;ll get back with a free
                  consultation and an honest estimate.
                </p>

                <ul className="mt-9 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/50">
                        Call / WhatsApp
                      </div>
                      <a
                        href={`tel:${site.phone}`}
                        className="text-lg font-semibold text-white hover:text-gold-400"
                      >
                        {site.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/50">
                        Visit Us
                      </div>
                      <p className="text-sm leading-relaxed text-white/85">
                        {site.address.line1}
                        <br />
                        {site.address.line2}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                      <Icon name="clock" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/50">
                        Working Hours
                      </div>
                      <p className="text-sm text-white/85">{site.hours}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
                  <Icon name="shield" className="h-4 w-4 text-gold-400" />
                  GST: {site.gst}
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="bg-white p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Priya Sharma"
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className="w-full rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  >
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Project Details{" "}
                    <span className="text-ink-soft/40">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your space, size, timeline…"
                    className="w-full resize-none rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Send Enquiry on WhatsApp
                </button>
                <p className="text-center text-xs text-ink-soft/50">
                  We typically reply within a few hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
