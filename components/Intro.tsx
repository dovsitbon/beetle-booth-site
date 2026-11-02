"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CameraShapes, CarShapes } from "@/components/Logo";

const KEY = "beetlebooth-intro";
const EASE = [0.16, 1, 0.3, 1] as const;
const DEVELOP = { opacity: 1, filter: "blur(0px) sepia(0)" };
// Tirage « fantôme » à peine visible dès le premier rendu (et pas à opacité 0, pour que le LCP reste immédiat)
const UNDEVELOPED = { opacity: 0.14, filter: "blur(8px) sepia(1)" };

/**
 * Ouverture (≈ 2,4 s, une fois par session) : la Coccinelle entre dans le sens de lecture,
 * l'appareil sur trépied apparaît, flash d'appareil ancien, puis le logo « se développe ».
 * En LTR toute l'illustration est retournée pour que la voiture roule de gauche à droite.
 */
export function Intro({ skipLabel, rtl }: { skipLabel: string; rtl: boolean }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- décision unique au montage
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 2150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (show) return;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  }, [show]);

  return (
    <AnimatePresence onExitComplete={() => document.documentElement.classList.add("intro-seen")}>
      {show && (
        <motion.div
          key="intro"
          className="intro-curtain flex items-center justify-center overflow-hidden text-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        >
          <div aria-hidden="true" className="intro-grain absolute inset-0" />
          <div className="relative flex flex-col items-center" aria-hidden="true">
            <div className="relative aspect-[244/90] w-[min(78vw,420px)]" style={rtl ? undefined : { transform: "scaleX(-1)" }}>
              <motion.svg
                viewBox="8 14 244 90"
                className="absolute inset-0 h-full w-full overflow-visible"
                initial={{ x: "70vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: EASE }}
              >
                <motion.g initial={{ rotate: 0 }} animate={{ rotate: [0, -1.2, 0.6, 0] }} transition={{ duration: 0.5, delay: 0.85 }} style={{ originX: "110px", originY: "99px" }}>
                  <CarShapes />
                </motion.g>
              </motion.svg>
              <motion.svg
                viewBox="8 14 244 90"
                className="absolute inset-0 h-full w-full overflow-visible"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.85, ease: EASE }}
              >
                <CameraShapes />
                <motion.circle cx="232" cy="29" r="5" fill="#fffdf6" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.4, delay: 1.2 }} />
              </motion.svg>
            </div>
            <motion.p
              className="mt-8 font-[family-name:var(--font-playfair)] text-[1.65rem] tracking-[0.2em] text-ink md:text-[2.1rem]"
              dir="ltr"
              initial={UNDEVELOPED}
              animate={DEVELOP}
              transition={{ duration: 0.75, delay: 1.35, ease: "easeOut" }}
            >
              BEETLE BOOTH
            </motion.p>
            <motion.p
              className="type mt-3 text-[0.62rem] tracking-[0.28em] text-choco md:text-[0.7rem]"
              dir="ltr"
              initial={UNDEVELOPED}
              animate={DEVELOP}
              transition={{ duration: 0.75, delay: 1.5, ease: "easeOut" }}
            >
              VINTAGE STYLE • MODERN MEMORIES
            </motion.p>
          </div>
          {/* Flash blanc d'appareil ancien */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#fffdf6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.92, 0] }}
            transition={{ duration: 0.45, delay: 1.2, times: [0, 0.18, 1] }}
          />
          <button type="button" onClick={() => setShow(false)} className="eyebrow-latin absolute end-5 bottom-5 p-3 text-muted transition-colors hover:text-ink">
            {skipLabel}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
