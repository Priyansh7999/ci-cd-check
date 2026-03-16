import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for browser environment simulation
    setupFiles: './test_src/setupTests.ts', // Optional: for custom matchers
    coverage: {
      thresholds: {
        branches: 80, // Example: enforce coverage thresholds
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
})
