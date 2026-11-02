# Beetle Booth · חיפושיצילום

Site vitrine avec réservation en ligne de Beetle Booth : une Coccinelle vintage transformée en photo booth, qui vient sur les événements en Israël.
Next.js 16 · Tailwind 4 · Framer Motion · Lenis. Hébreu par défaut (RTL), anglais, français, espagnol.

## Commandes

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run classify   # assets/raw → assets/<catégorie> (sélection + recadrages)
npm run media      # assets/<catégorie> → public/media (+ FFMPEG=<chemin> pour la boucle vidéo du hero)
npm run contenu    # régénère CONTENU.md (textes 4 langues + infos manquantes)
```

Les originaux Instagram (`assets/raw/`, photos et reels) ne sont pas versionnés.
`scripts/fetch-instagram.mjs` et `scripts/frames.mjs` documentent comment ils ont été récupérés et d'où viennent les images tirées des vidéos.

## Où modifier quoi

- Textes : `locales/he.json`, `en.json`, `fr.json`, `es.json`
- Forfaits, options, prix, acompte : `data/packages.json` (prix masqués tant que `pricesConfirmed` vaut `false`)
- Dates déjà réservées (grisées dans le calendrier) : `data/booked-dates.json`
- Contact, numéro d'entreprise : `data/site.json`
- Avis clients : `data/reviews.json` (masqués tant que `published` n'est pas `true`)
- Logo SVG : `components/Logo.tsx`, `public/logo.svg`, `app/icon.svg`

La demande de réservation part sur WhatsApp (972533070669) avec un récapitulatif complet dans la langue du visiteur.

## Variables d'environnement (Vercel)

| Variable | Rôle |
| --- | --- |
| `RESEND_API_KEY` | Envoi des e-mails (notification + confirmation au client) |
| `BOOKING_NOTIFY_EMAIL` | Adresse qui reçoit les demandes |
| `RESEND_FROM` | Expéditeur sur un domaine vérifié dans Resend |
| `NEXT_PUBLIC_DEPOSIT_MODE` | `stripe` pour proposer l'acompte en ligne (sinon WhatsApp seul) |
| `STRIPE_SECRET_KEY` | Clé Stripe (l'acompte exige aussi `pricesConfirmed: true`) |

Pour Cardcom, Tranzila ou Meshulam/Grow, remplacer `app/api/deposit/route.ts`.
Google Calendar plus tard : remplacer la lecture de `data/booked-dates.json` dans `lib/booking.ts` par un appel à l'agenda (API ou flux iCal).
