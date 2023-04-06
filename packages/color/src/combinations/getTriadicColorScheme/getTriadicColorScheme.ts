import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHslToRgb } from "../../convert/convertHslToRgb";
import { convertRgbToHsl } from "../../convert/convertRgbToHsl";
import { convertRgbToHex } from "../../convert/convertRgbToHex";
import { convertHexToRgb } from "../../convert/convertHexToRgb";

/**
 * Get a triadic color scheme.
 */
export const getTriadicColorScheme = (
    color: string | RGBA,
): [string, string, string] => {
    const hex = typeof color === "string" ? color : convertRgbToHex(color);
    const rgb = typeof color === "string" ? convertHexToRgb(color) : color;
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(rgb);
    return [
        hex,
        convertRgbToHex(
            convertHslToRgb({
                hue: (hue + 120) % 360,
                saturation,
                lightness,
                alpha,
            }),
        ),
        convertRgbToHex(
            convertHslToRgb({
                hue: (hue + 240) % 360,
                saturation,
                lightness,
                alpha,
            }),
        ),
    ];
};
