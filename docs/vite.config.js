import { defineConfig } from 'vite'

export default defineConfig({
  base: '/NumbersHome/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://numbers-home-api.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  }
}) 