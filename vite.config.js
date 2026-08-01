import { defineConfig } from 'vite'

export default defineConfig({
  // Custom domain — base is '/' (not the repo name)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Inline small assets to avoid path issues
    assetsInlineLimit: 4096,
  },
})
