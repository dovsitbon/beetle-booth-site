import Stripe from "stripe";
import { formatDay } from "@/lib/booking";
import { getDict } from "@/lib/i18n";
import { deposit, getPackage, pricesConfirmed } from "@/lib/packages";
import { parseBooking, parseLang } from "@/lib/validate";

// Acompte en ligne (Stripe Checkout) pour bloquer une date. Désactivé tant que :
//   NEXT_PUBLIC_DEPOSIT_MODE=stripe, STRIPE_SECRET_KEY et pricesConfirmed=true (data/packages.json) ne sont pas réunis.
// Le montant vient toujours de packages.json, jamais du navigateur.
// Pour Cardcom / Tranzila / Meshulam-Grow : remplacer ce fichier par l'appel au prestataire choisi.

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (process.env.NEXT_PUBLIC_DEPOSIT_MODE !== "stripe" || !secret || !pricesConfirmed || !deposit) {
    return Response.json({ error: "deposit-disabled" }, { status: 503 });
  }
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const booking = parseBooking(body?.booking);
  if (!booking) return Response.json({ error: "invalid" }, { status: 400 });
  const lang = parseLang(body?.lang);
  const d = getDict(lang);
  const origin = new URL(req.url).origin;
  const pkg = getPackage(booking.packageId);

  const stripe = new Stripe(secret);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "ils",
          unit_amount: deposit * 100,
          product_data: { name: `${d.booking.depositButton} · Beetle Booth`, description: [formatDay(booking.date, lang), pkg?.name[lang]].filter(Boolean).join(" · ") },
        },
      },
    ],
    customer_email: booking.email || undefined,
    locale: lang === "he" ? "auto" : lang,
    metadata: { ref: String(body?.ref ?? "").slice(0, 20), date: booking.date, phone: booking.phone, name: booking.name.slice(0, 100) },
    success_url: `${origin}/${lang}?deposit=success#booking`,
    cancel_url: `${origin}/${lang}#booking`,
  });
  return Response.json({ url: session.url });
}
