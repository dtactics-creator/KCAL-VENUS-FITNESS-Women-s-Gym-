import { motion } from "framer-motion";
import { BadgeCheck, Quote, Star } from "lucide-react";
import { Eyebrow, GhostButton, GoldButton, Reveal, Section } from "../components/ui";
import { REVIEWS_URL, whatsappLink } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PILLARS = [
  { w: "DISCIPLINE", d: "Show up on the hard days. That's where change lives." },
  { w: "CONSISTENCY", d: "Small efforts, repeated. The KCAL VENUS compounding effect." },
  { w: "STRENGTH", d: "Heavier lifts, stronger bones, bolder posture." },
  { w: "CONFIDENCE", d: "The glow no filter can fake." },
  { w: "RESULTS", d: "Measured, photographed, celebrated — then chased again." },
];

const STORIES = [
  {
    img: "/images/testi-1.jpg",
    name: "Priya S.",
    meta: "Member • Tiruvottiyur",
    quote: "I joined scared of dumbbells. Six months later I deadlift my own bodyweight — and I walk differently. KCAL VENUS FITNESS feels like family, not a gym.",
    tag: "STRENGTH +28 KG",
  },
  {
    img: "/images/testi-2.jpg",
    name: "Divya R.",
    meta: "Member • Washermenpet",
    quote: "As a working mother I needed a place that respected my time and my comfort. The coaches plan everything — I just show up and transform.",
    tag: "12 KG DOWN, SUSTAINED",
  },
  {
    img: "/images/testi-3.jpg",
    name: "Kavitha M.",
    meta: "Member • Royapuram",
    quote: "No stares, no chaos. Just women pushing women. My PCOS symptoms, my sleep, my confidence — everything changed when I got consistent here.",
    tag: "ENERGY & CONFIDENCE",
  },
];

const GALLERY = [
  { img: "/images/train.jpg", label: "POWER IS ELEGANT" },
  { img: "/images/move.jpg", label: "MOVE FREELY" },
  { img: "/images/sweat.jpg", label: "EARN YOUR GLOW" },
  { img: "/images/grow.jpg", label: "OWN YOUR STRENGTH" },
  { img: "/images/transform.jpg", label: "BECOME HER" },
  { img: "/images/prog-functional.jpg", label: "BUILT, NOT BORN" },
];

export default function Transformation() {
  return (
    <>
      {/* hero */}
      <div className="grain relative flex min-h-[88svh] items-end overflow-hidden">
        <motion.img src="/images/sweat.jpg" alt="Determined woman training hard in dramatic dark studio light" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/30 to-black/55" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(50% 45% at 65% 45%, rgba(155,24,48,0.35), transparent 70%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-44 md:px-10">
          <Eyebrow>Transformation — Real Women, Real Change</Eyebrow>
          <h1 className="mt-6 font-display font-black leading-[0.98]">
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="block text-[clamp(2.2rem,6.6vw,4.8rem)] text-ivory">YOUR TRANSFORMATION</motion.span>
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.36, ease: EASE }} className="block text-[clamp(2.2rem,6.6vw,4.8rem)] text-gold-metallic">STARTS WITH ONE DECISION.</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }} className="mt-6 max-w-2xl font-editorial text-xl italic text-ivory/80">No shortcuts. No filters. No unrealistic promises — just discipline, coaching and women who refused to quit.</motion.p>
        </div>
      </div>

      {/* pillars */}
      <section className="border-y border-gold/20 bg-[#070607] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-stretch justify-center gap-3">
          {PILLARS.map((p, i) => (
            <motion.div key={p.w} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }} className="group flex-1 min-w-[180px] border border-gold/20 bg-white/[0.02] p-6 text-center transition-colors hover:border-goldbright/60">
              <p className="font-display text-lg font-bold tracking-[0.16em] text-goldbright">{p.w}</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-ivory/55">{p.d}</p>
              {i < PILLARS.length - 1 && <span className="mt-4 block text-richred">→</span>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* stories */}
      <Section className="bg-ink">
        <div className="mx-auto max-w-7xl">
          <Eyebrow center>See What Women Are Saying</Eyebrow>
          <h2 className="mt-6 text-center font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-bold text-ivory">STORIES WRITTEN <span className="text-gold-metallic">IN SWEAT.</span></h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed tracking-wide text-ivory/60">Illustrative member stories reflecting the real journeys inside our studio. For unfiltered public reviews, read us on Google.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <motion.figure key={s.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75, delay: i * 0.12, ease: EASE }} className="glass card-glow group relative overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img src={s.img} alt={`${s.name} — KCAL VENUS member portrait`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[1.1s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 border border-goldbright/60 bg-black/60 px-3 py-1.5 text-[0.55rem] font-semibold tracking-[0.28em] text-goldbright backdrop-blur-md">{s.tag}</span>
                </div>
                <div className="p-7">
                  <Quote size={26} className="text-gold/60" strokeWidth={1.4} />
                  <blockquote className="mt-4 font-editorial text-lg italic leading-relaxed text-ivory/85">"{s.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/20 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-burgundy font-display text-sm font-bold text-ink">{s.name[0]}</span>
                    <span>
                      <span className="flex items-center gap-1.5 font-display text-sm font-bold tracking-[0.14em] text-ivory">{s.name} <BadgeCheck size={14} className="text-gold" /></span>
                      <span className="text-[0.65rem] tracking-[0.25em] text-ivory/50">{s.meta.toUpperCase()}</span>
                    </span>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-gold/50 px-8 py-4 text-[0.68rem] font-medium tracking-[0.32em] text-goldbright transition-all hover:-translate-y-0.5 hover:border-goldbright hover:bg-gold/10">
              <Star size={15} className="fill-gold text-gold" /> READ GOOGLE REVIEWS
            </a>
          </Reveal>
        </div>
      </Section>

      {/* gallery */}
      <section className="relative overflow-hidden bg-coal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Eyebrow>The Gallery</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold text-ivory">SHOT IN <span className="text-gold-metallic">BLACK & GOLD.</span></h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 px-3 md:grid-cols-3 md:gap-5 md:px-8">
          {GALLERY.map((g, i) => (
            <motion.div key={g.label} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }} className={`group relative overflow-hidden border border-gold/20 ${i === 0 ? "row-span-2 h-full min-h-[420px]" : "h-[240px] md:h-[300px]"}`}>
              <img src={g.img} alt={g.label} loading="lazy" className="duotone absolute inset-0 h-full w-full object-cover group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="font-display text-sm font-bold tracking-[0.24em] text-ivory group-hover:text-goldbright">{g.label}</span>
                <span className="gold-line w-8 transition-all duration-500 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="grain relative overflow-hidden py-24 text-center md:py-32" style={{ background: "radial-gradient(80% 100% at 50% 100%, #47101d 0%, #120509 55%, #050505 100%)" }}>
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-display text-[clamp(1.8rem,4.6vw,3rem)] font-black leading-tight text-ivory">HER STORY STARTED<br />WITH <span className="text-gold-metallic">ONE DECISION.</span></p>
            <p className="mt-5 font-editorial text-xl italic text-ivory/70">Yours can start today — before the 25 slots are gone.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton href={whatsappLink("Hi KCAL VENUS FITNESS, I'm ready to start my transformation. Please help me with the membership details and timings.")}>Begin My Transformation</GoldButton>
              <GhostButton to="/contact">Book A Visit</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
