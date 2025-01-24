import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/poll-widget",
  build: {
    sourcemap: true,
    lib: {
      entry: "src/main.tsx",
      name: "App",
      formats: ["iife", "es"],
      fileName: (format) => `floating-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        intro: 'var process = { env: { NODE_ENV: "production" } };',
      },
    },
  },
});
