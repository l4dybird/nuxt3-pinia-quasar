import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title:"Nuxt3 + Pinia + Quasar",
    }
  },
  ssr: false,
  css: [
    "~/assets/styles/quasar.scss",
    "quasar/dist/quasar.prod.css",
    "@quasar/extras/material-icons/material-icons.css",
  ],
  buildModules: ["@pinia/nuxt"],
  vite: {
    build: {
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        manualChunks(id) {
          if (id.includes("/node_modules/")) {
            const modules = ["quasar", "@quasar", "vue", "@vue"];
            const chunk = modules.find((module) =>
              id.includes(`/node_modules/${module}`)
            );
            return chunk ? `vendor-${chunk}` : "vendor";
          }
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
});
