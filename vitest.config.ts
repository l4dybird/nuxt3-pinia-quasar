// vitest.config.ts
import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    globals: true,
    environment: "nuxt",
    // you can optionally set nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     overrides: {
    //       // other nuxt config you want to pass
    //     }
    //   }
    // }
  },
});
