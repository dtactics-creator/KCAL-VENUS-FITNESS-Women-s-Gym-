import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, CalendarCheck, ChevronDown, Crown, Flame, HeartHandshake, Lock, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import Logo from "../components/Logo";
import { Eyebrow, GhostButton, GoldButton, MaskImage, Reveal, Section, SlotBadge, WordReveal } from "../components/ui";
import { DIRECTIONS_URL, OFFER_PRICE, PHONE_DISPLAY, PHONE_TEL, REVIEWS_URL, whatsappLink } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ============================== HERO ============================== */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.28]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div ref={ref} className="grain relative flex min-h-[108svh] items-center overflow-hidden">
      {/* bg image */}
      <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
        <img src="/images/hero.jpg" alt="Powerful athletic Indian woman standing confidently in a dark luxury fitness studio with golden rim light" className="kenburns h-full w-full object-cover object-[center_20%]" loading="eager" />
      </motion.div>
      {/* cinematic grades */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/70" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 78% 42%, rgba(155,24,48,0.28), transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(45% 40% at 20% 80%, rgba(212,175,55,0.12), transparent 70%)" }} />
      <div className="light-beam" />

      {/* vertical editorial tag */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-3 xl:flex">
        <span className="text-[0.6rem] tracking-[0.6em] text-ivory/40"></span>
      </div>

      <motion.div style={{ y: contentY, opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-36 pt-36 md:px-10 md:pb-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: EASE }}>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-gold/50 bg-black/50 px-4 py-2 text-[0.62rem] font-medium tracking-[0.42em] text-goldbright backdrop-blur-md">
            <Crown size={13} /> WOMEN-ONLY FITNESS STUDIO
          </span>
          <SlotBadge dark />
        </motion.div>

        <h1 className="mt-7 font-display font-black leading-[0.95] tracking-tight">
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: EASE }} className="block text-[clamp(3.2rem,10vw,7.5rem)] text-ivory">STRONG</motion.span>
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65, ease: EASE }} className="block text-[clamp(3.2rem,10vw,7.5rem)]">
            <span className="text-gold-metallic">HAS NO</span>
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, ease: EASE }} className="text-outline-gold block text-[clamp(2.6rem,8.4vw,6.2rem)] tracking-[0.06em]">DRESS CODE.</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1 }} className="mt-7 max-w-xl font-editorial text-xl italic leading-relaxed text-ivory/85 md:text-2xl">
          Train stronger. Move confidently. Become the strongest version of yourself.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.15 }} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <GoldButton href={whatsappLink()}>Join KCAL VENUS</GoldButton>
          <GhostButton to="/contact">Book Your Slot</GhostButton>
          <a href={PHONE_TEL} className="group inline-flex items-center gap-3 px-2 py-4 text-[0.72rem] tracking-[0.3em] text-ivory/80 transition-colors hover:text-goldbright">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-all group-hover:bg-gold group-hover:text-ink"><Phone size={15} /></span>
            CALL {PHONE_DISPLAY}
          </a>
        </motion.div>
      </motion.div>

      {/* floating offer card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: EASE }}
        className="absolute bottom-24 left-6 right-6 z-10 md:left-auto md:right-12 md:w-[340px]"
      >
        <div className="animated-gold-border float-soft bg-black/70 backdrop-blur-xl">
          <div className="bg-gradient-to-r from-burgundy/80 to-richred/60 px-5 py-2.5 text-center text-[0.6rem] font-semibold tracking-[0.4em] text-cream">SPECIAL OFFER</div>
          <div className="px-6 py-5 text-center">
            <p className="text-[0.6rem] tracking-[0.4em] text-ivory/55">MEMBERSHIP DEAL</p>
            <p className="mt-3 font-display text-2xl font-black leading-tight text-gold-metallic">PAY FOR 6 MONTHS</p>
            <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.25em] text-cream">GET 2 MONTHS FREE</p>
            <div className="gold-line mx-auto my-4 w-3/4" />
            <p className="text-[0.68rem] font-semibold tracking-[0.35em] text-cream">NO PRICE SHOW</p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-sheen mt-5 flex items-center justify-center gap-2 bg-gradient-to-r from-mutedgold via-gold to-goldbright px-6 py-3.5 text-[0.65rem] font-bold tracking-[0.3em] text-ink">CLAIM YOUR SLOT <ArrowRight size={14} /></a>
          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.58rem] tracking-[0.5em] text-ivory/50">SCROLL</span>
        <ChevronDown size={16} className="text-gold" />
      </motion.div>
    </div>
  );
}

/* ============================== MARQUEE ============================== */
function Marquee() {
  const words = ["POWER", "FEMININITY", "CONFIDENCE", "LUXURY", "DISCIPLINE", "STRENGTH"];
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-[#070607] py-5">
      <div className="marquee-track items-center gap-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10 pr-10">
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className={`font-display text-lg tracking-[0.35em] ${i % 2 ? "text-outline-faint" : "text-gold/90"}`}>{w}</span>
                <Sparkles size={13} className="text-richred" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================== BRAND STATEMENT ============================== */
function BrandStatement() {
  return (
    <Section className="bg-ink">
      <div className="light-beam opacity-60" />
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow center>The KCAL VENUS Standard</Eyebrow>
        <h2 className="mt-8 font-display font-black leading-[1.02]">
          <span className="block text-[clamp(2rem,5.5vw,4.2rem)] text-ivory"><WordReveal text="STRONG IS NOT A LOOK." /></span>
          <span className="mt-3 block text-[clamp(2rem,5.5vw,4.2rem)] text-gold-metallic"><WordReveal text="IT IS A FEELING." delay={0.4} /></span>
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl font-editorial text-xl italic leading-relaxed text-ivory/75 md:text-2xl">
            Strength is the quiet confidence in your posture, the discipline in your routine, the power in your stride. At KCAL VENUS FITNESS, we don't sculpt bodies for approval — we build women who walk into every room like they own it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[0.65rem] tracking-[0.4em] text-gold/90">
            <span>STRENGTH</span><span className="text-richred">•</span><span>CONFIDENCE</span><span className="text-richred">•</span><span>DISCIPLINE</span><span className="text-richred">•</span><span>TRANSFORMATION</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================== WHY KCAL VENUS ============================== */
const WHY = [
  { icon: Crown, title: "WOMEN-ONLY", copy: "A private sanctuary designed entirely for women. No stares, no waiting, no compromise — just your space to train freely.", num: "01" },
  { icon: Lock, title: "PRIVATE & COMFORTABLE", copy: "Intimate batches, modest-friendly environment and coaches who respect your pace, your privacy and your journey.", num: "02" },
  { icon: Award, title: "RESULT-FOCUSED TRAINING", copy: "Structured strength, fat-loss and conditioning programs tracked week after week — so progress is never left to chance.", num: "03" },
  { icon: Flame, title: "CONFIDENCE THROUGH STRENGTH", copy: "Every rep rewires self-belief. Walk taller, feel powerful and carry KCAL VENUS confidence into every part of life.", num: "04" },
];

function Why() {
  return (
    <Section className="bg-coal" id="why">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-burgundy/20 blur-[130px]" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Why KCAL VENUS</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-tight text-ivory">BUILT FOR HER.<br /><span className="text-gold-metallic">BUILT DIFFERENT.</span></h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm font-light leading-relaxed tracking-wide text-ivory/60">Not a crowded co-ed floor. Not a generic gym. KCAL VENUS FITNESS is a luxury women-only studio where every detail — lighting, coaching, batches — serves one goal: her transformation.</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }} className="card-glow glass group relative overflow-hidden p-8">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/25" />
              <span className="font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-gold/20">{c.num}</span>
              <c.icon size={30} className="mt-4 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-bold tracking-[0.14em] text-ivory">{c.title}</h3>
              <div className="gold-line my-5 w-12 transition-all duration-500 group-hover:w-full" />
              <p className="text-sm font-light leading-relaxed text-ivory/65">{c.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================== EXPERIENCE RAIL ============================== */
const STEPS = [
  { word: "TRAIN", img: "/images/train.jpg", copy: "Structured coaching, perfect form, progressive overload." },
  { word: "MOVE", img: "/images/move.jpg", copy: "Mobility, rhythm and functional movement that frees you." },
  { word: "SWEAT", img: "/images/sweat.jpg", copy: "Conditioning that burns doubt along with calories." },
  { word: "GROW", img: "/images/grow.jpg", copy: "Strength that compounds — week after week." },
  { word: "TRANSFORM", img: "/images/transform.jpg", copy: "A new posture, a new mindset, a new you." },
];

function Experience() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Eyebrow>The KCAL VENUS Experience</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-tight text-ivory">FIVE ACTS. <span className="text-gold-metallic">ONE TRANSFORMATION.</span></h2>
      </div>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-12">
        {STEPS.map((s, i) => (
          <motion.div key={s.word} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }} className="group relative h-[480px] w-[300px] shrink-0 snap-center overflow-hidden border border-gold/25 md:w-[340px]">
            <img src={s.img} alt={`${s.word} — women training at KCAL VENUS FITNESS`} loading="lazy" className="duotone h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
            <span className="absolute left-5 top-5 font-display text-sm tracking-[0.4em] text-goldbright">0{i + 1}</span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-3xl font-black tracking-[0.1em] text-ivory transition-colors group-hover:text-goldbright">{s.word}</p>
              <div className="gold-line my-4 w-10 transition-all duration-500 group-hover:w-24" />
              <p className="text-sm font-light leading-relaxed text-ivory/70">{s.copy}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-goldbright to-gold transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
        {/* end card */}
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex h-[480px] w-[300px] shrink-0 snap-center flex-col items-center justify-center gap-5 border border-gold/40 bg-gradient-to-b from-burgundy/40 to-ink p-8 text-center transition-colors hover:border-goldbright md:w-[340px]">
          <Crown size={36} className="text-gold" />
          <p className="font-display text-2xl font-bold tracking-[0.12em] text-ivory">BEGIN YOUR<br />ACT ONE</p>
          <span className="btn-sheen bg-gradient-to-r from-mutedgold via-gold to-goldbright px-7 py-3 text-[0.62rem] font-bold tracking-[0.3em] text-ink">JOIN NOW</span>
        </a>
      </div>
      <p className="mt-6 px-6 text-[0.62rem] tracking-[0.4em] text-ivory/35 md:px-12">SWIPE / SCROLL →</p>
    </section>
  );
}

/* ============================== OFFER ============================== */
function Offer() {
  return (
    <section className="grain relative overflow-hidden py-24 md:py-36" style={{ background: "radial-gradient(90% 90% at 50% 10%, #8d1630 0%, #6e1025 34%, #1c0509 68%, #050505 100%)" }}>
      <div className="light-beam" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-3 border border-goldbright/60 bg-black/40 px-6 py-2.5 text-[0.62rem] font-semibold tracking-[0.42em] text-goldbright backdrop-blur-md"><CalendarCheck size={14} /> SPECIAL OFFER</p>
        </Reveal>
        <h2 className="mt-8 font-display font-black leading-none">
          <span className="mt-2 block text-[clamp(1.2rem,3vw,2.2rem)] font-bold tracking-[0.35em] text-cream">PAY FOR 6 MONTHS</span>
          <span className="mt-4 block text-[clamp(2.2rem,7vw,5.2rem)] text-gold-metallic drop-shadow-[0_10px_50px_rgba(212,175,55,0.35)]">GET 2 MONTHS FREE</span>
        </h2>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
            <span className="gold-line flex-1" /><Star size={16} className="fill-gold text-gold" /><span className="gold-line flex-1" />
          </div>
          <p className="mt-6 text-[0.8rem] font-semibold tracking-[0.4em] text-cream">NO PRICE SHOW</p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed tracking-wide text-cream/70">This membership deal is available for women who want a strong, focused, supportive gym experience with a flexible long-term plan.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton href={whatsappLink("Hi KCAL VENUS FITNESS, I want to know more about the gym timings and membership. Please confirm availability.")} className="px-12 py-5 text-[0.78rem]">Claim Your Slot</GoldButton>
            <GhostButton href={PHONE_TEL}>Call {PHONE_DISPLAY}</GhostButton>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.62rem] tracking-[0.3em] text-cream/50">
            <span className="flex items-center gap-2"><ShieldCheck size={13} className="text-goldbright" /> WOMEN-ONLY</span>
            <span className="flex items-center gap-2"><MapPin size={13} className="text-goldbright" /> THERADI METRO</span>
            <span className="flex items-center gap-2"><HeartHandshake size={13} className="text-goldbright" /> COACHED</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== STUDIO STRIP ============================== */
function StudioStrip() {
  return (
    <Section className="bg-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <MaskImage src="/images/studio.jpg" alt="Dark luxury studio interior with premium equipment in golden light" className="h-[420px] border border-gold/25 md:h-[540px]" />
        <div>
          <Eyebrow>A Private Arena</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight text-ivory">NOT A CROWDED FLOOR.<br /><span className="text-gold-metallic">A CURATED STUDIO.</span></h2>
          <p className="mt-6 max-w-lg text-[0.95rem] font-light leading-relaxed tracking-wide text-ivory/65">Premium equipment, moody cinematic lighting, intimate batches. Every session at KCAL VENUS FITNESS feels personal — because every detail is built around your comfort and progress.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {["25", "100%", "12"].map((v, i) => (
              <div key={i} className="border border-gold/20 bg-white/[0.02] p-5 text-center">
                <p className="font-display text-3xl font-bold text-gold-metallic">{v}</p>
                <p className="mt-2 text-[0.58rem] tracking-[0.3em] text-ivory/55">{["MEMBERS ONLY", "WOMEN ONLY", "MONTHS ACCESS"][i]}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <GoldButton to="/programs">Explore Programs</GoldButton>
            <GhostButton to="/about">Our Story</GhostButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================== FINAL CTA ============================== */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img src="/images/transform.jpg" alt="Confident strong woman in dramatic golden studio light" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <Eyebrow center>Your Moment</Eyebrow>
        <h2 className="mt-8 font-display text-[clamp(2.2rem,6vw,4.6rem)] font-black leading-[1.02] text-ivory">YOUR STRONGER<br />CHAPTER <span className="text-gold-metallic">STARTS HERE.</span></h2>
        <p className="mx-auto mt-6 max-w-xl font-editorial text-xl italic text-ivory/75">Twenty-five women will claim this year. One of them could be you.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GoldButton href={whatsappLink()} className="px-12 py-5">Join KCAL VENUS</GoldButton>
          <GhostButton href={DIRECTIONS_URL}>Visit The Studio</GhostButton>
        </div>
        <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.32em] text-ivory/55 hover:text-goldbright"><Star size={13} className="text-gold" /> READ GOOGLE REVIEWS</a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandStatement />
      <Why />
      <Experience />
      <Offer />
      <StudioStrip />
      {/* mini nav to other pages */}
      <section className="border-t border-gold/15 bg-[#070607] py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
          <span className="w-full text-center text-[0.62rem] tracking-[0.45em] text-ivory/40">CONTINUE THE STORY</span>
          {["ABOUT", "PROGRAMS", "TRANSFORMATION", "CONTACT"].map((l) => (
            <Link key={l} to={`/${l.toLowerCase()}`} className="group flex items-center gap-2 border border-gold/25 px-6 py-3 text-[0.65rem] tracking-[0.3em] text-ivory/75 transition-all hover:border-goldbright hover:text-goldbright">{l} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
