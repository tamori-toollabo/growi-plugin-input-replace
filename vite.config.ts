import { defineConfig } from 'vite';
import { resolve } from 'path';

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
});