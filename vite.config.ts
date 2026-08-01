import { defineConfig, mergeConfig, UserConfig } from "vite";
import { vueConfig } from "@nativescript/vite/vue";

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(vueConfig({ mode }), {});
});

