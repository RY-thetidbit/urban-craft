import Reveal from "./Reveal";
import { Icon } from "./Icons";

const reviews = [
  {
    name: "Priya Sharma",
    place: "Deepak Nagar, Ambernath",
    text: "Urban Craft transformed our cramped kitchen into a bright, modern space. The soft-close drawers and finish feel truly premium. Highly recommend Mubarak and his team.",
    initials: "PS",
  },
  {
    name: "Rohan Deshmukh",
    place: "Badlapur",
    text: "From the 3D design to installation, everything was smooth and on schedule. They handled our entire flat — kitchen, wardrobes and TV unit. Spotless work.",
    initials: "RD",
  },
  {
    name: "Aisha Khan",
    place: "Kalyan",
    text: "Honest pricing and zero shortcuts. They explained every material and stuck to the budget. Our wardrobe looks straight out of a magazine.",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-50/60 py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Client Love
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title mt-4">What our customers say</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/70">
            The trust of our clients is the foundation we&apos;ve built on.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 110}
              className="relative flex flex-col rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <Icon name="quote" className="h-10 w-10 text-brand-100" />
              <div className="mt-2 flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="star" className="h-4 w-4 fill-gold-500" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft/80">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 font-semibold text-white">
                  {r.initials}
                </span>
                <div>
                  <div className="font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-ink-soft/60">{r.place}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
