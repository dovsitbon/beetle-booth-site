import { EVENT_TYPES, type Booking } from "@/lib/booking";
import { isLocale, type Locale } from "@/lib/i18n";
import { getPackage, isOptionId } from "@/lib/packages";

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max).trim() : "");

export function parseLang(v: unknown): Locale {
  return typeof v === "string" && isLocale(v) ? v : "he";
}

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/** Revalide côté serveur tout ce qui vient du formulaire de réservation. */
export function parseBooking(raw: unknown): Booking | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const date = str(r.date, 10);
  const eventType = str(r.eventType, 20);
  const packageId = str(r.packageId, 20);
  const b: Booking = {
    date,
    eventType: (EVENT_TYPES as readonly string[]).includes(eventType) ? eventType : "other",
    timeFrom: str(r.timeFrom, 5),
    timeTo: str(r.timeTo, 5),
    venue: str(r.venue, 120),
    city: str(r.city, 80),
    guests: str(r.guests, 6),
    packageId: getPackage(packageId) ? packageId : "",
    options: Array.isArray(r.options) ? [...new Set((r.options as unknown[]).map((o) => str(o, 20)).filter(isOptionId))] : [],
    frameNames: str(r.frameNames, 80),
    frameDate: str(r.frameDate, 40),
    frameColors: str(r.frameColors, 120),
    name: str(r.name, 120),
    phone: str(r.phone, 30),
    email: str(r.email, 160),
    notes: str(r.notes, 1000),
  };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.date) || !b.name || !isPhone(b.phone)) return null;
  if (b.email && !isEmail(b.email)) b.email = "";
  return b;
}

export const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
