import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'client-entry.ts'),
      formats: ['iife'],
      name: 'GrowiPluginInputReplace',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'client.js',
      },
    },
  },
  plugins: [
    {
      name: 'generate-manifest',
      writeBundle() {
        const manifest = {
          name: 'growi-plugin-input-replace',
          version: '0.0.1',
          description: 'A Growi plugin that replaces code placeholders with user inputs',
          type: 'script',
          entry: 'client.js',
          author: 'toollabo-tamori',
        };
        fs.writeFileSync(resolve(__dirname, 'dist/manifest.json'), JSON.stringify(manifest, null, 2));
      },
    },
  ],
});