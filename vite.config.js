import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "./",
  //  server: {
  //   host: '127.0.0.1',   // force IPv4 (fixes ::1 error)
  //   port: 3000,          // safe port
  //   strictPort: true
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
