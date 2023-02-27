import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import pkgJson from './package.json';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        'components/markdown-article/article': './src/components/markdown-article/article.tsx',
        'components/rich-text-article/article': './src/components/rich-text-article/article.tsx',
      },
      name: 'support-components',
      formats: ['es', 'cjs'],
    },
    cssCodeSplit: true,

    rollupOptions: {
      // input: getEntryPoints(pkgJson),
      // input: toObjectEntry(getEntryPoints(pkgJson)),
      external: [...Object.keys(pkgJson.peerDependencies ?? {})],
      output: {
        preserveModules: false,
        inlineDynamicImports: false,
      },
    },
  },
});
