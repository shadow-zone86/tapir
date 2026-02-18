module.exports = {
  extends: ['stylelint-config-standard-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['use', 'include', 'mixin', 'media'] }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep', 'global'] }
    ],
    'selector-class-pattern': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'number-max-precision': null,
    'no-empty-source': null,
    'scss/at-if-no-null': null,
    'scss/dollar-variable-empty-line-before': null,
    'color-hex-length': null,
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,
    'value-keyword-case': null
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/.nuxt/**', '**/.output/**']
}
