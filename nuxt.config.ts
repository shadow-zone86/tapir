import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const scssPaths = path.resolve(__dirname, 'app/assets/scss')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${scssPaths}/variables" as *; @use "${scssPaths}/mixins" as *;`
        }
      }
    }
  },

  modules: ['nuxt-aos'],

  aos: {
    offset: 50,
    duration: 500,
    easing: 'ease-out',
    once: false
  }
})