import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
const quasarModules = ["quasar", "@quasar/extras", "@quasar/extras"]
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
    "quasar/dist/quasar.prod.css",
    "@quasar/extras/material-icons/material-icons.css",
  ],
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["quasar"]
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const seprateModule = quasarModules.find(module => id.includes(module));
            if (seprateModule) return seprateModule;
          }
        }
      }
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
});
