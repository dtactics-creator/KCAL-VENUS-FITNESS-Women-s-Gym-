import { motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, Flame, Flower2, HeartPulse, Sparkles, UserCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, GhostButton, GoldButton, Reveal } from "../components/ui";
import { whatsappLink } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "STRENGTH TRAINING",
    tag: "Most Loved",
    img: "/images/prog-strength.jpg",
    desc: "Barbells, dumbbells and machines — programmed progressive strength that builds dense muscle, strong bones and unshakeable posture.",
    for: "Women who want to feel powerful, lift heavy and reshape their physique.",
    benefits: ["Full-body strength splits", "Glutes, back & core focus", "Form-first coaching"],
  },
  {
    icon: Flame,
    title: "FAT LOSS & CONDITIONING",
    tag: "High Energy",
    img: "/images/prog-fatloss.jpg",
    desc: "Metabolic circuits, ropes, sleds and intervals engineered to burn fat while preserving the muscle that keeps you toned.",
    for: "Women chasing sustainable fat loss without crash diets or burnout.",
    benefits: ["HIIT + steady-state blend", "Nutrition guidance", "Weekly tracking"],
  },
  {
    icon: HeartPulse,
    title: "FUNCTIONAL FITNESS",
    tag: "Move Better",
    img: "/images/prog-functional.jpg",
    desc: "Kettlebells, carries, squats and hinges — train the movements of real life so stairs, kids and travel feel effortless.",
    for: "Women who want energy, mobility and injury-resilient daily life.",
    benefits: ["Mobility + stability", "Kettlebell skills", "Core resilience"],
  },
  {
    icon: UserCheck,
    title: "PERSONAL TRAINING",
    tag: "1-on-1 Elite",
    img: "/images/prog-personal.jpg",
    desc: "A dedicated coach, a plan built around your body and total accountability — the fastest route from where you are to where you dream.",
    for: "Women who want private attention, specific goals or faster results.",
    benefits: ["Custom programming", "1-on-1 coaching", "Priority slots"],
  },
  {
    icon: Sparkles,
    title: "BEGINNER FITNESS",
    tag: "Start Here",
    img: "/images/prog-beginner.jpg",
    desc: "Never touched a dumbbell? Perfect. Learn every fundamental slowly, safely and without judgement — alongside other beginners.",
    for: "First-timers, restarters and anyone nervous about gyms.",
    benefits: ["Foundation first", "Zero judgement", "Confidence building"],
  },
  {
    icon: Flower2,
    title: "WOMEN'S FITNESS",
    tag: "Signature",
    img: "/images/prog-women.jpg",
    desc: "Our signature blend — strength, toning, flexibility and cycle-aware training designed around real women's bodies and lives.",
    for: "Every woman — the holistic KCAL VENUS method in one program.",
    benefits: ["Cycle-aware plans", "Tone + flexibility", "Community batches"],
  },
];

export default function Programs() {
  return (
    <>
      {/* hero */}
      <div className="grain relative flex min-h-[86svh] items-end overflow-hidden">
        <motion.img src="/images/prog-strength.jpg" alt="Woman training with barbell in dark luxury studio" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/40 to-black/50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(50% 45% at 30% 60%, rgba(212,175,55,0.18), transparent 70%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-44 md:px-10">
          <Eyebrow>Programs — Train With Purpose</Eyebrow>
          <h1 className="mt-6 font-display font-black leading-[0.98]">
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="block text-[clamp(2.6rem,8vw,6rem)] text-ivory">TRAIN WITH</motion.span>
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.36, ease: EASE }} className="block text-[clamp(2.6rem,8vw,6rem)] text-gold-metallic">PURPOSE.</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }} className="mt-6 max-w-2xl font-editorial text-xl italic text-ivory/80">Six elite tracks. One goal — the strongest version of you. Every program is coached, capped and crafted for women.</motion.p>
        </div>
      </div>

      {/* cards */}
      <section className="bg-ink px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: (i % 3) * 0.1, ease: EASE }}
              className="group relative overflow-hidden border border-gold/25 bg-coal card-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="duotone h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-black/25 to-transparent" />
                <span className="absolute left-4 top-4 border border-goldbright/60 bg-black/60 px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.3em] text-goldbright backdrop-blur-md">{p.tag.toUpperCase()}</span>
                <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center border border-gold/50 bg-black/65 text-gold backdrop-blur-md transition-colors group-hover:bg-gold group-hover:text-ink"><p.icon size={21} strokeWidth={1.6} /></span>
              </div>
              <div className="p-7">
                <h2 className="font-display text-xl font-bold tracking-[0.1em] text-ivory transition-colors group-hover:text-goldbright">{p.title}</h2>
                <div className="gold-line my-4 w-10 transition-all duration-500 group-hover:w-full" />
                <p className="text-sm font-light leading-relaxed text-ivory/65">{p.desc}</p>
                <p className="mt-4 text-[0.68rem] leading-relaxed tracking-[0.14em] text-ivory/50"><span className="font-semibold tracking-[0.3em] text-gold">FOR — </span>{p.for}</p>
                <ul className="mt-4 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[0.72rem] tracking-[0.18em] text-ivory/70"><span className="h-1 w-1 rotate-45 bg-gold" />{b.toUpperCase()}</li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi KCAL VENUS FITNESS, I'm interested in the ${p.title} program. Please share details and slot availability.`)} target="_blank" rel="noreferrer" className="mt-6 flex translate-y-1 items-center justify-between border-t border-gold/20 pt-5 text-[0.68rem] font-semibold tracking-[0.32em] text-goldbright opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  VIEW PROGRAM <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-goldbright via-gold to-richred transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* banner */}
      <section className="relative overflow-hidden border-y border-gold/20 py-20 text-center" style={{ background: "radial-gradient(70% 100% at 50% 0%, #47101d 0%, #120509 60%, #050505 100%)" }}>
        <div className="light-beam" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <Users size={30} className="mx-auto text-gold" strokeWidth={1.4} />
            <p className="mt-6 font-display text-[clamp(1.5rem,4vw,2.6rem)] font-bold leading-snug text-ivory">WHATEVER YOUR STARTING POINT,<br /><span className="text-gold-metallic">THERE IS A STRONGER VERSION WAITING.</span></p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton href={whatsappLink()}>Find My Program</GoldButton>
              <GhostButton to="/contact">Talk To A Coach</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* mini strip */}
      <section className="bg-ink px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
          <span className="w-full text-center text-[0.62rem] tracking-[0.45em] text-ivory/40">NOT SURE WHERE YOU FIT?</span>
          <Link to="/transformation" className="border border-gold/25 px-6 py-3 text-[0.65rem] tracking-[0.3em] text-ivory/75 hover:border-goldbright hover:text-goldbright">SEE TRANSFORMATIONS</Link>
          <Link to="/about" className="border border-gold/25 px-6 py-3 text-[0.65rem] tracking-[0.3em] text-ivory/75 hover:border-goldbright hover:text-goldbright">OUR PHILOSOPHY</Link>
        </div>
      </section>
    </>
  );
}
