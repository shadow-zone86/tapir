/// <reference types="node" />
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(__dirname, 'src')
const scssPaths = path.resolve(srcDir, 'shared/assets/scss')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'src',
  dir: {
    layouts: 'app/layouts',
    plugins: 'app/plugins',
  },
  devtools: { enabled: false },
  css: ['~/shared/assets/css/critical.css', '~/shared/assets/scss/main.scss'],

  alias: {
    '@': srcDir,
  },

  vite: {
    plugins: process.env.ANALYZE
      ? [visualizer({ open: true, filename: 'stats.html', gzipSize: true }) as any] // eslint-disable-line @typescript-eslint/no-explicit-any
      : [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${scssPaths}/variables" as *; @use "${scssPaths}/mixins" as *;`
        }
      }
    }
  },

  modules: ['nuxt-aos', '@pinia/nuxt', '@nuxt/eslint'],

  aos: {
    offset: 50,
    duration: 500,
    easing: 'ease-out',
    once: false
  }
})
