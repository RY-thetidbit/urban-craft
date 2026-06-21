import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

const services = [
  {
    icon: "kitchen",
    title: "Modular Kitchens",
    text: "Smart, ergonomic kitchens with premium finishes, soft-close fittings and clever storage.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    icon: "wardrobe",
    title: "Wardrobes & Storage",
    text: "Sliding, hinged and walk-in wardrobes tailored to every corner of your home.",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "sofa",
    title: "Living & Bedroom",
    text: "Curated furniture, TV units and cozy layouts that bring rooms to life.",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "ceiling",
    title: "False Ceiling & Lighting",
    text: "Layered ceilings and mood lighting that add depth, warmth and character.",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "tv",
    title: "TV & Feature Walls",
    text: "Statement media walls and panelling that make your living space stand out.",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "paint",
    title: "Turnkey Interiors",
    text: "Complete home interiors handled end-to-end — design, build and finishing.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-50/60 py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            What We Do
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title mt-4">Interiors, made complete</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/70">
            One studio for every part of your home. Pick a single space or hand
            us the whole project — we&apos;ll make it seamless.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 100}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft ${
                s.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-white/95 text-brand-600 shadow-soft">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
                  {s.text}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
                >
                  Enquire now
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
