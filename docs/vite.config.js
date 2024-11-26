// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
    }
  },
  resolve: {
    alias: {
      'firebase/app': '/node_modules/firebase/app/dist/index.esm.js',
      'firebase/auth': '/node_modules/firebase/auth/dist/index.esm.js',
      'firebase/firestore': '/node_modules/firebase/firestore/dist/index.esm.js',
      'firebase/storage': '/node_modules/firebase/storage/dist/index.esm.js'
    }
  }
});
