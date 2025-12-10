import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
  plugins: [
    svelte()
  ],
  resolve: {
    alias: {
      '/$/': path.resolve(__dirname, './src'),
      '/$collections': path.resolve(__dirname, './src/collections'),
      '/$components': path.resolve(__dirname, './src/components'),
      '/$lib': path.resolve(__dirname, './src/lib'),
      // Fix for routify if needed, sometimes alias helper helps
    }
  },
  optimizeDeps: {
    include: ['paper/dist/paper-core', 'dayjs/esm', 'dayjs/esm/plugin/calendar'],
    exclude: ['@roxi/routify']
  },
  server: {
    port: 5000 // Default svite was probably 5000 or 3000, vite default is 5173 but let's stick to standard if possible or let it pick.
  }
})
