import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import reviewsData from "@/data/reviews.json";
import { fill, getDict, isLocale, type Locale } from "@/lib/i18n";
import { waLink } from "@/lib/booking";
import { img, type Img } from "@/lib/media";
import { formatPrice, options, packages, pricesConfirmed } from "@/lib/packages";
import { homeJsonLd, jsonLd, pageMeta } from "@/lib/seo";
import { BookingForm } from "@/components/BookingForm";
import { Develop } from "@/components/Develop";
import { Gallery } from "@/components/Gallery";
import { HeroMedia } from "@/components/HeroMedia";
import { LogoIllustration } from "@/components/Logo";
import { PackageButton } from "@/components/PackageButton";
import { Reveal } from "@/components/Reveal";
import { CalendarIcon, GlassIcon, PlusIcon, ReceiverIcon, WhatsAppIcon } from "@/components/icons";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return { ...pageMeta(lang, "", d.meta.homeTitle, d.meta.homeDescription), title: { absolute: d.meta.homeTitle } };
}

const SERVICE_IMG: Record<string, string | null> = {
  magnets: "/media/magnets/bandes-noeuds-blancs.jpg",
  selfie: "/media/selfie-booth/borne-ring-light.jpg",
  glass: null,
  audio: null,
};
const SERVICE_ICON: Record<string, ReactNode> = { glass: <GlassIcon className="h-14 w-14" />, audio: <ReceiverIcon className="h-14 w-14" /> };

const EVENT_IMG: Record<string, string> = {
  wedding: "/media/mariages/beetle-mariage-soiree.jpg",
  mitzvah: "/media/bar-bat-mitzvah/ados-dans-beetle.jpg",
  brit: "/media/brit/brit-rishon-lezion.jpg",
  birthday: "/media/magnets/tirages-anniversaire.jpg",
  purim: "/media/bar-bat-mitzvah/enfants-dans-beetle.jpg",
  corporate: "/media/entreprise-municipal/prada-beauty.jpg",
  municipal: "/media/entreprise-municipal/tou-beav-ashkelon-installation.jpg",
  summer: "/media/entreprise-municipal/tou-beav-ashkelon-bebe.jpg",
};

const TRUST_IMG = ["/media/hero/mariage-raz-naama.jpg", "/media/entreprise-municipal/tou-beav-ashkelon-tapis-rouge.jpg", "/media/bar-bat-mitzvah/bat-mitzvah-shira.jpg"];

const num = (i: number) => String(i + 1).padStart(3, "0");

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: raw } = await params;
  const lang = raw as Locale;
  const d = getDict(lang);
  const hero = img("/media/hero/beetle-mariage-coucher-soleil.jpg");
  const reviews = reviewsData.reviews.filter((r) => r.published);
  const gallery = d.gallery.alts.map((alt, i) => ({ ...img(`/media/galerie/souvenir-${String(i + 1).padStart(2, "0")}.jpg`), alt }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(homeJsonLd(lang))} />

      {/* 1. Hero : plein écran sur mobile, éditorial (texte + grande photo verticale) sur ordinateur */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink lg:grid lg:grid-cols-2 lg:bg-cream">
        <Develop eager className="absolute inset-0 -z-10 lg:relative lg:order-2 lg:z-0 lg:min-h-[100svh]">
          <HeroMedia image={hero} alt={d.hero.alt} video="/media/hero.mp4" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(43,33,27,0.82)_0%,rgba(43,33,27,0.35)_45%,rgba(43,33,27,0.25)_100%)] lg:hidden" />
        </Develop>
        <div className="relative flex min-h-[100svh] flex-col justify-end px-6 pt-28 pb-24 text-cream md:px-12 lg:justify-center lg:px-16 lg:pb-20 lg:text-ink xl:px-24">
          <p className="eyebrow-latin rise text-[0.62rem] text-cream/85 sm:text-[0.6875rem] lg:text-sepia-ink" dir="ltr">
            {d.hero.eyebrow}
          </p>
          <h1 className="display mt-6 text-[3.1rem] sm:text-[4rem] lg:text-[4.6rem] xl:text-[5.6rem]">{d.hero.title}</h1>
          <p className="rise mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/90 [animation-delay:.2s] lg:text-muted">{d.hero.sub}</p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:.3s]">
            <a href="#booking" className="btn-fill">
              <CalendarIcon className="h-4 w-4" />
              {d.hero.ctaDate}
            </a>
            <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="btn-line on-dark lg:hover:!border-ink lg:hover:!bg-ink lg:hover:!text-cream">
              <WhatsAppIcon className="h-4 w-4" />
              {d.hero.ctaWhatsapp}
            </a>
          </div>
          <p className="type mt-12 hidden text-[0.7rem] tracking-[0.28em] text-sepia-ink lg:block" dir="ltr">
            VINTAGE STYLE • MODERN MEMORIES
          </p>
        </div>
      </section>

      {/* 2. Manifeste */}
      <section className="px-6 py-28 text-center md:py-40">
        <Reveal className="mx-auto max-w-3xl">
          <LogoIllustration className="mx-auto h-auto w-28 opacity-90" />
          <p className="eyebrow mt-10">{d.manifesto.eyebrow}</p>
          <h2 className="display mt-6 text-[2.2rem] md:text-[3.4rem]">{d.manifesto.title}</h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted">{d.manifesto.text}</p>
          {d.manifesto.abroad && <p className="ticket mx-auto mt-10 max-w-md text-sepia-ink">{d.manifesto.abroad}</p>}
        </Reveal>
      </section>

      {/* 3. L'expérience : cartes numérotées 001 → 004 */}
      <section id="experience" className="scroll-mt-20 px-6 pb-28 md:px-10 md:pb-40">
        <SectionHead eyebrow={d.services.eyebrow} title={d.services.title} />
        <ol className="mx-auto mt-14 grid max-w-7xl gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {d.services.items.map((s, i) => {
            const src = SERVICE_IMG[s.id];
            return (
              <Reveal as="li" key={s.id} delay={i * 0.08}>
                  {src ? (
                    <Develop className="relative aspect-[4/3] overflow-hidden bg-paper sm:aspect-[4/5]">
                      <PhotoFill image={img(src)} alt={s.alt} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw" />
                    </Develop>
                  ) : (
                    <div className="flex aspect-[2/1] flex-col items-center justify-center gap-5 border border-line bg-paper/60 text-choco sm:aspect-[4/5] sm:gap-6">
                      {SERVICE_ICON[s.id]}
                      <span className="type text-[0.7rem] tracking-[0.28em]" dir="ltr">{s.name.toUpperCase()}</span>
                    </div>
                  )}
                  <p className="type mt-6 text-sm text-sepia-ink">{num(i)}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-[1.7rem] leading-tight">
                    <span dir="ltr" lang="en">{s.name}</span>
                  </h3>
                  <p className="eyebrow mt-1 !tracking-[0.12em]">{s.nameLocal}</p>
                  <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* Pas juste un coin magnets : intégration au décor */}
      <section className="bg-paper/60 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal>
            <Develop className="relative aspect-[4/3] overflow-hidden">
              <PhotoFill image={img("/media/voiture/beetle-fleurs.jpg")} alt={d.decor.alt} sizes="(min-width: 1024px) 55vw, 100vw" />
            </Develop>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">{d.decor.eyebrow}</p>
            <h2 className="display mt-5 text-[2rem] md:text-[2.8rem]">{d.decor.title}</h2>
            <p className="mt-6 leading-relaxed text-muted">{d.decor.text}</p>
            <ul className="mt-8 space-y-3 border-t border-line pt-6">
              {d.decor.points.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="type pt-0.5 text-sm text-sepia-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5. Pleine largeur : « Oui, on arrive vraiment en Coccinelle » (bande façon pellicule) */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <div className="grid h-[88svh] min-h-[34rem] grid-cols-1 md:grid-cols-3">
          <Develop className="relative hidden md:block">
            <PhotoFill image={img("/media/voiture/beetle-invites-soiree.jpg")} alt="" sizes="34vw" />
          </Develop>
          <Develop className="relative">
            <PhotoFill image={img("/media/hero/plage-ashkelon-coucher-soleil.jpg")} alt={d.statement.alt} sizes="(min-width: 768px) 34vw, 100vw" />
          </Develop>
          <Develop className="relative hidden md:block">
            <PhotoFill image={img("/media/voiture/beetle-porte-ouverte.jpg")} alt="" sizes="34vw" />
          </Develop>
        </div>
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="type text-sm tracking-[0.3em] text-sand">{d.statement.eyebrow}</p>
            <h2 className="display mx-auto mt-6 max-w-4xl text-[2.6rem] sm:text-[3.6rem] md:text-[4.8rem]">{d.statement.title}</h2>
            <p className="mt-6 text-lg text-cream/85">{d.statement.text}</p>
          </Reveal>
        </div>
      </section>

      {/* 6. Forfaits */}
      <section id="packages" className="scroll-mt-20 px-6 py-28 md:px-10 md:py-40">
        <SectionHead eyebrow={d.packages.eyebrow} title={d.packages.title} text={d.packages.intro} />
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-3 lg:gap-8">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <article className={`relative flex h-full flex-col p-7 md:p-9 ${p.featured ? "bg-choco text-cream" : "border border-line bg-print/60"}`}>
                {p.featured && <span className="ticket absolute -top-3 start-7 bg-cream text-choco md:start-9">{d.packages.popular}</span>}
                <p className={`type text-sm ${p.featured ? "text-sand" : "text-sepia-ink"}`}>{num(i)}</p>
                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-[2rem] leading-tight">
                  <span dir="ltr" lang="en">{p.name[lang]}</span>
                </h3>
                <p className={`mt-3 leading-relaxed ${p.featured ? "text-cream/80" : "text-muted"}`}>{p.tagline[lang]}</p>
                <div className={`mt-7 border-y py-5 ${p.featured ? "border-cream/20" : "border-line"}`}>
                  <p className="display text-[1.6rem]">{pricesConfirmed ? `${d.packages.from}${formatPrice(p.priceFrom, lang)}` : d.packages.onRequest}</p>
                  <p className={`type mt-1 text-xs ${p.featured ? "text-sand" : "text-sepia-ink"}`}>{fill(d.packages.hours, { n: p.hours })}</p>
                </div>
                <p className={`label mt-7 mb-4 ${p.featured ? "!text-sand" : ""}`}>{d.packages.includesTitle}</p>
                <ul className="flex-1 space-y-2.5 text-[0.95rem]">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-3">
                      <span aria-hidden="true" className={`mt-[0.6em] h-px w-3 shrink-0 ${p.featured ? "bg-sand" : "bg-sepia"}`} />
                      {d.packages.includes[inc]}
                    </li>
                  ))}
                </ul>
                <PackageButton id={p.id} className={`mt-9 ${p.featured ? "btn-line on-dark" : "btn-line"}`}>
                  {d.packages.book}
                </PackageButton>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-14 max-w-7xl">
          <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[14rem_1fr]">
            <h3 className="display text-2xl">{d.packages.optionsTitle}</h3>
            <div>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {options.map((o) => (
                  <li key={o.id} className="flex items-baseline justify-between gap-4 border-b border-dashed border-line pb-3">
                    <span className="flex items-center gap-3">
                      <PlusIcon className="h-3 w-3 shrink-0 text-sepia" />
                      {d.packages.options[o.id]}
                    </span>
                    {pricesConfirmed && (
                      <span className="type shrink-0 text-sm text-sepia-ink">
                        {formatPrice(o.price, lang)}
                        {o.per === "hour" ? ` ${d.packages.perHour}` : ""}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">{d.packages.note}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. Pour quels événements */}
      <section id="events" className="scroll-mt-20 bg-paper/60 px-6 py-28 md:px-10 md:py-40">
        <SectionHead eyebrow={d.events.eyebrow} title={d.events.title} text={d.events.intro} />
        <ul className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          {d.events.items.map((e, i) => (
            <Reveal as="li" key={e.id} delay={(i % 4) * 0.06}>
              <Develop className="relative aspect-[3/4] overflow-hidden bg-sand">
                <PhotoFill image={img(EVENT_IMG[e.id])} alt={e.alt} sizes="(min-width: 1024px) 24vw, 48vw" />
              </Develop>
              <h3 className="display mt-4 text-[1.35rem] md:text-[1.6rem]">{e.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* 8. Comment ça marche */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <SectionHead eyebrow={d.steps.eyebrow} title={d.steps.title} />
        <ol className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-4 md:gap-8">
          {d.steps.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative border-t border-ink pt-6">
              <span className="ticket text-sepia-ink">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-5 text-[1.5rem]">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 9. Notre histoire */}
      <section id="story" className="scroll-mt-20 overflow-hidden bg-choco px-6 py-28 text-cream md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Reveal className="relative z-10 w-[72%]">
              <figure className="print -rotate-2 text-ink">
                <Develop className="relative aspect-[4/5] overflow-hidden">
                  <PhotoFill image={img("/media/histoire/fondateur-beetle.jpg")} alt={d.story.altFounder} sizes="(min-width: 1024px) 34vw, 72vw" />
                </Develop>
              </figure>
            </Reveal>
            <Reveal delay={0.15} className="absolute end-0 top-[18%] z-20 w-[48%]">
              <figure className="print rotate-3 !pb-8 text-ink">
                <Develop className="relative aspect-[16/10] overflow-hidden">
                  <PhotoFill image={img("/media/histoire/avant-restauration.jpg")} alt={d.story.altBefore} sizes="(min-width: 1024px) 22vw, 48vw" />
                </Develop>
              </figure>
            </Reveal>
            <Reveal delay={0.25} className="absolute end-[6%] -bottom-6 z-20 w-[40%]">
              <figure className="print -rotate-1 !pb-8 text-ink">
                <Develop className="relative aspect-square overflow-hidden">
                  <PhotoFill image={img("/media/histoire/restauration-sieges.jpg")} alt={d.story.altWork} sizes="(min-width: 1024px) 18vw, 40vw" />
                </Develop>
              </figure>
            </Reveal>
          </div>
          <Reveal>
            <p className="eyebrow !text-sand">{d.story.eyebrow}</p>
            <h2 className="display mt-5 text-[2.4rem] md:text-[3.4rem]">{d.story.title}</h2>
            <p className="display mt-8 text-[1.45rem] leading-snug text-sand md:text-[1.7rem]">{d.story.paragraphs[0]}</p>
            {d.story.paragraphs.slice(1).map((p) => (
              <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-cream/80">
                {p}
              </p>
            ))}
            <p className="ticket mt-10 text-sand">{d.story.quote}</p>
          </Reveal>
        </div>
      </section>

      {/* 10. Galerie « souvenirs » */}
      <section id="gallery" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
        <SectionHead eyebrow={d.gallery.eyebrow} title={d.gallery.title} />
        <div className="mx-auto mt-16 max-w-7xl">
          <Gallery items={gallery} labels={{ open: d.gallery.open, close: d.gallery.close, prev: d.gallery.prev, next: d.gallery.next }} />
        </div>
      </section>

      {/* 11. Ils nous ont fait confiance */}
      <section id="trust" className="scroll-mt-20 bg-paper/60 px-6 py-28 md:px-10 md:py-40">
        <SectionHead eyebrow={d.trust.eyebrow} title={d.trust.title} />
        <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
          {d.trust.items.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article>
                <Develop className="relative aspect-[4/5] overflow-hidden">
                  <PhotoFill image={img(TRUST_IMG[i])} alt={t.alt} sizes="(min-width: 768px) 32vw, 100vw" />
                </Develop>
                <p className="type mt-5 text-xs text-sepia-ink">{t.place}</p>
                <h3 className="display mt-2 text-[1.6rem]">{t.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        {/* <!-- À REMPLIR avec de vrais avis clients : data/reviews.json (published: true) --> */}
        {reviews.length > 0 && (
          <div className="mx-auto mt-24 max-w-5xl">
            <h3 className="display text-center text-3xl">{d.trust.reviewsTitle}</h3>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {reviews.map((r) => (
                <blockquote key={r.name} className="border-t border-line pt-6">
                  <p className="display text-xl leading-snug">“{r.text[lang]}”</p>
                  <footer className="type mt-4 text-xs text-sepia-ink">
                    {r.name} · {r.event}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="scroll-mt-20 px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{d.faq.eyebrow}</p>
            <h2 className="display mt-5 text-[2.3rem] md:text-[3rem]">{d.faq.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {d.faq.items.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.1rem] md:text-[1.2rem]">
                    {f.q}
                    <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-500 group-open:rotate-45" />
                  </summary>
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13. Réservation */}
      <section id="booking" className="scroll-mt-16 border-t border-line bg-print/50 px-5 py-28 md:px-10 md:py-36">
        <SectionHead eyebrow={d.booking.eyebrow} title={d.booking.title} text={d.booking.intro} />
        <div className="mx-auto mt-16 max-w-6xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-[2.3rem] md:text-[3.4rem]">{title}</h2>
      {text && <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}

function PhotoFill({ image, alt, sizes }: { image: Img; alt: string; sizes: string }) {
  return <Image src={image.src} alt={alt} fill sizes={sizes} quality={70} className="object-cover" />;
}
