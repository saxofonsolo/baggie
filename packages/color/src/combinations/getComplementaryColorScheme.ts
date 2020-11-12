import { convertHslToRgb, convertRgbToHsl, RGBA } from "..";

/**
 * Get a complementary color scheme.
 * The two colors are opposite each other on the color wheel.
 *
 * @category Combine
 * @param color - Your base color.
 * @returns An array of two RGBA color objects.
 */
export const getComplementaryColorScheme = (color: RGBA): RGBA[] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    return [
        color,
        convertHslToRgb({
            hue: (hue + 180) % 360,
            saturation,
            lightness,
            alpha,
        }),
    ];
};
