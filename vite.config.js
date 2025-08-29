import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,   // allow external connections
    port: 5173,
    allowedHosts: [
      'b0e201ef24b6.ngrok-free.app'  // 👈 add your ngrok domain here
    ]
  }
})
