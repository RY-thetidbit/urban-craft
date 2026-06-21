import { Icon } from "./Icons";
import { site, nav } from "@/lib/site";

const serviceLinks = [
  "Modular Kitchens",
  "Wardrobes & Storage",
  "Living & Bedroom",
  "False Ceiling",
  "Turnkey Interiors",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
              <Icon name="cube" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold">
                Urban Craft
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
                Kitchen &amp; Interiors
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Bespoke modular kitchens and full-home interiors, crafted with care
            in Ambernath.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { name: "instagram", href: site.social.instagram },
              { name: "facebook", href: site.social.facebook },
              { name: "youtube", href: site.social.youtube },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-gold-400/50 hover:bg-white/5 hover:text-gold-400"
              >
                <Icon name={s.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold-400"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/60 transition-colors hover:text-gold-400"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Reach Us
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-400" />
              <a href={`tel:${site.phone}`} className="hover:text-gold-400">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="shield" className="h-5 w-5 shrink-0 text-gold-400" />
              <span>GST: {site.gst}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Proprietor: {site.owner}.
            All rights reserved.
          </p>
          <p>Designed &amp; crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
