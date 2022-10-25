import { defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: [
        "src/testing-extensions/vue-test-utils-extensions-setup.ts",
        "vuetify-test.config.ts",
      ],
      deps: {
        inline: ["vuetify"],
      },
      globals: true,
    },
  })
);
