import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.scss",
    }),
  ],
  test: {
    alias: {
      "~": "./",
    },
    dir: "tests",
    globals: true,
    environment: "happy-dom",
  },
});
