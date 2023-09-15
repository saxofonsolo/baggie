import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as packageJson from "./package.json";

export default defineConfig({
    plugins: [
        react({ jsxRuntime: "classic" }),
        dts({
            insertTypesEntry: true,
        }),
        cssInjectedByJsPlugin({ relativeCSSInjection: true }),
    ],
    css: {
        modules: {
            scopeBehaviour: "local",
            hashPrefix: "baggie",
        },
    },
    build: {
        outDir: "lib",
        minify: false,
        cssCodeSplit: true,
        target: "esnext",
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "@baggie/react",
            formats: ["es", "cjs"],
            fileName: (format, entryName) =>
                `${entryName}.${format === "es" ? "js" : "cjs"}`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                exports: "named",
                inlineDynamicImports: false,
                preserveModules: true,
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
