import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target:"static",
  meta: {
    title: 'Nuxt3 + Pinia + Quasar',
  },
  css: [
    '~/assets/styles/quasar.scss',
    '@quasar/extras/material-icons/material-icons.css'
  ],
  buildModules: [
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.scss',
      })
    ]
  }
});
