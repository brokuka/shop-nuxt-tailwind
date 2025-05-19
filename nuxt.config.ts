// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-08',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/eslint', 'template-copyright', 'shadcn-nuxt'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/style/tailwind.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  shadcn: {
    componentDir: 'app/components/ui',
  },
})
