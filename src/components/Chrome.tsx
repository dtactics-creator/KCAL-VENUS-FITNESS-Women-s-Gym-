import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Star,
  X,
} from "lucide-react";

import Logo from "./Logo";

import {
  DIRECTIONS_URL,
  NAV_LINKS,
  OFFER_PRICE,
  PHONE_DISPLAY,
  PHONE_TEL,
  REVIEWS_URL,
  WHATSAPP_NUMBER,
  whatsappLink,
} from "../lib/site";

/* ================= LUXURY PRELOADER ================= */

export function Preloader({ done }: { done: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  const startVideoWithSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;

    video
      .play()
      .then(() => {
        setNeedsInteraction(false);
      })
      .catch(() => {
        setNeedsInteraction(true);
      });
  };

  const skipVideo = () => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    done();
  };

  return (
    <motion.div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        overflow-hidden
        bg-black/20
        backdrop-blur-[1px]
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-black/15
          via-transparent
          to-black/25
        "
      />

      {/* GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[75vh]
          w-[75vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/5
          blur-[120px]
        "
      />

      {/* INTRO VIDEO */}
      <motion.video
        ref={videoRef}
        src="/images/video3%20(9).mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        onCanPlay={startVideoWithSound}
        onPlay={() => setNeedsInteraction(false)}
        onError={done}
        onEnded={done}
        className="
          relative
          z-10
          max-h-[82vh]
          max-w-[92vw]
          object-contain

          border
          border-goldbright

          shadow-[0_0_0_1px_rgba(212,175,55,0.30),0_0_25px_rgba(212,175,55,0.15),0_25px_80px_rgba(0,0,0,0.45)]

          rounded-[2px]
        "
        aria-label="FEMAURA introduction video"
      />

      {/* SKIP VIDEO BUTTON */}
      <motion.button
        type="button"
        onClick={skipVideo}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="
          absolute
          bottom-8
          right-6
          z-30

          flex
          items-center
          gap-3

          border
          border-goldbright/70

          bg-black/45
          px-5
          py-3

          text-[0.65rem]
          font-semibold
          tracking-[0.25em]
          text-goldbright

          backdrop-blur-md

          transition-all
          duration-300

          hover:border-goldbright
          hover:bg-goldbright
          hover:text-ink
          hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
        "
        aria-label="Skip introduction video"
      >
        SKIP INTRO

        <ArrowUp
          size={14}
          className="rotate-45"
        />
      </motion.button>

      {/* PLAY WITH SOUND */}
      <AnimatePresence>
        {needsInteraction && (
          <motion.button
            type="button"
            onClick={startVideoWithSound}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              -translate-x-1/2
              -translate-y-1/2

              border
              border-goldbright/70

              bg-black/45
              px-8
              py-4

              text-[0.7rem]
              font-semibold
              tracking-[0.3em]
              text-goldbright

              backdrop-blur-md

              transition-all
              duration-300

              hover:scale-105
              hover:bg-black/65
              hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            "
          >
            PLAY WITH SOUND
          </motion.button>
        )}
      </AnimatePresence>

      {/* BOTTOM CINEMATIC FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-32
          bg-gradient-to-t
          from-black/30
          to-transparent
        "
      />
    </motion.div>
  );
}

/* ================= SCROLL PROGRESS ================= */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });

  return (
    <div
      className="
        pointer-events-none
        fixed
        right-3
        top-1/2
        z-[70]
        hidden
        h-56
        w-px
        -translate-y-1/2
        bg-white/10
        md:block
      "
    >
      <motion.div
        className="
          h-full
          w-full
          origin-top
          bg-gradient-to-b
          from-mutedgold
          via-goldbright
          to-richred
        "
        style={{ scaleY }}
      />
    </div>
  );
}

/* ================= NAVBAR ================= */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[80]
          transition-all
          duration-500

          ${
            scrolled
              ? "glass-deep shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)]"
              : "bg-gradient-to-b from-black/70 to-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between
            px-5
            md:px-10
          "
        >
          <Link to="/" aria-label="FEMAURA Home">
            <Logo emblemSize={42} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    py-2
                    text-[0.7rem]
                    font-medium
                    tracking-[0.32em]
                    transition-colors

                    ${
                      isActive
                        ? "text-goldbright"
                        : "text-ivory/75 hover:text-ivory"
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}

                    <span
                      className={`
                        absolute
                        -bottom-0.5
                        left-0
                        h-px
                        bg-gradient-to-r
                        from-mutedgold
                        to-goldbright
                        transition-all
                        duration-300

                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="
                btn-sheen
                ml-2
                bg-gradient-to-r
                from-mutedgold
                via-gold
                to-goldbright
                px-6
                py-3
                text-[0.65rem]
                font-semibold
                tracking-[0.28em]
                text-ink

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_16px_40px_-12px_rgba(212,175,55,0.7)]
              "
            >
              JOIN NOW
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-gold/40
              text-goldbright
              lg:hidden
            "
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[90]
              flex
              flex-col
              bg-ink/97
              backdrop-blur-xl
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="light-beam" />

            <div
              className="
                flex
                h-[76px]
                items-center
                justify-between
                px-5
              "
            >
              <Logo emblemSize={38} />

              <button
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-gold/40
                  text-goldbright
                "
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
                gap-2
                px-8
              "
            >
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.5,
                  }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `
                        block
                        py-3
                        text-center
                        font-display
                        text-3xl
                        font-semibold
                        tracking-[0.18em]

                        ${
                          isActive
                            ? "text-gold-metallic"
                            : "text-ivory/85"
                        }
                      `
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  gap-4
                "
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    btn-sheen
                    bg-gradient-to-r
                    from-mutedgold
                    via-gold
                    to-goldbright
                    px-10
                    py-4
                    text-[0.7rem]
                    font-semibold
                    tracking-[0.3em]
                    text-ink
                  "
                >
                  JOIN KCAL VENUS
                </a>

                <a
                  href={PHONE_TEL}
                  className="
                    text-[0.7rem]
                    tracking-[0.3em]
                    text-goldbright
                  "
                >
                  {PHONE_DISPLAY}
                </a>
              </motion.div>
            </nav>

            <p
              className="
                pb-8
                text-center
                text-[0.6rem]
                tracking-[0.4em]
                text-ivory/40
              "
            >
              STRONG HAS NO DRESS CODE
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= FLOATING ACTIONS ================= */

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* VIDEO BUTTON */}
      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="
          group
          fixed
          bottom-[9.25rem]
          right-4
          z-[70]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-gold/70
          bg-ink
          shadow-[0_12px_35px_-8px_rgba(0,0,0,0.9)]
          transition-transform

          hover:scale-110

          md:bottom-40
          md:right-8
          md:h-14
          md:w-14
        "
        aria-label="Watch gym video"
        title="Watch gym video"
      >
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-goldbright
            bg-gold/10
            text-goldbright
            transition-transform

            group-hover:scale-110
            group-hover:bg-gold
            group-hover:text-ink
          "
        >
          <Play size={14} fill="currentColor" />
        </span>
      </button>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="
              fixed
              inset-0
              z-[95]
              flex
              items-center
              justify-center
              bg-black/85
              p-5
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="
                relative
                w-full
                max-w-3xl
                border
                border-gold/50
                bg-ink
                p-2
              "
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-gold/60
                  bg-black/70
                  text-goldbright
                "
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              <video
                src="/images/video3 (9).mp4"
                controls
                autoPlay
                playsInline
                className="
                  max-h-[80vh]
                  w-full
                  object-contain
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP */}
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2.8,
          duration: 0.6,
        }}
        whileHover={{
          scale: 1.08,
        }}
        className="
          group
          fixed
          bottom-6
          right-4
          z-[70]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-gold/60
          bg-gradient-to-br
          from-[#0d3b26]
          to-[#071f14]
          text-[#4ce080]
          shadow-[0_12px_35px_-8px_rgba(0,0,0,0.9)]

          md:bottom-8
          md:right-8
        "
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />

        <span
          className="
            pointer-events-none
            absolute
            right-full
            mr-3
            hidden
            whitespace-nowrap
            border
            border-[#4ce080]/40
            bg-ink
            px-3
            py-2
            text-[0.6rem]
            font-semibold
            tracking-[0.18em]
            text-[#4ce080]

            group-hover:block
          "
        >
          WHATSAPP US
        </span>
      </motion.a>

      {/* PHONE */}
      <motion.a
        href={PHONE_TEL}
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2.95,
          duration: 0.6,
        }}
        whileHover={{
          scale: 1.08,
        }}
        className="
          group
          fixed
          bottom-[5.25rem]
          right-4
          z-[70]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-gold/50
          bg-gradient-to-br
          from-burgundy
          to-richred
          text-ivory
          shadow-[0_12px_35px_-8px_rgba(0,0,0,0.9)]

          md:bottom-[5.75rem]
          md:right-8
        "
        aria-label={`Call KCAL VENUS FITNESS at ${PHONE_DISPLAY}`}
        title={`Call KCAL VENUS FITNESS: ${PHONE_DISPLAY}`}
      >
        <Phone size={22} />

        <span
          className="
            pointer-events-none
            absolute
            right-full
            mr-3
            hidden
            whitespace-nowrap
            border
            border-gold/40
            bg-ink
            px-3
            py-2
            text-[0.6rem]
            font-semibold
            tracking-[0.18em]
            text-goldbright

            group-hover:block
          "
        >
          CALL US
        </span>
      </motion.a>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 16,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              fixed
              bottom-56
              right-4
              z-[70]
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-gold/60
              bg-ink/85
              text-goldbright
              backdrop-blur-md
              transition-colors

              hover:bg-gold
              hover:text-ink

              md:bottom-60
              md:right-8
            "
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= FOOTER ================= */

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-gold/20
        bg-[#030303]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-80
          w-[60rem]
          -translate-x-1/2
          rounded-full
          bg-burgundy/25
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-10
          pt-16
          md:px-10
          md:pt-20
        "
      >
        <div
          className="
            grid
            gap-12
            md:grid-cols-[1.3fr_1fr_1fr]
          "
        >
          {/* BRAND */}
          <div>
            <Logo
              variant="stacked"
              emblemSize={64}
              className="
                items-start
                text-left
                [&>span:last-child]:justify-start
              "
            />

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                font-light
                leading-relaxed
                tracking-wide
                text-ivory/60
              "
            >
              A premium women-only fitness studio in Theradi Metro, Tiruvottiyur, Chennai —
              built for strength, confidence, comfort and transformation.
            </p>

            <div
              className="
                mt-6
                space-y-2
                text-sm
                tracking-wider
                text-ivory/70
              "
            >
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-gold" />
                Theradi Metro, Tiruvottiyur, Chennai
              </p>

              <a
                href={PHONE_TEL}
                className="
                  flex
                  items-center
                  gap-2
                  text-goldbright
                  hover:underline
                "
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <p
              className="
                text-[0.65rem]
                font-semibold
                tracking-[0.4em]
                text-gold
              "
            >
              EXPLORE
            </p>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-3
                text-sm
                tracking-[0.18em]
                text-ivory/65
              "
            >
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="
                    transition-colors
                    hover:text-goldbright
                  "
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p
              className="
                text-[0.65rem]
                font-semibold
                tracking-[0.4em]
                text-gold
              "
            >
              CONNECT
            </p>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-3
                text-sm
                tracking-[0.18em]
                text-ivory/65
              "
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-goldbright"
              >
                WHATSAPP US
              </a>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-goldbright"
              >
                GET DIRECTIONS
              </a>

              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  hover:text-goldbright
                "
              >
                GOOGLE REVIEWS
                <Star size={13} className="text-gold" />
              </a>

              <a
                href={PHONE_TEL}
                className="hover:text-goldbright"
              >
                CALL {PHONE_DISPLAY}
              </a>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="
                btn-sheen
                mt-7
                inline-block
                bg-gradient-to-r
                from-mutedgold
                via-gold
                to-goldbright
                px-7
                py-3.5
                text-[0.65rem]
                font-semibold
                tracking-[0.3em]
                text-ink
              "
            >
              CLAIM YOUR SLOT
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className="
            mt-14
            border-t
            border-gold/15
            pt-8
            text-center
          "
        >
          <p
            className="
              font-display
              text-lg
              font-semibold
              tracking-[0.3em]
              text-gold-metallic
              md:text-xl
            "
          >
            STRONG HAS NO DRESS CODE.
          </p>

          <p
            className="
              mt-4
              text-xs
              font-light
              tracking-wider
              text-ivory/45
            "
          >
            © 2026 KCAL VENUS FITNESS. All Rights Reserved.
          </p>

          <p
            className="
              mt-2
              text-xs
              tracking-wider
              text-ivory/45
            "
          >
            Designed by{" "}
            <a
              href="https://dtacticsit.com/"
              target="_blank"
              rel="noreferrer"
              className="
                text-gold
                hover:text-goldbright
                hover:underline
              "
            >
              DTacticsit.in
            </a>
          </p>

          <p
            className="
              mt-3
              text-[0.6rem]
              tracking-[0.25em]
              text-ivory/30
            "
          >
            KCAL VENUS FITNESS • WOMEN'S GYM CHENNAI • THERADI METRO • TIRUVOTTIYUR
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= WHATSAPP ================= */

export function useWhatsApp() {
  return whatsappLink;
}

export function wa() {
  return whatsappLink();
}

export { WHATSAPP_NUMBER };