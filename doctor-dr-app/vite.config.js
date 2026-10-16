import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                          // enables global expect, describe, it
    environment: "jsdom",                   // simulates browser DOM
    setupFiles: "./src/setupTests.js",      // runs before each test file
  },
})
