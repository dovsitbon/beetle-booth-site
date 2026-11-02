"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import site from "@/data/site.json";
import { Logo } from "@/components/Logo";
import { LangSwitch } from "@/components/LangSwitch";
import { CalendarIcon, CloseIcon, InstagramIcon, MenuIcon } from "@/components/icons";
import { useLocale } from "@/components/providers";

export function Header() {
  const { lang, d } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (menu) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = menu ? "hidden" : "";
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  // En haut de page, sur mobile, le header flotte sur la photo du hero (texte crème)
  const home = `/${lang}`;
  const onPhoto = usePathname() === home && !scrolled && !menu;
  const links = [
    { href: `${home}#experience`, label: d.nav.experience },
    { href: `${home}#packages`, label: d.nav.packages },
    { href: `${home}#events`, label: d.nav.events },
    { href: `${home}#story`, label: d.nav.story },
    { href: `${home}#contact`, label: d.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-700 ${
          onPhoto ? "border-b border-transparent text-cream lg:border-line lg:bg-cream/95 lg:text-ink" : "border-b border-line bg-cream/95 text-ink backdrop-blur-sm"
        }`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-10 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink">
          {d.nav.skip}
        </a>
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 md:h-20 md:px-10">
          <div className="flex items-center">
            <button type="button" className="-m-2 p-2 xl:hidden" onClick={() => setMenu(true)} aria-label={d.nav.menu} aria-expanded={menu}>
              <MenuIcon />
            </button>
            <nav className="hidden items-center gap-7 xl:flex 2xl:gap-9" aria-label={d.nav.menu}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="nav-link whitespace-nowrap transition-opacity hover:opacity-60">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href={home} className="text-[0.8rem] sm:text-[0.95rem]">
            <Logo />
            <span className="sr-only">{d.nav.home}</span>
          </Link>

          <div className="flex items-center justify-end gap-5 md:gap-7">
            <LangSwitch lang={lang} label={d.nav.language} className="hidden xl:flex" />
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="-m-2 hidden p-2 transition-opacity hover:opacity-60 xl:block" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <Link
              href={`${home}#booking`}
              className={`flex min-h-10 items-center gap-2 border px-3 transition-colors duration-500 md:px-4 ${
                onPhoto ? "border-cream/70 hover:bg-cream hover:text-ink lg:border-ink/60 lg:hover:bg-ink lg:hover:text-cream" : "border-ink/60 hover:bg-ink hover:text-cream"
              }`}
            >
              <CalendarIcon className="h-4 w-4" />
              <span className="nav-link hidden sm:inline">{d.nav.checkDate}</span>
              <span className="nav-link sm:hidden">{d.nav.checkDateShort}</span>
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col overscroll-contain bg-cream text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            role="dialog"
            aria-modal="true"
            aria-label={d.nav.menu}
          >
            <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4">
              <button type="button" className="-m-2 justify-self-start p-2" onClick={() => setMenu(false)} aria-label={d.nav.close}>
                <CloseIcon />
              </button>
              <Logo className="text-[0.8rem]" />
              <span />
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-6" aria-label={d.nav.menu}>
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07 * i + 0.1, duration: 0.6 }}>
                  <Link href={l.href} onClick={() => setMenu(false)} className="display text-4xl">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-4">
                <Link href={`${home}#booking`} onClick={() => setMenu(false)} className="btn-fill">
                  <CalendarIcon className="h-4 w-4" />
                  {d.nav.checkDate}
                </Link>
              </motion.div>
            </nav>
            <div className="flex items-center justify-between border-t border-line px-6 py-5">
              <LangSwitch lang={lang} label={d.nav.language} />
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm">
                <InstagramIcon />
                <span dir="ltr">{site.instagramHandle}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
