import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import settings from "./settings.json";

// We include any pics added in settings json
let pics = settings.pics;
// Show most recent first
let assets = pics
  .sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
  });
settings.assets = assets;
console.log(settings);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "layout"),
      helpers: {
        iolink: (url) => {
          return url + "?";
        },
        eq: (a, b) => {
          return a == b;
        },
      },
      context: {
        settings,
      },
    }),
  ],
  build: {
    cssCodeSplit: false,
    outDir: "docs",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
  },
});
