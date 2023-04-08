import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHslToRgb } from "../../convert/convertHslToRgb";
import { convertRgbToHsl } from "../../convert/convertRgbToHsl/convertRgbToHsl";
import { convertHexToRgb } from "../../convert/convertHexToRgb/convertHexToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Get a complementary color scheme.
 */
export const getComplementaryColorScheme = (
    color: string | RGBA,
): [string, string] => {
    const hex = typeof color === "string" ? color : convertRgbToHex(color);
    const rgb = typeof color === "string" ? convertHexToRgb(color) : color;
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
};
