import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb } from "../convert/convertHslToRgb";
import { convertRgbToHsl } from "../convert/convertRgbToHsl";

/**
 * Get a split complementary color scheme.
 *
 * @category Combinations
 * @param color - Your base color.
 * @returns An array of three RGBA color objects.
 */
export const getSplitComplementaryColorScheme = (
    color: RGBA,
): [RGBA, RGBA, RGBA] => {
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
