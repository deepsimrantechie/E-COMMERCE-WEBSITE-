import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Optional: Custom server configuration
  server: {
    port: 5174, // Custom port for your development server
  },
});
