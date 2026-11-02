// Copie la sélection de assets/raw/ (posts + images tirées des reels) vers assets/<catégorie>/
// avec des noms parlants. `crop: [haut, bas]` (fractions de la hauteur) retire le texte incrusté.
//   npm run classify
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "assets/raw");

// "NN" = beetle-booth_NN_*.jpg ; "f:..." = assets/raw/frames/frame-....jpg
const PICKS = {
  hero: {
    "beetle-mariage-coucher-soleil": "f:36-16_2",
    "beetle-jardin-palmiers": "f:11-1_8",
    "mariage-raz-naama": "03",
    "plage-ashkelon-coucher-soleil": { src: "f:37-46_2", crop: [0.3, 1] },
  },
  voiture: {
    "beetle-mr-mrs": "f:07-9",
    "interieur-banquette": "f:07-11_4",
    "interieur-ring-light": "f:07-15",
    "beetle-porte-ouverte": "f:36-15",
    "beetle-invites-soiree": "f:36-18_6",
    "tapis-rouge-plage": "f:37-33",
    "beetle-fleurs": { src: "04", crop: [0.4, 1] },
    "beetle-rue": { src: "f:37-15", crop: [0, 0.72] },
  },
  histoire: {
    "avant-restauration": { src: "f:05-1_8", crop: [0, 0.5] },
    "restauration-sieges": "f:06-4_2",
    "restauration-banquette": "f:06-5_4",
    "fondateur-beetle": "39",
    "installation-plage": "f:37-34_2",
  },
  magnets: {
    "bandes-noeuds-blancs": "28",
    "bandes-kraft-fleurs-sechees": "27",
    "bande-couronne-fleurs": "31",
    "bandes-noires-noeuds": "33",
    "bandes-arche": "34",
    "bandes-kraft-capot": "26",
    "bandes-capot-beetle": "f:25-1_8",
    "bandes-mrs-mr": "f:29-1_8",
    "bandes-eventail": "f:11-10_2",
    "fillette-bandes": "f:11-11_4",
    "bande-coucher-soleil": "35",
    "tirages-anniversaire": "30",
  },
  "selfie-booth": {
    "borne-ring-light": "24",
    "borne-ecran": "21",
    "borne-panier-cadeaux": "f:22-3",
    "borne-invitee": "f:21-5_4",
    "borne-jardin-nuit": "f:10-5_4",
    "borne-ecran-gros-plan": "f:23-7_8",
    "groupe-borne": "19",
    "groupe-mur-briques": "f:23-1_8",
  },
  "glass-prints": {},
  mariages: {
    "raz-naama-entree": "03",
    "bandes-naama-raz": "28",
    "beetle-mariage-soiree": "f:36-17_4",
    "beetle-mr-mrs-pierre": "f:07-7_8",
  },
  "bar-bat-mitzvah": {
    "bat-mitzvah-shira": "18",
    "ados-dans-beetle": "f:11-5_4",
    "ados-accessoires": "f:11-9",
    "enfants-dans-beetle": "f:36-19_8",
    "bandes-bat-mitzvah": "34",
  },
  brit: {
    "brit-rishon-lezion": { src: "41", crop: [0, 0.6] },
  },
  "entreprise-municipal": {
    "tou-beav-ashkelon-tapis-rouge": "f:37-31_8",
    "tou-beav-ashkelon-bebe": "38",
    "prada-beauty": "32",
    "tou-beav-ashkelon-installation": "f:37-33",
  },
  galerie: {
    "souvenir-01": "28",
    "souvenir-02": "f:11-5_4",
    "souvenir-03": "27",
    "souvenir-04": "f:36-19_8",
    "souvenir-05": "31",
    "souvenir-06": "f:23-1_8",
    "souvenir-07": "33",
    "souvenir-08": "38",
    "souvenir-09": "f:11-11_4",
    "souvenir-10": "34",
    "souvenir-11": "35",
    "souvenir-12": "f:07-15",
    "souvenir-13": "32",
    "souvenir-14": "f:29-1_8",
  },
};

const raws = await readdir(RAW);
function resolve(src) {
  if (src.startsWith("f:")) return path.join(RAW, "frames", `frame-${src.slice(2)}.jpg`);
  const f = raws.find((x) => x.startsWith(`beetle-booth_${src}_`) && x.endsWith(".jpg"));
  if (!f) throw new Error(`${src} introuvable`);
  return path.join(RAW, f);
}

let n = 0;
for (const [cat, items] of Object.entries(PICKS)) {
  const dir = path.join(ROOT, "assets", cat);
  await mkdir(dir, { recursive: true });
  for (const [name, spec] of Object.entries(items)) {
    const { src, crop } = typeof spec === "string" ? { src: spec } : spec;
    const file = resolve(src);
    let img = sharp(file).rotate();
    if (crop) {
      const { width, height } = await sharp(file).metadata();
      const top = Math.round(height * crop[0]);
      img = img.extract({ left: 0, top, width, height: Math.round(height * crop[1]) - top });
    }
    await img.jpeg({ quality: 95 }).toFile(path.join(dir, `${name}.jpg`));
    n += 1;
  }
}
await sharp(path.join(RAW, "beetle-booth_logo.jpg")).toFile(path.join(ROOT, "assets/logo-instagram.jpg"));
console.log(`${n} images classées`);
