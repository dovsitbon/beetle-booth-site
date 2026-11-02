// Télécharge les médias Instagram listés dans un JSON { list: [{id,i,video,url,vurl}], caps, pic }
// (liste extraite depuis le navigateur via /p/<id>/embed/captioned/, Instagram refusant les requêtes serveur)
// vers assets/raw/beetle-booth_NN_<shortcode>[_video-cover].jpg (+ _video.mp4, logo, légendes)
//   node scripts/fetch-instagram.mjs <liste.json>
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(import.meta.dirname, "../assets/raw");
const { list, caps, pic } = JSON.parse(await readFile(process.argv[2], "utf8"));
await mkdir(OUT, { recursive: true });

async function save(url, name) {
  const res = await fetch(url);
  if (!res.ok) return console.warn(`${name}: HTTP ${res.status}`);
  await writeFile(path.join(OUT, name), Buffer.from(await res.arrayBuffer()));
}

if (pic) await save(pic, "beetle-booth_logo.jpg");
let n = 0;
for (const it of list) {
  n += 1;
  const name = `beetle-booth_${String(n).padStart(2, "0")}_${it.id}${it.video ? "_video-cover" : ""}.jpg`;
  await save(it.url, name);
  if (it.video && it.vurl) await save(it.vurl, name.replace("_video-cover.jpg", "_video.mp4"));
}
await writeFile(path.join(OUT, "beetle-booth_captions.json"), JSON.stringify(caps, null, 2));
console.log(`Total : ${n}`);
