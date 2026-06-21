import Image from "next/image";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const stats = [
  { value: "500+", label: "Homes Crafted" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "On-Time Handover" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2000&q=80"
          alt="Modern modular kitchen interior by Urban Craft"
          fill
          priority
          sizes="100vw"
          className="animate-soft-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-16">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
            <Icon name="sparkle" className="h-4 w-4 text-gold-400" />
            Bespoke Interiors · Ambernath &amp; Mumbai
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            We Craft Kitchens You&apos;ll{" "}
            <span className="text-gold-400">Love to Live In</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            From sleek modular kitchens to complete home interiors — Urban Craft
            blends thoughtful design, premium materials and flawless
            craftsmanship to transform your space.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">
              Get a Free Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#projects" className="btn-ghost">
              View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold-400" />
              Transparent Pricing
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold-400" />
              In-house Production
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold-400" />
              10-Year Warranty
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="animate-fade-up border-l border-white/20 pl-4">
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
