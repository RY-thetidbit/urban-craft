"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { site, nav } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label={site.name}>
          <span
            className={`grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-soft transition-colors`}
          >
            <Icon name="cube" className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              Urban Craft
            </span>
            <span
              className={`block text-[0.65rem] font-semibold uppercase tracking-[0.3em] transition-colors ${
                scrolled ? "text-brand-600" : "text-white/70"
              }`}
            >
              Kitchen &amp; Interiors
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled ? "text-ink-soft" : "text-white/85"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phone}`} className="btn-primary">
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${
            scrolled || open ? "bg-brand-50 text-brand-700" : "bg-white/10 text-white"
          }`}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[480px] border-t border-brand-100" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-3">
            <a
              href={`tel:${site.phone}`}
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
