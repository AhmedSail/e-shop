// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["react-redux", "@reduxjs/toolkit", "react-router-dom"],
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // لتصبح 1 ميجابايت
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-redux",
            "@reduxjs/toolkit",
          ],
        },
      },
    },
  },
});
