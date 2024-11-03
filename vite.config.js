import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: 'src',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: false,
    open: true,
    cors: true
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        'chi-sono': 'pages/chi-sono.html',
        progetti: 'pages/progetti.html',
        contatti: 'pages/contatti.html',
        cv: 'pages/cv.html'
      }
    }
  }
}) 