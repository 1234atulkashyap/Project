import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

// import path from "path";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//   root: path.resolve(__dirname), // Set the root to the current directory
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });


