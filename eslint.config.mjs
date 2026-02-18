import withNuxt from './.nuxt/eslint.config.mjs'
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'

export default withNuxt(
  {
    ignores: ['**/storybook-static/**', '**/.nuxt/**', '**/.output/**', '**/dist/**']
  },
  {
    plugins: { '@eslint-community/eslint-comments': eslintComments },
    rules: {
      'vue/multi-word-component-names': ['error', { ignores: ['Button', 'Catalog', 'Header', 'Footer', 'default', 'index'] }],
      'vue/html-self-closing': ['warn', { html: { void: 'never', normal: 'always', component: 'always' } }],
      '@eslint-community/eslint-comments/no-unused-disable': 'error'
    }
  }
)
