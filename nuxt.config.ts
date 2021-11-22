import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        link: [{ href: "/favicon.png" }]
    },
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
})
