"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

const projects = [
  {
    title: "Matte Graphite Kitchen",
    category: "Kitchen",
    location: "Ambernath",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "Walk-in Wardrobe",
    category: "Wardrobe",
    location: "Badlapur",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Warm Living Room",
    category: "Living",
    location: "Kalyan",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Island Kitchen",
    category: "Kitchen",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Master Bedroom",
    category: "Bedroom",
    location: "Ambernath",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "Two-Tone Kitchen",
    category: "Kitchen",
    location: "Dombivli",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cozy TV Lounge",
    category: "Living",
    location: "Thane",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
  },
];

const filters = ["All", "Kitchen", "Wardrobe", "Living", "Bedroom"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-400" />
              Our Work
            </span>
            <h2 className="section-title mt-4">
              Real spaces, real transformations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft/70">
              A glimpse of the kitchens and interiors we&apos;ve delivered across
              Ambernath and Mumbai.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-brand-50 text-ink-soft hover:bg-brand-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${
                p.span || ""
              }`}
            >
              <Image
                src={p.image}
                alt={`${p.title} — ${p.location}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-100 transition-all duration-500 group-hover:translate-y-0">
                <span className="inline-block rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink">
                  {p.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/75">
                  <Icon name="pin" className="h-4 w-4" />
                  {p.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Let&apos;s design yours next
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
