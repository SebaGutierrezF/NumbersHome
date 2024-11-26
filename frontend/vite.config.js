// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig(({ command, mode }) => ({
  root: '.',
  base: mode === 'production' ? '/NumberHome/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: mode === 'development',
    minify: mode === 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'leaflet': ['leaflet']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    cors: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    modules: false,
    devSourcemap: true
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'leaflet']
  },
  define: {
    'process.env': process.env
  }
}));
