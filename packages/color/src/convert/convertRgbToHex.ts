import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Convert an RGB color value to a hexadecimal color.
 */
export const convertRgbToHex = (
    { red, green, blue, alpha = 1 }: RGBA,
    includeAlpha = false
): string => {
    const hexColor = [
        `0${red.toString(16)}`.slice(-2),
        `0${green.toString(16)}`.slice(-2),
        `0${blue.toString(16)}`.slice(-2),
        includeAlpha
            ? `0${Math.round(alpha * 255).toString(16)}`.slice(-2)
            : "",
    ];

    return `#${hexColor.join("")}`;
};
