"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Develop } from "@/components/Develop";
import { ChevronIcon, CloseIcon } from "@/components/icons";
import type { Img } from "@/lib/media";

type Labels = { open: string; close: string; prev: string; next: string };

// Légère inclinaison des tirages, comme posés à la main sur une table
const TILT = [-1.6, 1.2, -0.6, 1.8, -1.1, 0.7, -1.9, 1.4, -0.4, 1, -1.3, 0.5, 1.6, -0.8];

export function Gallery({ items, labels }: { items: (Img & { alt: string })[]; labels: Labels }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const rtl = document.documentElement.dir === "rtl";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index === null ? null : items[index];

  return (
    <>
      <ul className="columns-2 gap-4 sm:gap-6 md:columns-3 lg:columns-4 lg:gap-8">
        {items.map((it, i) => (
          <li key={it.src} className="mb-5 break-inside-avoid sm:mb-7 lg:mb-9" style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}>
            <button type="button" onClick={() => open(i)} className="print group block w-full cursor-zoom-in" aria-label={`${labels.open}: ${it.alt}`}>
              <Develop className="overflow-hidden">
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={it.width}
                  height={it.height}
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                  quality={70}
                  className="h-auto w-full transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                />
              </Develop>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center overscroll-contain bg-ink/92 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={close}
          >
            <motion.figure
              key={current.src}
              className="print relative max-h-full !pb-12"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="90vw" quality={80} className="h-auto max-h-[78svh] w-auto max-w-[86vw]" />
              <figcaption className="type absolute inset-x-3 bottom-3 truncate text-center text-xs text-muted">{current.alt}</figcaption>
            </motion.figure>
            <button ref={closeRef} type="button" onClick={close} className="absolute end-3 top-3 p-3 text-cream" aria-label={labels.close}>
              <CloseIcon className="h-6 w-6" />
            </button>
            <button type="button" onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute start-1 top-1/2 -translate-y-1/2 p-3 text-cream md:start-4" aria-label={labels.prev}>
              <ChevronIcon className="h-7 w-7 -scale-x-100 rtl:scale-x-100" />
            </button>
            <button type="button" onClick={(e) => (e.stopPropagation(), step(1))} className="absolute end-1 top-1/2 -translate-y-1/2 p-3 text-cream md:end-4" aria-label={labels.next}>
              <ChevronIcon className="h-7 w-7 rtl:-scale-x-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
