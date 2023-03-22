import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb } from "../convert/convertHslToRgb";
import { convertRgbToHsl } from "../convert/convertRgbToHsl";

/**
 * Get a tetradic color scheme.
 * The four colors are evenly spaced on the color wheel,
 * 90 degrees apart from each other.
 *
 * @category Combinations
 * @param color - Your base color.
 * @returns An array of four RGBA color objects.
 */
export const getTetradicColorScheme = (
    color: RGBA,
): [RGBA, RGBA, RGBA, RGBA] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    return [
        color,
        convertHslToRgb({
            hue: (hue + 90) % 360,
            saturation,
            lightness,
            alpha,
        }),
        convertHslToRgb({
            hue: (hue + 180) % 360,
            saturation,
            lightness,
            alpha,
        }),
        convertHslToRgb({
            hue: (hue + 270) % 360,
            saturation,
            lightness,
            alpha,
        }),
    ];
};
