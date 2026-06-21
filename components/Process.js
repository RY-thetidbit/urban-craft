import Reveal from "./Reveal";
import { Icon } from "./Icons";

const steps = [
  {
    no: "01",
    icon: "phone",
    title: "Consultation",
    text: "We visit your site, understand your needs, taste and budget.",
  },
  {
    no: "02",
    icon: "cube",
    title: "3D Design",
    text: "You see your space in realistic 3D before anything is built.",
  },
  {
    no: "03",
    icon: "hammer",
    title: "Manufacturing",
    text: "Crafted in our workshop with precision and premium materials.",
  },
  {
    no: "04",
    icon: "sparkle",
    title: "Installation",
    text: "Clean, on-time installation and a final walkthrough with you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-400">
            <span className="h-px w-8 bg-gold-400/60" />
            How It Works
            <span className="h-px w-8 bg-gold-400/60" />
          </span>
          <h2 className="section-title mt-4 text-white">
            A simple, stress-free journey
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Four clear steps from first call to the moment you walk into your
            finished space.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 110}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/[0.06]"
            >
              <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-gold-400/30">
                {s.no}
              </span>
              <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {s.text}
              </p>
              {i < steps.length - 1 && (
                <Icon
                  name="arrow"
                  className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-white/20 lg:block"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
