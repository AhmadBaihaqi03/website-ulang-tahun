import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'proattack-kati-ungirthed.ngrok-free.dev' // Masukkan host yang error tadi ke sini
    ]}
})
