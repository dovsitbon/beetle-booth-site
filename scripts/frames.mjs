// Extrait des images nettes (sans texte incrusté) des reels Instagram vers assets/raw/frames/
//   node scripts/frames.mjs <chemin de ffmpeg>
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const FFMPEG = process.argv[2] ?? "ffmpeg";
const RAW = path.resolve("assets/raw");
const OUT = path.join(RAW, "frames");
mkdirSync(OUT, { recursive: true });

// numéro de la vidéo (beetle-booth_NN_…) → instants en secondes
const PICKS = {
  "05": [1.8],
  "06": [4.2, 5.4],
  "07": [7.8, 9.0, 10.2, 11.4, 12.6, 15.0],
  "10": [5.4],
  "11": [1.8, 5.4, 9.0, 10.2, 11.4],
  "21": [5.4],
  "22": [3.0],
  "23": [1.8, 7.8],
  "25": [1.8],
  "29": [1.8],
  "36": [15.0, 16.2, 17.4, 18.6, 19.8],
  "37": [15.0, 31.8, 33.0, 34.2, 46.2],
};

const videos = readdirSync(RAW).filter((f) => f.endsWith("_video.mp4"));
for (const [n, times] of Object.entries(PICKS)) {
  const file = videos.find((f) => f.startsWith(`beetle-booth_${n}_`));
  if (!file) { console.warn(`vidéo ${n} introuvable`); continue; }
  for (const t of times) {
    const name = `frame-${n}-${String(t).replace(".", "_")}.jpg`;
    execFileSync(FFMPEG, ["-loglevel", "error", "-y", "-ss", String(t), "-i", path.join(RAW, file), "-frames:v", "1", "-q:v", "1", path.join(OUT, name)]);
    console.log(name);
  }
}
