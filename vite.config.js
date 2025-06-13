import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'BootstrapPicker',
      fileName: 'bootstrap-picker',
    },
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap',
        },
      },
    },
  },
  test: {
    browser: {
      enabled: true,
      provider: 'webdriverio',
      headless: true,
      instances: [
        { browser: 'chrome' },
      ],
    },
    coverage: {
      provider: 'istanbul',
    },
  },
})
