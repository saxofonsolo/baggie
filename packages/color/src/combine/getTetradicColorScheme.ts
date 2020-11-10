import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb, convertRgbToHsl } from "..";

export const getTetradicColorScheme = (color: RGBA): RGBA[] => {
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
