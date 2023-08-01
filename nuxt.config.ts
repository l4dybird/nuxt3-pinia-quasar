import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
const quasarModules = ["quasar", "@quasar/extras", "@quasar/extras"];

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
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const seprateModule = quasarModules.find((module) =>
              id.includes(module)
            );
            if (seprateModule) return seprateModule;
          },
        },
      },
      sourcemap: true,
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
