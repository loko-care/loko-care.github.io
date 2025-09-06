import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for organization GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
