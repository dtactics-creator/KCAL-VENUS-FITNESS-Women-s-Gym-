import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Instagram, MapPin, MessageCircle, Navigation, Phone, Send, Target } from "lucide-react";
import Logo from "../components/Logo";
import { Eyebrow, Reveal, Section } from "../components/ui";
import { ADDRESS_LINES, ADDRESS_SHORT, DIRECTIONS_URL, INSTAGRAM_URL, MAP_EMBED_URL, OPENING_HOURS, OFFER_PRICE, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ACTIONS = [
  { icon: Phone, label: "CALL NOW", sub: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: MessageCircle, label: "WHATSAPP", sub: "Instant reply", href: whatsappLink() },
  { icon: Navigation, label: "GET DIRECTIONS", sub: ADDRESS_SHORT, href: DIRECTIONS_URL },
  { icon: Instagram, label: "FOLLOW US", sub: "Instagram", href: INSTAGRAM_URL },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Strength Training", time: "Morning (6–10 AM)", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi KCAL VENUS FITNESS, I'm ${form.name} (${form.phone}). Goal: ${form.goal}. Preferred time: ${form.time}. ${form.message}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <>
      {/* hero */}
      <div className="grain relative flex min-h-[80svh] items-end overflow-hidden">
        <motion.img src="/images/studio.jpg" alt="Premium dark studio interior with golden equipment light" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/30 to-black/60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(50% 45% at 70% 40%, rgba(212,175,55,0.16), transparent 70%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-44 md:px-10">
          <Eyebrow>Contact — Walk In Stronger</Eyebrow>
          <h1 className="mt-6 font-display font-black leading-[0.98]">
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="block text-[clamp(2.4rem,7.4vw,5.4rem)] text-ivory">READY TO</motion.span>
            <motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.36, ease: EASE }} className="block text-[clamp(2.4rem,7.4vw,5.4rem)] text-gold-metallic">GET STRONGER?</motion.span>
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="border border-gold/50 bg-black/50 px-4 py-2 text-[0.62rem] tracking-[0.35em] text-goldbright backdrop-blur-md">KCAL VENUS FITNESS</span>
            <span className="border border-richred/60 bg-burgundy/30 px-4 py-2 text-[0.62rem] font-semibold tracking-[0.35em] text-cream backdrop-blur-md">WOMEN'S GYM</span>
          </motion.div>
        </div>
      </div>

      {/* info + form */}
      <Section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* left : studio card */}
          <div>
            <Reveal>
              <div className="glass-deep p-8 md:p-10">
                <Logo emblemSize={52} />
                <h2 className="mt-6 font-display text-2xl font-bold tracking-[0.1em] text-ivory">KCAL VENUS<br />FITNESS</h2>
                <div className="gold-line my-6 w-24" />
                <div className="space-y-4 text-sm font-light leading-relaxed tracking-wide text-ivory/70">
                  <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span>{ADDRESS_LINES.map((l) => <span key={l} className="block">{l}</span>)}</span>
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-medium text-ivory"><Clock size={17} className="shrink-0 text-gold" /> Opening hours</div>
                    <div className="space-y-1 pl-7 text-ivory/75">
                      {OPENING_HOURS.map((slot) => (
                        <div key={slot.day} className="flex items-center justify-between gap-3 text-xs tracking-[0.08em]">
                          <span>{slot.day}</span>
                          <span>{slot.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={PHONE_TEL} className="flex items-center gap-3 text-lg tracking-[0.12em] text-goldbright hover:underline"><Phone size={17} /> {PHONE_DISPLAY}</a>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {ACTIONS.map((a) => (
                    <a key={a.label} href={a.href} target={a.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-3 border border-gold/30 bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-goldbright hover:bg-gold/10">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink"><a.icon size={17} /></span>
                      <span>
                        <span className="block text-[0.62rem] font-semibold tracking-[0.24em] text-ivory">{a.label}</span>
                        <span className="block text-[0.65rem] tracking-wider text-ivory/50">{a.sub}</span>
                      </span>
                    </a>
                  ))}
                </div>
                <a href={whatsappLink("Hi KCAL VENUS FITNESS, I'd like to book a slot and know more about your gym timings and membership.")} target="_blank" rel="noreferrer" className="btn-sheen mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-mutedgold via-gold to-goldbright px-6 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-ink">BOOK YOUR SLOT</a>
              </div>
            </Reveal>
            {/* map */}
            <Reveal delay={0.1}>
              <div className="animated-gold-border mt-6 overflow-hidden">
                <iframe title="KCAL VENUS FITNESS location map — Tiruvottiyur, Chennai" src={MAP_EMBED_URL} className="h-[300px] w-full grayscale-[0.4] contrast-[1.05]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>

          {/* right : form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden border border-gold/30 bg-gradient-to-b from-[#141210] to-[#08080a] p-8 md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-burgundy/30 blur-[90px]" />
              <p className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.42em] text-gold"><Target size={15} /> ENQUIRY FORM</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ivory">CLAIM YOUR SLOT<br /><span className="text-gold-metallic">{OFFER_PRICE} / YEAR</span></h2>
              <p className="mt-3 text-sm font-light tracking-wide text-ivory/55">Fill this in — we'll open WhatsApp with your enquiry ready to send. Zero spam, just a slot conversation.</p>
              <form onSubmit={submit} className="relative mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[0.62rem] tracking-[0.32em] text-ivory/60">NAME *</label>
                    <input required value={form.name} onChange={set("name")} placeholder="Your full name" className="lux-input" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[0.62rem] tracking-[0.32em] text-ivory/60">PHONE *</label>
                    <input required value={form.phone} onChange={set("phone")} placeholder="+91 ..." inputMode="tel" className="lux-input" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[0.62rem] tracking-[0.32em] text-ivory/60">FITNESS GOAL</label>
                    <select value={form.goal} onChange={set("goal")} className="lux-input">
                      {["Strength Training", "Fat Loss & Conditioning", "Functional Fitness", "Personal Training", "Beginner Fitness", "Women's Fitness", "Not sure — guide me"].map((g) => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-[0.62rem] tracking-[0.32em] text-ivory/60">PREFERRED TIME</label>
                    <select value={form.time} onChange={set("time")} className="lux-input">
                      {["Morning (6–10 AM)", "Midday (10 AM–4 PM)", "Evening (4–9 PM)", "Weekend only"].map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[0.62rem] tracking-[0.32em] text-ivory/60">MESSAGE</label>
                  <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us about yourself, injuries, goals..." className="lux-input resize-none" />
                </div>
                <button type="submit" className="btn-sheen flex w-full items-center justify-center gap-3 bg-gradient-to-r from-mutedgold via-gold to-goldbright px-8 py-4 text-[0.72rem] font-bold tracking-[0.32em] text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-12px_rgba(212,175,55,0.65)]">
                  SUBMIT ENQUIRY <Send size={15} />
                </button>
                {sent && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 border border-gold/40 bg-gold/10 px-4 py-3 text-center text-[0.7rem] tracking-[0.2em] text-goldbright">
                    <CheckCircle2 size={15} /> OPENING WHATSAPP — WE'LL CONFIRM YOUR SLOT SHORTLY
                  </motion.p>
                )}
                <p className="text-center text-[0.62rem] tracking-[0.25em] text-ivory/35">OR CALL DIRECTLY — <a href={PHONE_TEL} className="text-goldbright hover:underline">{PHONE_DISPLAY}</a></p>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* final urgency */}
      <section className="grain relative overflow-hidden py-24 text-center md:py-32" style={{ background: "radial-gradient(80% 100% at 50% 0%, #5c1222 0%, #160509 55%, #050505 100%)" }}>
        <div className="light-beam" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="inline-block border border-goldbright/60 bg-black/40 px-6 py-2.5 text-[0.62rem] font-semibold tracking-[0.42em] text-goldbright">ONLY 25 MEMBERS</p>
            <p className="mt-8 font-display text-[clamp(2rem,5.4vw,3.8rem)] font-black leading-tight text-ivory">DON'T WAIT FOR MOTIVATION.<br /><span className="text-gold-metallic">START WITH A DECISION.</span></p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-sheen bg-gradient-to-r from-mutedgold via-gold to-goldbright px-10 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-ink">BOOK YOUR SLOT</a>
              <a href={PHONE_TEL} className="border border-gold/50 px-10 py-4 text-[0.7rem] tracking-[0.3em] text-goldbright hover:bg-gold/10">CALL {PHONE_DISPLAY}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
