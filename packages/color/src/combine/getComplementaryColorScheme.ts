import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb, convertRgbToHsl } from "..";

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
