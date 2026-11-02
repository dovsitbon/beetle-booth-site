"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLocale } from "@/components/providers";
import { ChevronIcon, WhatsAppIcon } from "@/components/icons";
import { addDays, bookedDates, bookingMessage, EVENT_TYPES, eventLabel, formatDay, isoDay, maxMonthsAhead, minLeadDays, waLink, type Booking } from "@/lib/booking";
import { deposit, formatPrice, options as allOptions, packages, pricesConfirmed, type OptionId } from "@/lib/packages";
import { isEmail, isPhone } from "@/lib/validate";
import { fill } from "@/lib/i18n";
import { goTo, newBookingRef } from "@/lib/browser";

const DEPOSIT_ON = process.env.NEXT_PUBLIC_DEPOSIT_MODE === "stripe" && pricesConfirmed && deposit > 0;

type Fields = Omit<Booking, "date" | "options" | "packageId">;
type Errors = Partial<Record<"date" | "eventType" | "name" | "phone" | "email", string>>;

const EMPTY: Fields = { eventType: "", timeFrom: "", timeTo: "", venue: "", city: "", guests: "", frameNames: "", frameDate: "", frameColors: "", name: "", phone: "", email: "", notes: "" };

/** Nombre de jours d'un mois (mois 0-11), en UTC pour éviter les surprises de fuseau. */
const daysIn = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
const iso = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export function BookingForm() {
  const { lang, d } = useLocale();
  const b = d.booking;
  const [today, setToday] = useState<string | null>(null);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const [date, setDate] = useState("");
  const [packageId, setPackageId] = useState("");
  const [opts, setOpts] = useState<OptionId[]>([]);
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<{ url: string; ref: string; booking: Booking } | null>(null);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // « Aujourd'hui » est calculé côté navigateur (la page est statique) à l'heure d'Israël
  useEffect(() => {
    const t = isoDay(new Date());
    const [y, m] = t.split("-").map(Number);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initialisation unique côté client
    setToday(t);
    setView({ y, m: m - 1 });
  }, []);

  // Les boutons « Réserver » des forfaits présélectionnent la formule
  useEffect(() => {
    const onPick = (e: Event) => setPackageId(String((e as CustomEvent<string>).detail));
    window.addEventListener("bb:package", onPick);
    return () => window.removeEventListener("bb:package", onPick);
  }, []);

  const minDate = today ? addDays(today, minLeadDays) : "";
  const maxDate = useMemo(() => {
    if (!today) return "";
    const [y, m] = today.split("-").map(Number);
    const end = new Date(Date.UTC(y, m - 1 + maxMonthsAhead, 1));
    return end.toISOString().slice(0, 10);
  }, [today]);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (k in errors) setErrors((p) => ({ ...p, [k]: undefined }));
  };
  const toggleOpt = (id: OptionId) => setOpts((p) => (p.includes(id) ? p.filter((o) => o !== id) : [...p, id]));

  const booking = (): Booking => ({ ...f, date, packageId, options: opts });

  function validate(): Errors {
    const e: Errors = {};
    if (!date) e.date = b.errors.date;
    if (!f.eventType) e.eventType = b.errors.required;
    if (!f.name.trim()) e.name = b.errors.required;
    if (!f.phone.trim()) e.phone = b.errors.required;
    else if (!isPhone(f.phone)) e.phone = b.errors.phone;
    if (f.email.trim() && !isEmail(f.email)) e.email = b.errors.email;
    return e;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      const el = formRef.current?.querySelector<HTMLElement>(first === "date" ? "[data-calendar]" : `[name="${first}"]`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    const ref = newBookingRef();
    const data = booking();
    const url = waLink(bookingMessage(data, lang, d, ref));
    // WhatsApp s'ouvre tout de suite (dans le geste de l'utilisateur), l'e-mail part en parallèle
    window.open(url, "_blank", "noopener");
    fetch("/api/booking", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lang, ref, booking: data }), keepalive: true }).catch(() => {});
    setSent({ url, ref, booking: data });
    requestAnimationFrame(() => document.getElementById("booking")?.scrollIntoView({ block: "start", behavior: "smooth" }));
  }

  async function payDeposit() {
    if (!sent) return;
    setPaying(true);
    setPayError(false);
    try {
      const res = await fetch("/api/deposit", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lang, ref: sent.ref, booking: sent.booking }) });
      const json = (await res.json()) as { url?: string };
      if (json.url) return goTo(json.url);
      setPayError(true);
    } catch {
      setPayError(true);
    }
    setPaying(false);
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-xl text-center" role="status">
        <p className="ticket text-sepia-ink">{sent.ref}</p>
        <h3 className="display mt-6 text-4xl md:text-5xl">{b.successTitle}</h3>
        <p className="mt-5 leading-relaxed text-muted">
          {b.successText}{" "}
          <a href={sent.url} target="_blank" rel="noopener noreferrer" className="link-line text-ink">
            {b.successLink}
          </a>
        </p>
        {DEPOSIT_ON && (
          <div className="mt-10 border border-line p-6">
            <p className="display text-2xl">{b.depositTitle}</p>
            <p className="mt-2 text-sm text-muted">{fill(b.depositText, { amount: formatPrice(deposit, lang) })}</p>
            <button type="button" onClick={payDeposit} disabled={paying} className="btn-fill mt-5">
              {b.depositButton}
            </button>
            {payError && <p className="mt-3 text-sm text-brick">{b.errors.deposit}</p>}
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            setSent(null);
            setDate("");
          }}
          className="link-line mt-10 text-sm"
        >
          {b.again}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid scroll-mt-28 gap-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20">
      {/* 1. Calendrier */}
      <fieldset className="min-w-0">
        <Legend n="01">{b.stepDate}</Legend>
        <div data-calendar tabIndex={-1} className="print !p-4 !pb-5 outline-none sm:!p-6" aria-describedby={errors.date ? "err-date" : undefined}>
          {view && today ? (
            <Calendar view={view} setView={setView} today={today} minDate={minDate} maxDate={maxDate} value={date} onPick={(v) => (setDate(v), setErrors((p) => ({ ...p, date: undefined })))} />
          ) : (
            <div className="aspect-square" />
          )}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <span className="flex items-center gap-2"><span className="h-3 w-3 border border-line bg-cream" />{b.calendar.available}</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 bg-paper bg-[linear-gradient(135deg,transparent_45%,#a07850_45%,#a07850_55%,transparent_55%)]" />{b.calendar.booked}</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 bg-choco" />{b.calendar.selected}</span>
          </div>
        </div>
        <p className="type mt-4 text-sm text-sepia-ink" aria-live="polite">
          {date ? fill(b.calendar.chosen, { date: formatDay(date, lang) }) : b.calendar.none}
        </p>
        {errors.date && <p id="err-date" className="mt-2 text-sm text-brick">{errors.date}</p>}
        <p className="mt-3 text-xs leading-relaxed text-muted">{b.calendar.bookedNote}</p>
      </fieldset>

      <div className="min-w-0 space-y-14">
        {/* 2. L'événement */}
        <fieldset>
          <Legend n="02">{b.stepEvent}</Legend>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <Field label={b.fields.eventType} error={errors.eventType} id="eventType" className="sm:col-span-2">
              <select id="eventType" name="eventType" value={f.eventType} onChange={set("eventType")} className="field" required aria-invalid={!!errors.eventType}>
                <option value="">{b.fields.choose}</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>{eventLabel(t, d)}</option>
                ))}
              </select>
            </Field>
            <Field label={b.fields.timeFrom} id="timeFrom">
              <input id="timeFrom" name="timeFrom" type="time" value={f.timeFrom} onChange={set("timeFrom")} className="field" />
            </Field>
            <Field label={b.fields.timeTo} id="timeTo">
              <input id="timeTo" name="timeTo" type="time" value={f.timeTo} onChange={set("timeTo")} className="field" />
            </Field>
            <Field label={b.fields.venue} id="venue">
              <input id="venue" name="venue" value={f.venue} onChange={set("venue")} className="field" autoComplete="off" />
            </Field>
            <Field label={b.fields.city} id="city">
              <input id="city" name="city" value={f.city} onChange={set("city")} className="field" autoComplete="address-level2" />
            </Field>
            <Field label={b.fields.guests} id="guests">
              <input id="guests" name="guests" type="number" inputMode="numeric" min={1} max={5000} value={f.guests} onChange={set("guests")} className="field" />
            </Field>
          </div>
        </fieldset>

        {/* 3. La formule */}
        <fieldset>
          <Legend n="03">{b.stepPackage}</Legend>
          <div role="radiogroup" aria-label={b.fields.package} className="flex flex-wrap gap-2.5">
            {[...packages.map((p) => ({ id: p.id, label: p.name[lang] })), { id: "", label: b.fields.packageUnsure }].map((p) => (
              <label key={p.id || "unsure"} className="chip cursor-pointer select-none">
                <input type="radio" name="package" value={p.id} checked={packageId === p.id} onChange={() => setPackageId(p.id)} className="sr-only" />
                {p.label}
              </label>
            ))}
          </div>
          <p className="label mt-8 mb-3">{b.fields.options}</p>
          <div className="flex flex-wrap gap-2.5">
            {allOptions.map((o) => (
              <label key={o.id} className="chip cursor-pointer select-none">
                <input type="checkbox" name="options" value={o.id} checked={opts.includes(o.id)} onChange={() => toggleOpt(o.id)} className="sr-only" />
                {d.packages.options[o.id]}
              </label>
            ))}
          </div>
        </fieldset>

        {/* 4. Personnalisation du cadre */}
        <fieldset>
          <Legend n="04">{b.stepFrame}</Legend>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <Field label={b.fields.frameNames} id="frameNames">
              <input id="frameNames" name="frameNames" value={f.frameNames} onChange={set("frameNames")} placeholder={b.fields.frameNamesHint} className="field" maxLength={80} />
            </Field>
            <Field label={b.fields.frameDate} id="frameDate">
              <input id="frameDate" name="frameDate" value={f.frameDate} onChange={set("frameDate")} placeholder={date ? formatDay(date, lang) : ""} className="field" maxLength={40} />
            </Field>
            <Field label={b.fields.frameColors} id="frameColors" className="sm:col-span-2">
              <input id="frameColors" name="frameColors" value={f.frameColors} onChange={set("frameColors")} placeholder={b.fields.frameColorsHint} className="field" maxLength={120} />
            </Field>
          </div>
        </fieldset>

        {/* 5. Coordonnées */}
        <fieldset>
          <Legend n="05">{b.stepContact}</Legend>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <Field label={b.fields.name} error={errors.name} id="name">
              <input id="name" name="name" value={f.name} onChange={set("name")} className="field" autoComplete="name" required aria-invalid={!!errors.name} />
            </Field>
            <Field label={b.fields.phone} error={errors.phone} id="phone">
              <input id="phone" name="phone" type="tel" dir="ltr" value={f.phone} onChange={set("phone")} className="field rtl:text-right" autoComplete="tel" inputMode="tel" required aria-invalid={!!errors.phone} />
            </Field>
            <Field label={b.fields.email} error={errors.email} id="email" className="sm:col-span-2">
              <input id="email" name="email" type="email" dir="ltr" value={f.email} onChange={set("email")} className="field rtl:text-right" autoComplete="email" spellCheck={false} aria-invalid={!!errors.email} />
            </Field>
            <Field label={b.fields.notes} id="notes" className="sm:col-span-2">
              <textarea id="notes" name="notes" value={f.notes} onChange={set("notes")} rows={3} className="field resize-y" maxLength={1000} />
            </Field>
          </div>
        </fieldset>

        <div>
          <button type="submit" className="btn-fill w-full sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" />
            {b.submit}
          </button>
          <p className="mt-4 text-xs text-muted">{b.privacy}</p>
        </div>
      </div>
    </form>
  );
}

function Legend({ n, children }: { n: string; children: ReactNode }) {
  return (
    <legend className="mb-7 flex w-full items-baseline gap-4 border-b border-line pb-3">
      <span className="type text-sm text-sepia-ink">{n}</span>
      <span className="display text-2xl md:text-[1.75rem]">{children}</span>
    </legend>
  );
}

function Field({ label, id, error, className = "", children }: { label: string; id: string; error?: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-brick">{error}</p>}
    </div>
  );
}

function Calendar({
  view,
  setView,
  today,
  minDate,
  maxDate,
  value,
  onPick,
}: {
  view: { y: number; m: number };
  setView: (v: { y: number; m: number }) => void;
  today: string;
  minDate: string;
  maxDate: string;
  value: string;
  onPick: (v: string) => void;
}) {
  const { lang, d } = useLocale();
  const c = d.booking.calendar;
  const { y, m } = view;
  const first = new Date(Date.UTC(y, m, 1)).getUTCDay();
  const total = daysIn(y, m);
  const title = new Intl.DateTimeFormat(lang === "he" ? "he-IL" : lang, { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(y, m, 1)));
  const [ty, tm] = today.split("-").map(Number);
  const canPrev = y > ty || (y === ty && m > tm - 1);
  const canNext = iso(y, m, total) < maxDate;
  const move = (delta: number) => {
    const t = new Date(Date.UTC(y, m + delta, 1));
    setView({ y: t.getUTCFullYear(), m: t.getUTCMonth() });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button type="button" onClick={() => move(-1)} disabled={!canPrev} className="-m-2 p-2 disabled:opacity-25" aria-label={c.prev}>
          <ChevronIcon className="h-5 w-5 -scale-x-100 rtl:scale-x-100" />
        </button>
        <p className="display text-xl capitalize" aria-live="polite">{title}</p>
        <button type="button" onClick={() => move(1)} disabled={!canNext} className="-m-2 p-2 disabled:opacity-25" aria-label={c.next}>
          <ChevronIcon className="h-5 w-5 rtl:-scale-x-100" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {c.weekdays.map((w) => (
          <span key={w} className="type pb-2 text-[0.7rem] text-muted" aria-hidden="true">{w}</span>
        ))}
        {Array.from({ length: first }, (_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: total }, (_, i) => {
          const day = iso(y, m, i + 1);
          const booked = bookedDates.has(day);
          const out = day < minDate || day > maxDate;
          const selected = day === value;
          const label = `${formatDay(day, lang)}${booked ? ` · ${c.booked}` : ""}`;
          return (
            <button
              key={day}
              type="button"
              disabled={out || booked}
              onClick={() => onPick(day)}
              aria-pressed={selected}
              aria-label={label}
              className={`type relative flex aspect-square items-center justify-center text-[0.95rem] transition-colors duration-300 ${
                selected
                  ? "bg-choco text-cream"
                  : booked
                    ? "bg-paper bg-[linear-gradient(135deg,transparent_47%,#a07850_47%,#a07850_53%,transparent_53%)] text-muted/70"
                    : out
                      ? "text-muted/35"
                      : "border border-transparent hover:border-ink"
              } ${day === today && !selected ? "underline underline-offset-4" : ""}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
