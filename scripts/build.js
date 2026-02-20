import { transform } from 'lightningcss';
import { build } from 'esbuild';
import fs from 'fs/promises';

async function runBuild() {
  const cssFile = await fs.readFile('./src/bare.css');
  let { code } = transform({
    filename: 'bare.css',
    code: cssFile,
    minify: true,
    targets: { safari: (17 << 16) }
  });
  await fs.mkdir('./dist', { recursive: true });
  await fs.writeFile('./dist/bare.min.css', code);

  await build({
    entryPoints: ['./src/fonts.js'],
    bundle: true,
    minify: true,
    outfile: './dist/fonts.min.js',
    format: 'esm'
  });

  console.log('⚡ Bare-mod: Build complete!');
}

runBuild();