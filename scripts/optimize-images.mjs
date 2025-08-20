// scripts/optimize-images.mjs
import { globby } from 'globby';
import sharp from 'sharp';
import { dirname, extname, join, basename } from 'node:path';
import { mkdir } from 'node:fs/promises';

// Which files to optimize
const INPUT_GLOBS = ['public/**/*.{jpg,jpeg,png}'];

// Where to write optimized variants (inside public/)
const OUT_ROOT = 'public/optimized';

// Output widths (you can adjust)
const WIDTHS = [1600, 1200, 800];

// Quality settings
const JPEG_Q = 76;
const WEBP_Q = 68;
const AVIF_Q = 50;

const files = await globby(INPUT_GLOBS, { gitignore: true });

if (!files.length) {
  console.log('No images found for optimization.');
  process.exit(0);
}

for (const file of files) {
  const ext = extname(file).toLowerCase(); // .jpg/.jpeg/.png
  const base = basename(file, ext);
  // keep folder structure under /optimized
  const relDir = dirname(file).replace(/^public[\\/]/, '');
  const outDir = join(OUT_ROOT, relDir);
  await mkdir(outDir, { recursive: true });

  const img = sharp(file, { failOn: 'none' });

  for (const w of WIDTHS) {
    const chain = img.clone().resize({ width: w, withoutEnlargement: true });

    // Keep original format too
    if (ext === '.jpg' || ext === '.jpeg') {
      await chain
        .jpeg({ quality: JPEG_Q, mozjpeg: true })
        .toFile(join(outDir, `${base}-${w}.jpg`));
    } else if (ext === '.png') {
      await chain
        .png({ compressionLevel: 9, palette: true })
        .toFile(join(outDir, `${base}-${w}.png`));
    }

    // Modern formats
    await chain.clone().webp({ quality: WEBP_Q }).toFile(join(outDir, `${base}-${w}.webp`));
    await chain.clone().avif({ quality: AVIF_Q }).toFile(join(outDir, `${base}-${w}.avif`));
  }

  console.log(`✓ Optimized: ${file}`);
}

console.log('\nDone. Optimized files were written to /public/optimized/…');
