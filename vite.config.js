import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/tarotapp/' : '/',


  server: {
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:4891',
        changeOrigin: true,
      },
    },
  },
});



