import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb, convertRgbToHsl } from "..";

export const getTriadicColorScheme = (color: RGBA): RGBA[] => {
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
