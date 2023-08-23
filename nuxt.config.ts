import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt3 + Pinia + Quasar",
    },
  },
  ssr: false,
  css: [
    "~/assets/styles/quasar.scss",
    "@quasar/extras/material-icons/material-icons.css",
  ],
  modules: ["@nuxt/devtools", "@pinia/nuxt", "nuxt-vitest"],
  build: {
    transpile: ["quasar"],
  },
  vite: {
    vue: {
      template: { transformAssetUrls },
    },
    plugins: [
      quasar({
        sassVariables: "assets/styles/quasar.variables.scss",
      }),
    ],
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,

    // VS Code Server options
    // ...other options
    vscode: {},

    timeline: {
      enabled: true,
    },
  },
});
