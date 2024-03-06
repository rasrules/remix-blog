import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watchExclude: [
        ".*\\/node_modules\\/.*",
        ".*\\/build\\/.*",
        ".*\\/postgres-data\\/.*",
    ],
    coverage: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
    }    
  },
});
