import { defineConfig } from 'vitest/config'

export default defineConfig({
    define: {
        'import.meta.vitest': false,
    },
    test: {
        includeSource: ['helpers/*.{js,ts}'],
    },
})