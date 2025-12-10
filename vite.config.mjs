import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
            '@roxi/routify/runtime': path.resolve(__dirname, 'node_modules/@roxi/routify/runtime'),
        }
    },
    optimizeDeps: {
        include: ['paper/dist/paper-core', 'dayjs/esm', 'dayjs/esm/plugin/calendar'],
        exclude: ['@roxi/routify']
    },
    server: {
        port: 5000
    }
})
