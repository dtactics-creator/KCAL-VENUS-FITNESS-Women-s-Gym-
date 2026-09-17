import { motion } from "framer-motion";
import { Eye, Flame, Heart, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow, GhostButton, GoldButton, MaskImage, Reveal, Section, WordReveal } from "../components/ui";
import { whatsappLink } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PageHero() {
  return (
    <div className="grain relative flex min-h-[92svh] items-end overflow-hidden">
      <motion.img src="/images/about-hero.jpg" alt="Confident women training together in a dark luxury studio" initial={{ scale: 1.18 }} animate={{ scale: 1.02 }} transition={{ duration: 2.4, ease: EASE }} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/60" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(55% 50% at 70% 40%, rgba(155,24,48,0.3), transparent 70%)" }} />
      <div className="light-beam" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-44 md:px-10">
        <Eyebrow>Our Story — Est. Chennai</Eyebrow>
        <h1 className="mt-6 font-display font-black leading-[0.98]">
          <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="block text-[clamp(2.4rem,7vw,5.2rem)] text-ivory">MORE THAN A GYM.</motion.span>
          <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.38, ease: EASE }} className="block text-[clamp(2.4rem,7vw,5.2rem)] text-gold-metallic">A WOMEN'S MOVEMENT.</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.9 }} className="mt-6 max-w-2xl font-editorial text-xl italic leading-relaxed text-ivory/80 md:text-2xl">
          KCAL VENUS FITNESS is a women-only fitness studio in Tiruvottiyur, Chennai — built around strength, confidence, comfort and transformation.
        </motion.p>
      </div>
    </div>
  );
}

const PHILOSOPHY = [
  { icon: Flame, title: "STRENGTH FIRST", copy: "We train capability before aesthetics. Muscle, bone-density, posture and power — the kind of strength that serves a woman's entire life." },
  { icon: Heart, title: "COMFORT IS NON-NEGOTIABLE", copy: "Modest-friendly batches, respectful coaching and a private floor where every woman — beginner to athlete — feels safe to begin." },
  { icon: Eye, title: "DISCIPLINE OVER MOTIVATION", copy: "Motivation fades. Systems remain. We build routines, tracking and accountability that survive busy weeks and low days." },
];

const MINDSET = ["STRENGTH", "CONFIDENCE", "TRANSFORMATION"];

const TIMELINE = [
  { step: "ARRIVE", copy: "Walk into a studio that was designed for you — greeted by name, never judged.", num: "01" },
  { step: "TRAIN", copy: "Coached sessions with correct form, smart programming and real attention.", num: "02" },
  { step: "PUSH", copy: "Progressive overload and conditioning that expand what you believe is possible.", num: "03" },
  { step: "PROGRESS", copy: "Measurements, strength logs and visible changes — tracked, celebrated, repeated.", num: "04" },
  { step: "TRANSFORM", copy: "A stronger body, a steadier mind, an unshakeable confidence. You, more yourself.", num: "05" },
];

export default function About() {
  return (
    <>
      <PageHero />

      {/* philosophy */}
      <Section className="bg-ink">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Our Philosophy</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-tight text-ivory">
                <WordReveal text="WE DON'T TRAIN BODIES." /> <br />
                <span className="text-gold-metallic"><WordReveal text="WE BUILD WOMEN." delay={0.3} /></span>
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-6 text-[0.95rem] font-light leading-relaxed tracking-wide text-ivory/65">
                  KCAL VENUS FITNESS began with a simple observation: most gyms were never designed with women in mind — the crowds, the waiting, the unwanted attention, the one-size programs. So we built the opposite. An intimate, cinematic, women-only studio in Tiruvottiyur where coaching is personal, batches are small, and every square foot whispers: <em className="font-editorial text-goldbright">you belong here.</em>
                </p>
              </Reveal>
              <div className="mt-8 space-y-5">
                {PHILOSOPHY.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <div className="glass flex gap-5 p-6 card-glow">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold"><p.icon size={20} strokeWidth={1.6} /></span>
                      <div>
                        <h3 className="font-display text-base font-bold tracking-[0.18em] text-ivory">{p.title}</h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-ivory/60">{p.copy}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="relative">
              <MaskImage src="/images/about-story.jpg" alt="Coach guiding a woman with care inside a dark premium studio" className="h-[520px] border border-gold/25 md:h-[640px]" />
              <div className="animated-gold-border absolute -bottom-6 -left-4 bg-black/80 px-6 py-5 backdrop-blur-xl md:-left-8">
                <p className="font-display text-3xl font-black text-gold-metallic">25</p>
                <p className="mt-1 text-[0.6rem] tracking-[0.35em] text-ivory/60">MEMBERS. ONE SISTERHOOD.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* why women-only */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(180deg, #050505 0%, #2a0a12 50%, #050505 100%)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>Why Women-Only</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-black leading-tight text-ivory">FREEDOM<br />CHANGES<br /><span className="text-gold-metallic">EVERYTHING.</span></h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {["Train in what you love — no second thoughts.", "No waiting for racks. No performing for anyone.", "Coaches who understand women's bodies & cycles.", "A sisterhood that notices when you're missing."].map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }} className="glass-deep p-7 card-glow">
                  <ShieldCheck size={22} className="text-gold" strokeWidth={1.5} />
                  <p className="mt-4 font-editorial text-lg italic leading-relaxed text-ivory/85">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* mindset */}
      <Section className="bg-ink text-center">
        <div className="mx-auto max-w-5xl">
          <Eyebrow center>The KCAL VENUS Mindset</Eyebrow>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            {MINDSET.map((m, i) => (
              <div key={m} className="flex items-center gap-8">
                <Reveal delay={i * 0.15}>
                  <span className={`font-display text-[clamp(1.6rem,4.5vw,3rem)] font-black tracking-[0.12em] ${i === 1 ? "text-gold-metallic" : "text-outline-faint"}`}>{m}</span>
                </Reveal>
                {i < 2 && <Sparkles size={16} className="hidden text-richred md:block" />}
              </div>
            ))}
          </div>
          {/* big quote */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-16 max-w-4xl border-y border-gold/25 px-4 py-14 md:px-12">
              <Quote size={44} className="mx-auto text-gold/50" strokeWidth={1} />
              <p className="mt-6 font-display text-[clamp(1.4rem,3.6vw,2.4rem)] font-bold leading-snug text-ivory">YOU DON'T TRAIN TO BECOME SOMEONE ELSE.</p>
              <p className="mt-3 font-display text-[clamp(1.4rem,3.6vw,2.4rem)] font-bold leading-snug text-gold-metallic">YOU TRAIN TO BECOME MORE OF YOURSELF.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* timeline */}
      <Section className="bg-coal">
        <div className="mx-auto max-w-6xl">
          <Eyebrow center>The Journey</Eyebrow>
          <h2 className="mt-6 text-center font-display text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold text-ivory">ARRIVE <span className="text-gold">→</span> TRANSFORM</h2>
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 via-richred/50 to-transparent md:block" />
            <div className="space-y-6 md:space-y-0">
              {TIMELINE.map((t, i) => (
                <motion.div key={t.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.05 * i, ease: EASE }} className={`md:flex md:items-center md:gap-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`glass flex-1 p-7 card-glow md:my-4 ${i % 2 ? "md:text-right" : ""}`}>
                    <p className="text-[0.6rem] tracking-[0.4em] text-gold">{t.num}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[0.14em] text-ivory">{t.step}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-ivory/60">{t.copy}</p>
                  </div>
                  <div className="relative z-10 hidden h-4 w-4 shrink-0 rotate-45 border border-goldbright bg-ink shadow-[0_0_20px_rgba(212,175,55,0.7)] md:block" />
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
          <Reveal className="mt-14 text-center">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton href={whatsappLink()}>Start Your Journey</GoldButton>
              <GhostButton to="/programs">See Programs</GhostButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
