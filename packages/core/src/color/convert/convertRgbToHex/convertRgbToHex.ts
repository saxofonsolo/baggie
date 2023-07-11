import { RGBA } from "../../_interfaces/rgba.interface";

/**
 * Convert an object with RGB color values to a hex color.
 */
export const convertRgbToHex = ({ red, green, blue, alpha }: RGBA): string => {
    const hasAlpha = typeof alpha === "number";
    const alphaValue = hasAlpha ? alpha : 1;
    const hexColor = [
        `0${red.toString(16)}`.slice(-2),
        `0${green.toString(16)}`.slice(-2),
        `0${blue.toString(16)}`.slice(-2),
        hasAlpha && alpha < 1
            ? `0${Math.round(alphaValue * 255).toString(16)}`.slice(-2)
            : "",
    ];

    return `#${hexColor.join("")}`;
};
