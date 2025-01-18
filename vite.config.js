import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/',
  plugins: [react()],
  build: {
<<<<<<< Updated upstream
    rollupOptions: {
      external: ['react-redux'],
    }
=======
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
>>>>>>> Stashed changes
  }
})
