import { convertHslToRgb, convertRgbToHsl, RGBA } from "..";

/**
 * Get an analogous color scheme.
 * These colors are next to each other on the color wheel.
 *
 * @category Combinations
 * @param color - Your base color.
 * @param amount - The amount of colors you want (including the one you put in).
 * @param steps - The number of steps you want the color spectrum split into.
 * @returns An array of RGBA color objects.
 */
export const getAnalogousColorScheme = (
    color: RGBA,
    amount = 3,
    steps = 12
): RGBA[] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    const colors = [color];
    const step = 360 / steps;

    for (let i = 1; i <= amount - 1; i += 1) {
        colors[colors.length] = convertHslToRgb({
            hue: (hue + step * i) % 360,
            saturation,
            lightness,
            alpha,
        });
    }

    return colors;
};
