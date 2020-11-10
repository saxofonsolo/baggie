import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb, convertRgbToHsl } from "..";

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
