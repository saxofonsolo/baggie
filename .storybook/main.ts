// @ts-ignore
import remarkSlug from "remark-slug";
import remarkGfm from "remark-gfm";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        "../docs/**/*.mdx",
        {
            titlePrefix: "Color",
            directory: "../packages/color/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Detection",
            directory: "../packages/detection/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "DOM",
            directory: "../packages/dom/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Functions",
            directory: "../packages/functions/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "Math",
            directory: "../packages/math/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "React",
            directory: "../packages/react/src",
            files: "**/*.@(stories.tsx|mdx)",
        },
        {
            titlePrefix: "String",
            directory: "../packages/string/src",
            files: "**/*.mdx",
        },
        {
            titlePrefix: "TypeScript",
            directory: "../packages/typescript/src",
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
