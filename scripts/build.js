import esbuild from 'esbuild';
import { transform } from 'lightningcss';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

async function build() {
  mkdirSync('dist', { recursive: true });

  const { code } = transform({
    filename: 'src/bare.css',
    code: readFileSync('src/bare.css'),
    minify: true,
    sourceMap: false,
  });
  writeFileSync('dist/bare.min.css', code);

  await esbuild.build({
    entryPoints: ['src/fonts.js', 'src/theme.js'],
    bundle: true,
    minify: true,
    outdir: 'dist',
    entryNames: '[name].min',
    format: 'esm',
  });

  console.log('⚡ Bare-mod: Build complete!');
}

build().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});