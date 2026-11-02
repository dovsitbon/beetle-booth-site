import { Resend } from "resend";
import site from "@/data/site.json";
import { bookingMessage } from "@/lib/booking";
import { getDict } from "@/lib/i18n";
import { escapeHtml, parseBooking, parseLang } from "@/lib/validate";

// E-mails envoyés seulement si RESEND_API_KEY et BOOKING_NOTIFY_EMAIL sont configurés (Vercel → Environment Variables).
// RESEND_FROM doit utiliser un domaine vérifié dans Resend, ex. « Beetle Booth <hello@beetlebooth.co.il> ».
// La demande part de toute façon sur WhatsApp côté client : l'e-mail est un doublon de confort.

const html = (text: string) =>
  `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#2B211B;white-space:pre-wrap">${escapeHtml(text).replace(/\*(.+?)\*/g, "<strong>$1</strong>")}</div>`;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const booking = parseBooking(body?.booking);
  if (!body || !booking) return Response.json({ ok: false }, { status: 400 });
  const lang = parseLang(body.lang);
  const d = getDict(lang);
  const ref = typeof body.ref === "string" ? body.ref.slice(0, 20) : undefined;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  if (!key || !to) return Response.json({ ok: true, emailed: false });

  const text = bookingMessage(booking, lang, d, ref);
  const resend = new Resend(key);
  const from = process.env.RESEND_FROM ?? "Beetle Booth <onboarding@resend.dev>";
  try {
    await resend.emails.send({ from, to, subject: `${d.email.subjectBusiness}${ref ? ` · ${ref}` : ""}`, html: html(text), text, replyTo: booking.email || undefined });
    if (booking.email) {
      const clientText = `${d.email.intro}\n\n${text}\n\nWhatsApp: ${site.phoneIntl}\n${site.instagram}`;
      await resend.emails.send({ from, to: booking.email, replyTo: to, subject: d.email.subjectClient, html: html(clientText), text: clientText });
    }
    return Response.json({ ok: true, emailed: true });
  } catch {
    return Response.json({ ok: true, emailed: false });
  }
}
