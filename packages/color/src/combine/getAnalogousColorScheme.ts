import { RGBA } from "../_interfaces/rgba.interface";
import { convertHslToRgb, convertRgbToHsl } from "..";

export const getAnalogousColorScheme = (
    color: RGBA,
    amount = 3,
    steps = 12
): RGBA[] => {
    const { hue, saturation, lightness, alpha } = convertRgbToHsl(color);
    const colors = [color];
    const step = 360 / steps;

    for (let i = 1; i <= amount - 1; i += 1) {
        colors[colors.length] = convertHslToRgb({
            hue: (hue + step * i) % 360,
            saturation,
            lightness,
            alpha,
        });
    }

    return colors;
};
