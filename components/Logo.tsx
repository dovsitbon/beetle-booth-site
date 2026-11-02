// Logo Beetle Booth redessiné en SVG d'après l'illustration Instagram :
// la Coccinelle crème vue de profil (nez à gauche) et l'appareil ancien sur trépied.
// Les couleurs passent par des variables CSS pour suivre le thème (voir globals.css).

const STROKE = { stroke: "var(--logo-line, #4A3426)", strokeWidth: 1.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

/** La Coccinelle seule, viewBox 0 0 220 102 (sol à y≈99). */
export function BeetleCar({ className, title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="8 12 204 92" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <CarShapes />
    </svg>
  );
}

export function CarShapes() {
  return (
    <g {...STROKE}>
      <ellipse cx="110" cy="99.5" rx="96" ry="2.2" fill="var(--logo-shadow, #D6BE9A)" stroke="none" opacity=".7" />
      <path fill="var(--logo-body, #EADBC4)" d="M24 80 C21 70 30 61 48 57 C62 54 76 52 86 47 L99 28 C112 17 146 15 160 27 C176 39 194 54 199 70 L200 80 Z" />
      <path fill="var(--logo-fender, #E3D0B2)" d="M27 81 C27 64 44 58 56 58 C70 58 80 66 82 81 Z" />
      <path fill="var(--logo-fender, #E3D0B2)" d="M139 81 C140 62 156 56 168 57 C182 58 194 67 196 81 Z" />
      <path fill="var(--logo-shadow, #D6BE9A)" d="M80 80 L141 80 L141 84 L80 84 Z" />
      <path fill="var(--logo-glass, #F4EBDD)" d="M93 46 L104 31 C112 25 122 23 132 23 L132 46 Z" />
      <path fill="var(--logo-glass, #F4EBDD)" d="M136 23 C146 23 154 28 160 35 L165 46 L136 46 Z" />
      <path fill="none" d="M90 50 L90 78 M134 23 L134 78 M118 55 L126 55" />
      <ellipse cx="36" cy="64" rx="4" ry="5.5" fill="var(--logo-glass, #F4EBDD)" />
      <path fill="var(--logo-glass, #F4EBDD)" d="M15 78 C15 75 18 74 22 74 L30 74 L30 81 L22 81 C18 81 15 80 15 78 Z" />
      <path fill="var(--logo-glass, #F4EBDD)" d="M193 74 L202 74 C206 74 208 76 208 78 C208 80 206 81 202 81 L193 81 Z" />
      <path fill="var(--logo-accent, #9C4A32)" d="M186 61 C189 61 191 64 191 67 L187 67 Z" />
      <Wheel cx={54} />
      <Wheel cx={167} />
      <path fill="none" strokeWidth=".7" d="M100 70 L106 64 M106 72 L114 64 M112 74 L122 64 M150 70 L156 64 M156 72 L162 66 M44 70 L48 66 M150 62 L154 58" />
    </g>
  );
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g className="beetle-wheel" style={{ transformOrigin: `${cx}px 85px` }}>
      <circle cx={cx} cy="85" r="13.5" fill="var(--logo-line, #4A3426)" />
      <circle cx={cx} cy="85" r="8.5" fill="var(--logo-glass, #F4EBDD)" />
      <circle cx={cx} cy="85" r="4" fill="var(--logo-shadow, #D6BE9A)" />
      <path d={`M${cx - 8.5} 85 H${cx + 8.5} M${cx} 76.5 V93.5`} strokeWidth=".6" />
    </g>
  );
}

/** Appareil ancien sur trépied, coordonnées du logo complet (x 218–246). */
export function CameraShapes() {
  return (
    <g {...STROKE}>
      <path fill="none" d="M232 66 L220 100 M232 66 L232 100 M232 66 L244 100 M224 90 L240 90" />
      <rect x="221" y="44" width="22" height="22" rx="2.5" fill="var(--logo-camera, #A07850)" />
      <rect x="225" y="48" width="10" height="9" rx="1" fill="var(--logo-body, #EADBC4)" />
      <circle cx="239" cy="61" r="1.6" fill="var(--logo-body, #EADBC4)" />
      <path fill="none" d="M232 44 L232 38" />
      <circle cx="232" cy="29" r="9" fill="var(--logo-body, #EADBC4)" />
      <circle cx="232" cy="29" r="5" fill="var(--logo-glass, #F4EBDD)" />
    </g>
  );
}

/** Illustration complète (voiture + appareil), viewBox 0 0 260 104. */
export function LogoIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="8 14 244 90" className={className} aria-hidden="true">
      <CarShapes />
      <CameraShapes />
    </svg>
  );
}

/** Version horizontale du header : la Coccinelle + « BEETLE BOOTH ». */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`} translate="no" dir="ltr">
      <BeetleCar className="h-[1.35em] w-auto shrink-0" />
      <span className="font-[family-name:var(--font-playfair)] text-[1em] tracking-[0.2em] whitespace-nowrap">BEETLE BOOTH</span>
    </span>
  );
}
