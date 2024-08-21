/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true, // Enable global variables like `describe`, `it`, etc.
    environment: "node", // Use Node.js environment for testing
    coverage: {
      // Configure coverage options
      reporter: ["text", "json", "html"], // Coverage reporters
    },
  },
});
