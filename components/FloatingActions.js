"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px]">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${site.phone}`}
        aria-label="Call us"
        className="grid place-items-center rounded-full bg-brand-600 p-4 text-white shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}
