import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      formatters: true,
    },
    {
      rules: {
        'vue/no-multiple-template-root': 'off',
      },
    },
  ),
)
