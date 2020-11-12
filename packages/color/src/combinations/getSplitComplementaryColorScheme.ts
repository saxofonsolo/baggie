import { convertHslToRgb, convertRgbToHsl, RGBA } from "..";

/**
 * Get a split complementary color scheme.
 *
 * @category Combine
 * @param color - Your base color.
 * @returns An array of three RGBA color objects.
 */
export const getSplitComplementaryColorScheme = (color: RGBA): RGBA[] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    return [
        color,
        convertHslToRgb({
            hue: (hue + 72) % 360,
            saturation,
            lightness,
            alpha,
        }),
        convertHslToRgb({
            hue: (hue + 216) % 360,
            saturation,
            lightness,
            alpha,
        }),
    ];
};
