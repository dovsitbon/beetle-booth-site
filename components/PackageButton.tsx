"use client";

import type { ReactNode } from "react";

/** Lien vers le formulaire qui présélectionne la formule choisie. */
export function PackageButton({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <a href="#booking" className={className} onClick={() => window.dispatchEvent(new CustomEvent("bb:package", { detail: id }))}>
      {children}
    </a>
  );
}
