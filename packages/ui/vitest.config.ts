import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.test.ts'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setup-tests.ts'],
  },
})
