import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: ['/client-entry.tsx'],
    },
  },
  plugins: [
    {
      name: 'generate-growi-manifest',
      writeBundle() {
        const manifest = {
          name: 'growi-plugin-input-replace',
          version: '0.0.1',
          description: 'A Growi plugin that replaces code placeholders with user inputs',
          type: 'script',
          entry: 'client-entry.js',
          author: 'toollabo-tamori',
        };
        fs.writeFileSync(resolve(__dirname, 'dist/manifest.json'), JSON.stringify(manifest, null, 2));
      },
    },
  ],
});
