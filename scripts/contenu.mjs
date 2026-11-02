// Génère CONTENU.md : infos manquantes, tous les textes (he/en/fr/es) et les forfaits.
//   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LANGS = ["he", "en", "fr", "es"];
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const loc = Object.fromEntries(await Promise.all(LANGS.map(async (l) => [l, await json(`locales/${l}.json`)])));
const pk = await json("data/packages.json");
const site = await json("data/site.json");
const cal = await json("data/booked-dates.json");

const MISSING = [
  "Prix réels des 3 forfaits et des options (heure supplémentaire, album, cadre sur mesure, tirages sur verre, Audio Memories, tapis rouge) → `data/packages.json`, puis passer `pricesConfirmed` à `true`. En attendant, le site affiche « prix selon l'événement ».",
  "Contenu exact de chaque forfait et durée de présence incluse (3 h / 3 h / 4 h mis en exemple), avec ce qui est vraiment inclus (galerie numérique, album, tirage sur verre, tapis rouge…).",
  "Zones desservies et frais de déplacement (le site dit « partout en Israël », à confirmer).",
  "Dates déjà réservées → `data/booked-dates.json` (liste vide pour l'instant) ; délai minimum de réservation (3 jours par défaut). Plus tard : lien Google Calendar.",
  "Prénom de l'épouse d'Adir, confirmation du prénom Adir et accord pour publier leurs photos ; une vraie photo des deux fondateurs ensemble (aucune sur Instagram).",
  "Vrais avis clients (avec accord) → `data/reviews.json` ; la section reste masquée tant qu'aucun avis n'est publié.",
  "Numéro d'entreprise (עוסק מורשה / ח.פ.) → `data/site.json` › `businessId`, plus mentions légales et conditions d'annulation.",
  "Réponses FAQ à confirmer : surface nécessaire pour la Coccinelle et le selfie booth, électricité, durée d'installation, extérieur en cas de pluie.",
  "Photos et vidéos en bonne qualité : les visuels viennent d'Instagram (720 à 1440 px, certains tirés de reels). Aucune photo de tirage sur verre ni d'Audio Memories, une seule photo de brit, pas de vraie photo des fondateurs.",
  "Accord pour citer le mariage de Raz et Naama, la bat mitzvah de Shira et la municipalité d'Ashkelon (Tou BeAv) ; la photo « Prada Beauty » est affichée sans citer la marque, à confirmer.",
  "E-mail de réception des demandes + compte Resend (domaine d'envoi vérifié) pour activer les e-mails de notification et de confirmation.",
  "Acompte en ligne : prestataire choisi (Cardcom, Tranzila, Meshulam/Grow ou Stripe), montant (500 ₪ en exemple) et clés.",
  "Logo vectoriel officiel : le logo a été redessiné en SVG d'après l'image Instagram (150 px) ; à remplacer si un fichier source existe.",
  "Nom de domaine souhaité (ex. beetlebooth.co.il) pour remplacer l'adresse Vercel.",
  "Relecture des textes en hébreu par les fondateurs (ton, formulations).",
];

const flat = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) return flat(v, key);
    if (Array.isArray(v)) return v.flatMap((item, i) => (item && typeof item === "object" ? flat(item, `${key}.${i}`) : [[`${key}.${i}`, item]]));
    return [[key, v]];
  });

const get = (obj, key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

let md = `# Beetle Booth · חיפושיצילום – contenu du site\n\n`;
md += `Généré par \`npm run contenu\` à partir de \`locales/*.json\` et \`data/*.json\`. Pour modifier un texte, éditer ces fichiers (pas ce document).\n\n`;
md += `Contact affiché : WhatsApp ${site.phoneDisplay} (${site.phoneIntl}) · Instagram ${site.instagramHandle}\n\n`;
md += `## Informations manquantes à demander\n\n${MISSING.map((m, i) => `${i + 1}. ${m}`).join("\n")}\n\n`;

md += `## Forfaits et options\n\n`;
md += `> Prix d'exemple, à remplir (\`pricesConfirmed: ${pk.pricesConfirmed}\` : aucun prix n'est affiché sur le site). Acompte d'exemple : ${pk.deposit} ₪.\n\n`;
for (const p of pk.packages) {
  md += `### ${p.name.en}${p.featured ? " (mis en avant)" : ""}\n\n`;
  md += `- À partir de ${p.priceFrom} ₪ (À REMPLIR) · ${p.hours} h sur place (À CONFIRMER)\n`;
  for (const l of LANGS) md += `- ${l.toUpperCase()} : ${p.tagline[l]}\n`;
  md += `- Inclus : ${p.includes.map((i) => loc.fr.packages.includes[i]).join(" · ")}\n\n`;
}
md += `### Options\n\n${pk.options.map((o) => `- ${loc.he.packages.options[o.id]} / ${loc.fr.packages.options[o.id]} : ${o.price} ₪${o.per === "hour" ? " / heure" : ""} (À REMPLIR)`).join("\n")}\n\n`;
md += `### Calendrier\n\n- Dates réservées : ${cal.booked.length ? cal.booked.join(", ") : "aucune pour l'instant (À REMPLIR)"}\n- Délai minimum : ${cal.minLeadDays} jours · réservation jusqu'à ${cal.maxMonthsAhead} mois à l'avance\n\n`;

md += `## Textes du site (4 langues)\n\n`;
let section = "";
for (const [key] of flat(loc.he)) {
  if (key === "lang") continue;
  const top = key.split(".")[0];
  if (top !== section) {
    section = top;
    md += `### ${section}\n\n`;
  }
  const vals = LANGS.map((l) => get(loc[l], key));
  if (vals.every((v) => v === "" || v == null)) continue;
  md += `**${key}**\n\n${LANGS.map((l, i) => `- ${l.toUpperCase()} : ${vals[i] === "" ? "_(vide)_" : vals[i]}`).join("\n")}\n\n`;
}

await writeFile(path.join(ROOT, "CONTENU.md"), md);
console.log("CONTENU.md généré");
