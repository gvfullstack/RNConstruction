import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import globby from 'globby';
import pLimit from 'p-limit';

const ROOT = process.cwd();
const PUB_DIR = path.join(ROOT, 'public');        // adjust if yours differs
const MAX_W = 2000;                               // covers/heroes: 2000–2400 is plenty
const CONCURRENCY = 4;                            // tune for your CPU

const limit = pLimit(CONCURRENCY);

const isJpg = (p) => /\.(jpe?g)$/i.test(p);
const isPng = (p) => /\.png$/i.test(p);

async function optimizeOne(absPath) {
  const rel = path.relative(ROOT, absPath);
  const ext = path.extname(absPath).toLowerCase();
  const base = absPath.slice(0, -ext.length);
  const webpPath = `${base}.webp`;

  const img = sharp(absPath, { failOn: 'none' });
  const meta = await img.metadata();

  // resize only if wider than cap
  const width = meta.width ?? MAX_W;
  const resized = width > MAX_W ? img.resize({ width: MAX_W }) : img.clone();

  // write optimized original in-place
  if (isJpg(absPath)) {
    await resized.jpeg({ quality: 80, mozjpeg: true }).toFile(absPath);
  } else if (isPng(absPath)) {
    await resized.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(absPath);
  }

  // also write WebP neighbor
  await resized.webp({ quality: 78 }).toFile(webpPath);

  return rel;
}

async function main() {
  console.log('Scanning public/ for images…');
  const files = await globby(['public/**/*.{jpg,jpeg,png}'], { absolute: true });

  if (!files.length) {
    console.log('No JPG/PNG files found under public/. Nothing to do.');
    return;
  }

  console.log(`Found ${files.length} images. Optimizing (cap ${MAX_W}px)…`);
  let done = 0;
  await Promise.all(
    files.map((f) =>
      limit(() =>
        optimizeOne(f)
          .then(() => {
            done += 1;
            if (done % 10 === 0) console.log(`  ${done}/${files.length}…`);
          })
          .catch((e) => console.warn('  ⚠️  Skipped:', f, e.message))
      )
    )
  );
  console.log('✅ Optimization complete.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
