import Link from "next/link";
import site from "@/data/site.json";
import type { Dict, Locale } from "@/lib/i18n";
import { waLink } from "@/lib/booking";
import { LogoIllustration } from "@/components/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const year = new Date().getFullYear();
  const home = `/${lang}`;
  return (
    <footer id="contact" className="scroll-mt-20 bg-choco text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-16 md:grid-cols-[1.5fr_1fr_1fr] md:px-10">
        <div className="max-w-sm" translate="no">
          <LogoIllustration className="h-auto w-44 [--logo-body:#eadbc4] [--logo-glass:#f4ebdd] [--logo-line:#2b211b] [--logo-shadow:transparent]" />
          <p className="mt-6 font-[family-name:var(--font-playfair)] text-2xl tracking-[0.18em]" dir="ltr">
            BEETLE BOOTH
          </p>
          <p className="mt-1 text-lg">
            <span lang="he" dir="rtl">{site.nameHe}</span>
          </p>
          <p className="type mt-4 text-[0.7rem] tracking-[0.24em] text-sand" dir="ltr">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 !text-sand">{d.footer.contactTitle}</h2>
          <ul className="space-y-4 text-[0.95rem]">
            <li>
              <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-70">
                <WhatsAppIcon className="h-5 w-5" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-70">
                <InstagramIcon className="h-5 w-5" />
                <span dir="ltr">{site.instagramHandle}</span>
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="link-line" dir="ltr">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
          <Link href={`${home}#booking`} className="btn-line on-dark mt-8">
            {d.nav.checkDate}
          </Link>
        </div>

        <div>
          <h2 className="eyebrow mb-5 !text-sand">{d.footer.areasTitle}</h2>
          <p className="text-[0.95rem]">{d.footer.areas}</p>
          <ul className="mt-8 space-y-3 text-[0.95rem]">
            <li><Link href={`${home}#experience`} className="hover:opacity-70">{d.nav.experience}</Link></li>
            <li><Link href={`${home}#packages`} className="hover:opacity-70">{d.nav.packages}</Link></li>
            <li><Link href={`${home}#events`} className="hover:opacity-70">{d.nav.events}</Link></li>
            <li><Link href={`${home}#story`} className="hover:opacity-70">{d.nav.story}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs leading-relaxed text-sand md:flex-row md:justify-between md:gap-8 md:px-10">
          <p>
            © {year} Beetle Booth · {site.nameHe} · {d.footer.rights}
            {site.businessId && ` · ${d.footer.businessId} ${site.businessId}`}
          </p>
          <p>{d.footer.photos} {d.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
