import type { Metadata } from "next";
import site from "@/data/site.json";
import { getDict, locales, ogLocale, type Locale } from "@/lib/i18n";
import { packages, pricesConfirmed } from "@/lib/packages";

export function pageMeta(lang: Locale, path: string, title: string, description: string, image = "/og.jpg"): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])) as Record<string, string>;
  languages["x-default"] = `/he${path}`;
  return {
    title,
    description,
    alternates: { canonical: `/${lang}${path}`, languages },
    openGraph: {
      type: "website",
      siteName: "Beetle Booth · חיפושיצילום",
      title,
      description,
      url: `/${lang}${path}`,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** LocalBusiness + services + forfaits + FAQ, dans un seul graphe JSON-LD. */
export function homeJsonLd(lang: Locale) {
  const d = getDict(lang);
  const id = `${site.url}/#business`;
  const services = d.services.items.map((s) => ({
    "@type": "Service",
    name: s.name,
    alternateName: s.nameLocal,
    description: s.text,
    serviceType: "Photo booth",
    provider: { "@id": id },
    areaServed: { "@type": "Country", name: "Israel" },
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": id,
        name: lang === "he" ? site.nameHe : site.name,
        alternateName: lang === "he" ? site.name : site.nameHe,
        slogan: site.tagline,
        description: d.meta.homeDescription,
        url: `${site.url}/${lang}`,
        image: [`${site.url}/og.jpg`, `${site.url}/media/hero/beetle-mariage-coucher-soleil.jpg`],
        logo: `${site.url}/logo.svg`,
        telephone: site.phoneIntl,
        sameAs: [site.instagram],
        address: { "@type": "PostalAddress", addressCountry: "IL" },
        areaServed: { "@type": "Country", name: "Israel" },
        knowsLanguage: ["he", "en", "fr", "es"],
        contactPoint: { "@type": "ContactPoint", telephone: site.phoneIntl, contactType: "reservations", availableLanguage: ["Hebrew", "English", "French", "Spanish"] },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.packages.title,
          itemListElement: packages.map((p) => ({
            "@type": "Offer",
            name: p.name[lang],
            description: p.tagline[lang],
            ...(pricesConfirmed ? { priceSpecification: { "@type": "PriceSpecification", minPrice: p.priceFrom, priceCurrency: "ILS" } } : {}),
            itemOffered: { "@type": "Service", name: `${p.name[lang]} · Beetle Booth`, provider: { "@id": id } },
          })),
        },
      },
      ...services,
      {
        "@type": "FAQPage",
        mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
