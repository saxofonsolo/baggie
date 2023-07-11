import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHslToRgb } from "../../convert/convertHslToRgb/convertHslToRgb";
import { convertRgbToHsl } from "../../convert/convertRgbToHsl/convertRgbToHsl";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";
import { convertHexToRgb } from "../../convert/convertHexToRgb/convertHexToRgb";

/**
 * Get a split complementary color scheme.
 */
export const getColorSchemeSplitComplementary = (
    color: string | RGBA,
): [string, string, string] => {
    const hex = typeof color === "string" ? color : convertRgbToHex(color);
    const rgb = typeof color === "string" ? convertHexToRgb(color) : color;
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(rgb);
    return [
        hex,
        convertRgbToHex(
            convertHslToRgb({
                hue: (hue + 72) % 360,
                saturation,
                lightness,
                alpha,
            }),
        ),
        convertRgbToHex(
            convertHslToRgb({
                hue: (hue + 216) % 360,
                saturation,
                lightness,
                alpha,
            }),
        ),
    ];
};
