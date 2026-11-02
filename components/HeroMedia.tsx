"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Img } from "@/lib/media";

/**
 * Photo du hero (image LCP, préchargée) + courte boucle vidéo du même moment,
 * chargée seulement après le rendu et jamais si l'utilisateur préfère réduire les animations.
 */
export function HeroMedia({ image, alt, video }: { image: Img; alt: string; video: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || /2g|3g/.test(conn?.effectiveType ?? "")) return;
    // La vidéo (≈ 0,7 Mo) arrive bien après le chargement, pour ne rien retarder
    let t: ReturnType<typeof setTimeout>;
    const start = () => (t = setTimeout(() => setSrc(video), 2500));
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", start);
    };
  }, [video]);

  return (
    <>
      <Image src={image.src} alt={alt} width={image.width} height={image.height} preload sizes="(min-width: 1024px) 50vw, 100vw" quality={80} className="absolute inset-0 h-full w-full object-cover" />
      {src && (
        <video
          ref={ref}
          src={src}
          muted
          loop
          autoPlay
          playsInline
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${playing ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
