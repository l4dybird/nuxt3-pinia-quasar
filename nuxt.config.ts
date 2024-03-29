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
  modules: ["@nuxt/test-utils/module", "@pinia/nuxt"],
  build: {
    transpile: ["quasar"],
  },
  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: "_nuxt/[hash].js",
            assetFileNames: "_nuxt/[hash][extname]",
            entryFileNames: "_nuxt/[hash].js",
          },
        },
      },
    },
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
    enabled: true,

    vscode: {},

    timeline: {
      enabled: true,
    },
  },
});
