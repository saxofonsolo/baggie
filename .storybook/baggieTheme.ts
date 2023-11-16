import { create } from "@storybook/theming";

export default create({
    base: "light",
    brandTitle: "baggie",
    brandImage: "./baggie-title.svg",

    colorPrimary: "#FC0",
    colorSecondary: "#C90",

    // UI
    appBg: "#F8F8F8",
    appContentBg: "#ffffff",
    appBorderRadius: 5,

    // Text colors
    textColor: "#134",
    textInverseColor: "#900",
    textMutedColor: "#999",

    // Toolbar default and active colors
    barTextColor: "#9E9E9E",
    barSelectedColor: "#000",
    barBg: "#F8F8F8",

    // Form colors
    inputBorderRadius: 3,
});
