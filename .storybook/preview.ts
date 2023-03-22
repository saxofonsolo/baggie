const preview = {
    actions: { argTypesRegex: "^on[A-Z].*", disable: true },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
        },
        options: {
            storySort: {
                order: ["Overview", "Guidelines", "components", "utilities"],
            },
        },
    },
};

export default preview;
