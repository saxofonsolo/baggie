// @ts-ignore
import remarkSlug from "remark-slug";
import remarkGfm from "remark-gfm";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        "../docs/**/*.mdx",
        {
            titlePrefix: "Color",
            directory: "../packages/core/src/color",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Detection",
            directory: "../packages/core/src/detection",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "DOM",
            directory: "../packages/core/src/dom",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Functions",
            directory: "../packages/core/src/functions",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Math",
            directory: "../packages/core/src/math",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "React",
            directory: "../packages/react/src",
            files: "**/*.@(stories.tsx|mdx)",
        },
        {
            titlePrefix: "String",
            directory: "../packages/core/src/string",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "TypeScript",
            directory: "../packages/core/src/typescript",
            files: "**/*.mdx",
        },
    ],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-docs",
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm, remarkSlug],
                    },
                },
            },
        },
        "@storybook/addon-essentials",
        "@storybook/addon-links",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    features: {
        buildStoriesJson: true,
        storyStoreV7: true,
    },
    docs: {
        autodocs: true,
    },

    viteFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
    },
};

export default config;
