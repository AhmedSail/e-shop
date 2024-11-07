import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // To increase chunk size limit to 1MB
    rollupOptions: {
      external: ["react-redux", "react-router-dom"], // Added @reduxjs/toolkit as external
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@reduxjs/toolkit"],
        },
      },
    },
  },
});
