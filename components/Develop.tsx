"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Photo qui passe du sépia à la couleur quand elle entre à l'écran, comme un tirage qui se développe. */
export function Develop({ children, className = "", eager = false }: { children: ReactNode; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (eager) {
      const t = setTimeout(() => el.setAttribute("data-developed", ""), 150);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.setAttribute("data-developed", "");
        io.disconnect();
      },
      { rootMargin: "0px 0px -18% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div ref={ref} className={`develop ${className}`}>
      {children}
    </div>
  );
}
