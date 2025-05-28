// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-08',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/style/tailwind.css'],

  modules: [
    '@nuxt/eslint',
    'template-copyright',
    'shadcn-nuxt',
    '@pinia/nuxt',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  shadcn: {
    componentDir: 'app/components/ui',
  },
})
