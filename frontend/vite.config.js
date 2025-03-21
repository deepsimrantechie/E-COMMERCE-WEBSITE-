import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  optimizeDeps: {
    include: ["react-router-dom"], // Ensure that `react-router-dom` is bundled properly
  },
};
