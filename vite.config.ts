import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Custom domain - no base path needed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["motion", "lucide-react"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "motion", "lucide-react"],
  },
});
