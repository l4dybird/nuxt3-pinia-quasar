import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    head: {
        link: [{ href: "/favicon.png" }]
    },
    css: [
        '~/assets/styles/quasar.sass',
        '@quasar/extras/material-icons/material-icons.css'
    ],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    vite: {
        plugins: [
          quasar({
            sassVariables: 'assets/styles/quasar.variables.sass',
          })
        ]
      }
})
