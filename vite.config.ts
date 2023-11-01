import { resolve } from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        app: resolve(root, "app", "main.ts"),
        popup: resolve(root, "popup", "index.html"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    }
  },
  plugins: [react()],
  server: {
    port: 8085
  }
})
