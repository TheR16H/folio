import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention:"camelCase",
    },
  },
  server: {
    port: 3000,
    open: true
  },
});