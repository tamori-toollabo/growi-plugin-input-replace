import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    manifest: true,
    target: 'ESNext',
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/client-entry.tsx'),
      name: 'GrowiPluginInputReplace',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'client-entry.js',
      },
      external: ['@growi/plugin']
    },
  },
  plugins: [react(),
    {
      name: 'generate-growi-manifest',
      writeBundle() {
        const manifest = {
          name: 'growi-plugin-input-replace',
          version: '0.0.1',
          description: 'A Growi plugin that replaces code placeholders with user inputs',
          type: 'script',
          author: 'toollabo-tamori',
          clientEntries: [
            {
              src: 'client-entry.js'
            }
          ]
        };
        fs.writeFileSync(resolve(__dirname, 'dist/manifest.json'), JSON.stringify(manifest, null, 2));
      },
    },
  ],
});
