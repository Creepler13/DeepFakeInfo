import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import vuetify from "vite-plugin-vuetify"
import bundlesize from "vite-plugin-bundlesize";

export default defineConfig({
  base: "/DeepFakeInfo/",
  plugins: [vue(),
  vueDevTools(),
  vuetify({ autoImport: true }),
  bundlesize()],
  assetsInclude: ['**/*.txt'],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }, build: {
    sourcemap: "hidden",
  },
});
