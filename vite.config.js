import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build"
  },
  css: {
    modules: {
      localsConvention:"camelCase"
    }
  }, 
  base:"/professional-portfolio/"
})
