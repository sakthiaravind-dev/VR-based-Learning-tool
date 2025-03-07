import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'src/backend/dist/client'), // Place frontend in backend dist folder
    emptyOutDir: true, // Clears old files before building
  },
})
