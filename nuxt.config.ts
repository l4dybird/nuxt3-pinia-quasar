import { defineNuxtConfig } from "nuxt";
import { quasar } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  meta: {
    title: "Nuxt3 + Pinia + Quasar",
  },
  css: [
    "~/assets/styles/quasar.scss",
    "quasar/dist/quasar.prod.css",
    "@quasar/extras/material-icons/material-icons.css",
  ],
  buildModules: ["@pinia/nuxt"],

  experimental: {
    reactivityTransform: true,
  },
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
    plugins: [
      quasar({
        sassVariables: "assets/styles/quasar.variables.scss",
      }),
    ],
    define: {
      "import.meta.vitest": false,
    },
  },
});
