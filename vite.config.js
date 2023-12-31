import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    open: true
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
