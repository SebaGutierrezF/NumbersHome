// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/NumberHome/', // Nombre de tu repositorio
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    modules: false,
  },
});
