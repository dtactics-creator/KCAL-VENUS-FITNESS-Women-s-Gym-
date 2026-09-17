import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------- scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- word-by-word cinematic text reveal ---------------- */
export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: 26, rotateX: -50 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ---------------- masked image reveal ---------------- */
export function MaskImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(12% 8% 12% 8%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: EASE }}
      />
    </motion.div>
  );
}

/* ---------------- editorial eyebrow label ---------------- */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <Reveal>
      <p className={`flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.45em] text-gold ${center ? "justify-center" : ""}`}>
        <span className="gold-line w-10" />
        {children}
        {center && <span className="gold-line w-10" />}
      </p>
    </Reveal>
  );
}

/* ---------------- CTA buttons ---------------- */
export function GoldButton({
  to,
  href,
  children,
  onClick,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const cls = `btn-sheen group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-mutedgold via-gold to-goldbright px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-12px_rgba(212,175,55,0.65)] ${className}`;
  const inner = (
    <>
      <span className="relative z-[2]">{children}</span>
      <ArrowRight size={15} className="relative z-[2] transition-transform duration-300 group-hover:translate-x-1.5" />
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
}

export function GhostButton({
  to,
  href,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-3 border border-gold/50 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.3em] text-goldbright transition-all duration-300 hover:-translate-y-0.5 hover:border-goldbright hover:bg-gold/10 hover:shadow-[0_14px_40px_-14px_rgba(212,175,55,0.5)] ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

/* ---------------- limited slot badge ---------------- */
export function SlotBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] ${dark ? "border-gold/60 bg-ink/60 text-goldbright" : "border-richred/60 bg-burgundy/25 text-cream"}`}>
      <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-goldbright" />
      Limited Slots — Only 25 Members
    </span>
  );
}

/* ---------------- section shell ---------------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden px-6 py-24 md:px-12 md:py-32 ${className}`}>
      {children}
    </section>
  );
}
