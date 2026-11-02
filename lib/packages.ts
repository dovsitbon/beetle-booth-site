import data from "@/data/packages.json";
import type { Dict, Locale, Localized } from "@/lib/i18n";

export type IncludeId = keyof Dict["packages"]["includes"];
export type OptionId = keyof Dict["packages"]["options"];

export type Package = {
  id: string;
  name: Localized;
  tagline: Localized;
  priceFrom: number;
  hours: number;
  includes: IncludeId[];
  featured: boolean;
};

export type Option = { id: OptionId; price: number; per?: string };

export const packages = data.packages as Package[];
export const options = data.options as Option[];
export const pricesConfirmed = data.pricesConfirmed;
export const deposit = data.deposit;

export const getPackage = (id: string) => packages.find((p) => p.id === id);
export const isOptionId = (id: string): id is OptionId => options.some((o) => o.id === id);

const intlLocale: Record<Locale, string> = { he: "he-IL", en: "en-IL", fr: "fr-FR", es: "es-ES" };

export function formatPrice(amount: number, lang: Locale) {
  return new Intl.NumberFormat(intlLocale[lang], { style: "currency", currency: "ILS", maximumFractionDigits: 0 }).format(amount);
}
