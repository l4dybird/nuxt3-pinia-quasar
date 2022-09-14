import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue"],
      dts: true,
    }),
    Vue({
      template: { transformAssetUrls },
    }),
    quasar(),
  ],
  resolve: {
    alias: [{ find: "~/", replacement: "./" }],
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
