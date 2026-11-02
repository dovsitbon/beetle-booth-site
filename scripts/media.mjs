// Prépare les photos classées dans assets/<catégorie>/ pour le web :
// public/media/<catégorie>/<nom>.jpg (côté long 1600 px max ; les sources Instagram font 720 à 1080 px).
// next/image sert ensuite des variantes AVIF/WebP à la bonne taille.
// Avec FFMPEG=<chemin de ffmpeg>, recrée aussi la boucle vidéo du hero (public/media/hero.mp4).
//   npm run media
import { execFileSync } from "node:child_process";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const CATS = ["hero", "voiture", "histoire", "magnets", "selfie-booth", "glass-prints", "mariages", "bar-bat-mitzvah", "brit", "entreprise-municipal", "galerie"];

let n = 0;
const sizes = {};
for (const cat of CATS) {
  const src = path.join(ROOT, "assets", cat);
  const out = path.join(ROOT, "public/media", cat);
  await mkdir(out, { recursive: true });
  const files = (await readdir(src).catch(() => [])).filter((f) => /\.jpe?g$/i.test(f));
  for (const f of files) {
    const info = await sharp(path.join(src, f))
      .rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(path.join(out, f));
    sizes[`/media/${cat}/${f}`] = [info.width, info.height];
    n += 1;
  }
}

// Dimensions réelles, utilisées par next/image (évite tout décalage de mise en page)
await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");

// Image Open Graph 1200x630
await sharp(path.join(ROOT, "assets/hero/plage-ashkelon-coucher-soleil.jpg"))
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

// Boucle vidéo du hero : 4,4 s du reel « 21 שניות » (mariage au coucher du soleil), sans son
if (process.env.FFMPEG) {
  const video = (await readdir(path.join(ROOT, "assets/raw"))).find((f) => f.startsWith("beetle-booth_36_") && f.endsWith(".mp4"));
  execFileSync(process.env.FFMPEG, [
    "-loglevel", "error", "-y", "-ss", "14.8", "-t", "4.4", "-i", path.join(ROOT, "assets/raw", video),
    "-an", "-vf", "scale=576:-2,fps=30", "-c:v", "libx264", "-profile:v", "high", "-crf", "30", "-preset", "slow",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", path.join(ROOT, "public/media/hero.mp4"),
  ]);
}

console.log(`${n} images prêtes`);
