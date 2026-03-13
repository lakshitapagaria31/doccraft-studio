import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [path.resolve(__dirname, "../src/test/setup.ts")],
    include: ["../src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    preserveSymlinks: true,
    alias: { "@": path.resolve(__dirname, "../src") },
  },
});
