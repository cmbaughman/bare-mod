import { transform } from 'lightningcss';
import { build } from 'esbuild';
import fs from 'fs/promises';

async function runBuild() {
  const cssFile = await fs.readFile('./src/base.css');
  let { code } = transform({
    filename: 'base.css',
    code: cssFile,
    minify: true,
    targets: { safari: (17 << 16) }
  });
  await fs.mkdir('./dist', { recursive: true });
  await fs.writeFile('./dist/base.min.css', code);

  await build({
    entryPoints: ['./src/fonts.js'],
    bundle: true,
    minify: true,
    outfile: './dist/fonts.min.js',
    format: 'esm'
  });

  console.log('⚡ Base.css: Build complete!');
}

runBuild();