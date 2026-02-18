import type { StorybookConfig } from '@storybook/vue3-vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const scssPaths = path.resolve(__dirname, '../src/shared/assets/scss')

const config: StorybookConfig = {
  stories: ['../src/shared/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "${scssPaths}/variables" as *; @use "${scssPaths}/mixins" as *;`,
          },
        },
      },
    })
  },
}

export default config
