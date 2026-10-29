
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages Configuration
export default defineConfig({
  plugins: [react()],
  base: '/rishaba/',
})
