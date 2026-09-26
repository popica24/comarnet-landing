import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // CommonJS packages whose default export Node can't resolve when externalized;
    // bundle them into the prerender build (see scripts/prerender.mjs).
    noExternal: [
      "react-countup",
      "countup.js",
      "embla-carousel-react",
      "embla-carousel-autoplay",
      "sweetalert2",
    ],
  },
});
