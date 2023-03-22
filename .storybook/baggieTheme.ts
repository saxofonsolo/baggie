import { create } from "@storybook/theming/create";

export default create({
    base: "light",
    brandTitle: "baggie",
    brandImage: "./baggie.svg",

    colorPrimary: "#FC0",
    colorSecondary: "#C90",

    // UI
    appBg: "#F9F8F5",
    appContentBg: "#ffffff",
    appBorderRadius: 5,

    // Text colors
    textColor: "#134",
    textInverseColor: "#900",
    textMutedColor: "#999",

    // Toolbar default and active colors
    barTextColor: "#9E9E9E",
    barSelectedColor: "#000",
    barBg: "#F9F8F5",

    // Form colors
    inputBorderRadius: 3,
});
