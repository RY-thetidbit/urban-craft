import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const points = [
  {
    icon: "ruler",
    title: "Tailored Design",
    text: "Every layout is designed around how you actually cook, store and live.",
  },
  {
    icon: "hammer",
    title: "In-House Craftsmanship",
    text: "Built in our own workshop with precision machinery and skilled artisans.",
  },
  {
    icon: "shield",
    title: "Built to Last",
    text: "Moisture-resistant materials and premium hardware backed by warranty.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant interior designed by Urban Craft"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-soft sm:block">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
                alt="Detail of a custom kitchen"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          {/* Experience badge */}
          <div className="absolute -left-4 top-8 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-soft">
            <div className="font-display text-3xl font-bold">12+</div>
            <div className="text-xs uppercase tracking-wide text-white/80">
              Years of Trust
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" />
            Who We Are
          </span>
          <h2 className="section-title mt-4">
            A passion for interiors,
            <br className="hidden sm:block" /> crafted with care.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft/80">
            Urban Craft is a kitchen &amp; interior studio founded by{" "}
            <strong className="text-ink">{site.owner}</strong>, based in
            Ambernath. We design and build modular kitchens, wardrobes and
            full-home interiors that are beautiful, functional and made to fit
            your life — not the other way around.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
            We handle everything end-to-end: design, manufacturing and
            installation. That means tighter quality control, honest pricing and
            a finish you can be proud of.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft/70">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-wide text-ink-soft/50">
                Talk to {site.owner.split(" ")[0]}
              </div>
              <a
                href={`tel:${site.phone}`}
                className="font-display text-xl font-bold text-brand-700"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
