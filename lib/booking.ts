import site from "@/data/site.json";
import calendar from "@/data/booked-dates.json";
import type { Dict, Locale } from "@/lib/i18n";
import { getPackage, type OptionId } from "@/lib/packages";

export type Booking = {
  date: string;
  eventType: string;
  timeFrom: string;
  timeTo: string;
  venue: string;
  city: string;
  guests: string;
  packageId: string;
  options: OptionId[];
  frameNames: string;
  frameDate: string;
  frameColors: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

export const EVENT_TYPES = ["wedding", "mitzvah", "brit", "birthday", "purim", "corporate", "municipal", "summer", "other"] as const;

export const bookedDates = new Set<string>(calendar.booked as string[]);
export const minLeadDays = calendar.minLeadDays;
export const maxMonthsAhead = calendar.maxMonthsAhead;

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

/** Date locale (Asia/Jerusalem) au format AAAA-MM-JJ, sans dépendre du fuseau du navigateur. */
export function isoDay(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jerusalem", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export function addDays(iso: string, days: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return t.toISOString().slice(0, 10);
}

export function formatDay(iso: string, lang: Locale) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "he" ? "he-IL" : lang, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d)));
}

export function eventLabel(id: string, d: Dict) {
  if (id === "other") return d.booking.fields.eventTypeOther;
  return d.events.items.find((e) => e.id === id)?.name ?? id;
}

/** Récapitulatif envoyé sur WhatsApp et par e-mail, dans la langue du visiteur. */
export function bookingMessage(b: Booking, lang: Locale, d: Dict, ref?: string) {
  const m = d.booking.message;
  const pkg = getPackage(b.packageId);
  const event = [
    `${m.event}: ${eventLabel(b.eventType, d)}`,
    `${m.date}: ${formatDay(b.date, lang)}`,
    b.timeFrom || b.timeTo ? `${m.time}: ${[b.timeFrom, b.timeTo].filter(Boolean).join(" – ")}` : "",
    b.venue || b.city ? `${m.venue}: ${[b.venue, b.city].filter(Boolean).join(", ")}` : "",
    b.guests ? `${m.guests}: ${b.guests}` : "",
    `${m.package}: ${pkg ? pkg.name[lang] : d.booking.fields.packageUnsure}`,
    b.options.length ? `${m.options}: ${b.options.map((o) => d.packages.options[o]).join(", ")}` : "",
    b.frameNames || b.frameDate || b.frameColors ? `${m.frame}: ${[b.frameNames, b.frameDate, b.frameColors].filter(Boolean).join(" · ")}` : "",
  ];
  const contact = [
    `${m.name}: ${b.name}`,
    `${m.phone}: ${b.phone}`,
    b.email ? `${m.email}: ${b.email}` : "",
    b.notes ? `${m.notes}: ${b.notes}` : "",
    ref ? `${m.ref}: ${ref}` : "",
  ];
  return [[`*${m.title}*`], event, contact, [m.closing]].map((block) => block.filter(Boolean).join("\n")).join("\n\n");
}
