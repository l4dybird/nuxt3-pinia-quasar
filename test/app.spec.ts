import { setup, createPage } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";
import { dependencies } from "package.json";

describe("works with module option setting", async () => {
  const sassVariablesPath = `${fileURLToPath(
    new URL("../playground", import.meta.url)
  )}/assets/styles/quasar.variables.scss`;

  await setup({
    browser: true,
    rootDir: fileURLToPath(new URL("../playground", import.meta.url)),
    server: true,
    nuxtConfig: {
      ssr: false,
      css: [
        "~/assets/styles/quasar.scss",
        "@quasar/extras/material-icons/material-icons.css",
      ],
      hooks: {
        "vite:extendConfig"(config, { isClient }) {
          config.define!.__BROWSER__ = isClient;
        },
      },
      vite: {
        define: {
          __DEV__: false,
          __TEST__: true,
          __FEATURE_PROD_DEVTOOLS__: false,
        },
      },
    },
  });

  it("vue version", async () => {
    const page = await createPage("/");
    const body = await page.innerHTML("body");
    expect(body).toContain("Vue v" + dependencies.vue);
  });

  it("nuxt version", async () => {
    const page = await createPage("/");
    const body = await page.innerHTML("body");
    expect(body).toContain("Nuxt v" + dependencies.nuxt);
  });

  it("quasar version", async () => {
    const page = await createPage("/");
    const body = await page.innerHTML("body");
    expect(body).toContain("Quasar v" + dependencies.quasar);
  });
});
