/// <reference types="vitest" />

import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: "tests",
    globals: true,
    environment: 'nuxt'
  },
});
