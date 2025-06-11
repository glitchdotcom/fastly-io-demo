import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import settings from "./settings.json";

// Read the glitch assets file
/*
const fs = require("fs");
const data = fs
  .readFileSync("./.glitch-assets")
  .toString("UTF8")
  .split("\n")
  .filter((l) => l.length > 0)
  .map((l) => JSON.parse(l));
// Get undeleted pics
const pics = data.filter(
  (img) => img && img.deleted == undefined && img.type.indexOf("image") >= 0
);
// We won't display pics marked as deleted
const deleted = data.filter((img) => img && img.deleted).map((d) => d.uuid);
*/
// We also include any pics added in settings json
let pics = settings.pics;
/*added.forEach((a) => {
  let lastSlash = a.url.lastIndexOf("/");
  a.thumbnail =
    a.url.substring(0, lastSlash + 1) +
    "thumbnails%2F" +
    a.url.substring(lastSlash + 1);
  a.name = a.url.substring(lastSlash + 1).split("?")[0];
});*/
//let pics = [];
//pics.push(...added);
// Show most recent first
let assets = pics
//  .filter((img) => !deleted.includes(img.uuid))
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
/*        iolink: (url) => {
          return url.replace("cdn.glitch.global", "images.glitch.global") + "?";
        },*/
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
    outDir: "build",
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
