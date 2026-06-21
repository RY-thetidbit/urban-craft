import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const highlights = [
  { value: "12+", label: "Years in Interiors" },
  { value: "500+", label: "Happy Families" },
  { value: "100%", label: "Hands-On Approach" },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-28"
    >
      {/* ambient glows */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                alt={`${site.owner}, Founder of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            {/* Name plate */}
            <div className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl bg-white p-5 text-ink shadow-soft">
              <div className="font-display text-2xl font-bold leading-none">
                {site.owner}
              </div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Founder &amp; Lead Designer
              </div>
            </div>

            {/* Experience chip */}
            <div className="absolute -right-3 top-5 rounded-2xl bg-gold-500 px-5 py-3 text-ink shadow-soft">
              <div className="font-display text-2xl font-bold leading-none">
                12+
              </div>
              <div className="text-[0.6rem] font-semibold uppercase tracking-wide">
                Years
              </div>
            </div>
          </div>
        </Reveal>

        {/* Message */}
        <Reveal delay={120} className="lg:col-span-7">
          <span className="eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400/60" />
            Meet The Founder
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
            &ldquo;A home should feel like{" "}
            <span className="text-gold-400">you</span> — every shelf, every
            corner, every finish.&rdquo;
          </h2>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75">
            Urban Craft began with a simple belief of{" "}
            <strong className="text-white">{site.owner}</strong> — that great
            interiors come from listening first and building second. What started
            as a passion for woodwork has grown into a trusted studio in
            Ambernath, delivering kitchens and full-home interiors that families
            genuinely love to live in.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Mubarak still personally walks every site, reviews every design and
            checks every installation — because for him, your home isn&apos;t
            just a project, it&apos;s a relationship.
          </p>

          {/* Credentials */}
          <ul className="mt-7 grid gap-3 sm:grid-cols-1">
            {[
              "Personally designs & supervises every project",
              "In-house workshop for full quality control",
              "Honest, transparent pricing — always",
            ].map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-white/85">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-ink">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {c}
              </li>
            ))}
          </ul>

          {/* Highlight stats */}
          <div className="mt-9 grid max-w-lg grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="border-l border-white/15 pl-4">
                <div className="font-display text-3xl font-bold text-white">
                  {h.value}
                </div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-wide text-white/55">
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          {/* Signature + CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <span className="font-display text-2xl italic text-gold-400">
              {site.owner}
            </span>
            <a href="#contact" className="btn-gold">
              Work With Mubarak
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
