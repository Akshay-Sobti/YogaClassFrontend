import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5000,
    allowedHosts: 'yogaclassfrontend.onrender.com'
    },
  root: ".", // Ensure it is looking at the correct directory
  build: {
    outDir: "dist",
  },
});
