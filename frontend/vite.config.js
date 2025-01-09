import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Custom port for your development server
  },
  build: {
    rollupOptions: {
      external: ["react-router-dom", "react-toastify"], // Add both here
    },
  },
});
