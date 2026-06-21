import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

const reasons = [
  {
    icon: "rupee",
    title: "Transparent Pricing",
    text: "Detailed quotes with no hidden costs — you know exactly what you pay for.",
  },
  {
    icon: "shield",
    title: "10-Year Warranty",
    text: "Quality materials and hardware backed by a written warranty.",
  },
  {
    icon: "clock",
    title: "On-Time Delivery",
    text: "We respect your timeline and hand over when we promise to.",
  },
  {
    icon: "sparkle",
    title: "Premium Finishes",
    text: "Branded laminates, acrylics and fittings for a luxe, lasting look.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" />
            Why Urban Craft
          </span>
          <h2 className="section-title mt-4">
            Reasons families across Ambernath choose us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/70">
            We&apos;re not just building furniture — we&apos;re building trust.
            Here&apos;s what sets our work apart.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-brand-100 bg-brand-50/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft/70">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=80"
              alt="Premium kitchen finish by Urban Craft"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* Floating review card */}
          <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-soft sm:left-6 sm:w-72 sm:translate-x-0">
            <div className="flex items-center gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-gold-500" />
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">
              &ldquo;Beautiful kitchen, finished exactly on time. Truly
              professional team.&rdquo;
            </p>
            <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
              — Verified Customer
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
