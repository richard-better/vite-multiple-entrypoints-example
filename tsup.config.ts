import { defineConfig } from 'tsup';

import pkgJson from './package.json';

export const tsup = defineConfig({
  entry: ['./src/index.ts', './src/components/markdown-article/article.tsx', './src/components/rich-text-article/article.tsx'],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: {},
  format: ['esm', 'cjs'],
  legacyOutput: false,
  treeshake: true,
});
