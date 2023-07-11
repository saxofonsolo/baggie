import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHslToRgb } from "../../convert/convertHslToRgb/convertHslToRgb";
import { convertRgbToHsl } from "../../convert/convertRgbToHsl/convertRgbToHsl";
import { convertStringToRgb } from "../../convert/convertStringToRgb/convertStringToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Get an analogous color scheme.
 */
export const getColorSchemeAnalogous = (
    color: string | RGBA,
    count = 3,
    steps = 12,
): string[] => {
    const hex = typeof color === "string" ? color : convertRgbToHex(color);
    const rgb = typeof color === "string" ? convertStringToRgb(color) : color;
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(rgb);
    const colors = [hex];
    const step = 360 / steps;

    for (let i = 1; i <= count - 1; i += 1) {
        colors[colors.length] = convertRgbToHex(
            convertHslToRgb({
                hue: (hue + step * i) % 360,
                saturation,
                lightness,
                alpha,
            }),
        );
    }

    return colors;
};
