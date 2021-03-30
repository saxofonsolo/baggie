import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb } from "../convert/convertHslToRgb";
import { convertRgbToHsl } from "../convert/convertRgbToHsl";

/**
 * Get a triadic color scheme.
 * The three colors are evenly spaced on the color wheel,
 * 120 degrees apart from each other.
 *
 * @category Combinations
 * @param color - Your base color.
 * @returns An array of three RGBA color objects.
 */
export const getTriadicColorScheme = (color: RGBA): [RGBA, RGBA, RGBA] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    return [
        color,
        convertHslToRgb({
            hue: (hue + 120) % 360,
            saturation,
            lightness,
            alpha,
        }),
        convertHslToRgb({
            hue: (hue + 240) % 360,
            saturation,
            lightness,
            alpha,
        }),
    ];
};
