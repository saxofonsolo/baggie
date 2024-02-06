import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHslToRgb } from "../../convert/convertHslToRgb/convertHslToRgb";
import { convertRgbToHsl } from "../../convert/convertRgbToHsl/convertRgbToHsl";
import { convertStringToRgb } from "../../convert/convertStringToRgb/convertStringToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Get a complementary color scheme.
 */
export function getColorSchemeComplementary(
    color: string | RGBA,
): [string, string] {
    const hex = typeof color === "string" ? color : convertRgbToHex(color);
    const rgb = typeof color === "string" ? convertStringToRgb(color) : color;
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(rgb);
    return [
        hex,
        convertRgbToHex(
            convertHslToRgb({
                hue: (hue + 180) % 360,
                saturation,
                lightness,
                alpha,
            }),
        ),
    ];
}
