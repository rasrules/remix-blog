import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.test.{js,ts,jsx,tsx}"],
      serverModuleFormat: "esm",
    }),
    netlifyPlugin(), tsconfigPaths()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup-test-env.ts"],
    include: ["app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watchExclude: [
        ".*\\/node_modules\\/.*",
        ".*\\/build\\/.*",
        ".*\\/postgres-data\\/.*",
    ],
    coverage: {
        //provider: 'jest',
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
    }    
  },
});
