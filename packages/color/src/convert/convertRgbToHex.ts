import { RGBA } from "..";

/**
 * Convert an RGB color value to a hexadecimal color.
 *
 * @category Convert
 */
export const convertRgbToHex = (
    { red, green, blue, alpha }: RGBA,
    includeAlpha?: boolean
): string => {
    const hasAlpha = typeof alpha === "number";
    const alphaValue = hasAlpha ? alpha : 1;
    const hexColor = [
        `0${red.toString(16)}`.slice(-2),
        `0${green.toString(16)}`.slice(-2),
        `0${blue.toString(16)}`.slice(-2),
        includeAlpha === false
            ? ""
            : includeAlpha || typeof alpha === "number"
            ? `0${Math.round((alphaValue as number) * 255).toString(16)}`.slice(
                  -2
              )
            : "",
    ];

    return `#${hexColor.join("")}`;
};
