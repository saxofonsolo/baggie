import { HSLA } from "../../_interfaces/hsla.interface";
import { RGBA } from "../../_interfaces/rgba.interface";

/**
 * Convert an object with HSL color values to RGB color values.
 */
export const convertHslToRgb = ({
    hue,
    saturation,
    lightness,
    alpha = 1,
}: HSLA): RGBA => {
    let red = 0;
    let green = 0;
    let blue = 0;

    // Achromatic
    if (saturation === 0) {
        red = green = blue = lightness;
    }

    // Chromatic
    else {
        const q =
            lightness < 0.5
                ? lightness * (1 + saturation)
                : lightness + saturation - lightness * saturation;

        const p = 2 * lightness - q;
        const useHue = hue / 360;
        const oneThird = 1 / 3;
        const twoThirds = 2 / 3;
        const oneSixth = 1 / 6;

        for (let i = -1; i < 2; i += 1) {
            let currentHue =
                useHue + (i < 0 ? oneThird : i > 0 ? -oneThird : 0);

            if (currentHue < 0) {
                currentHue += 1;
            } else if (currentHue > 1) {
                currentHue -= 1;
            }

            currentHue =
                currentHue < oneSixth
                    ? p + (q - p) * 6 * currentHue
                    : currentHue < 0.5
                      ? q
                      : currentHue < twoThirds
                        ? p + (q - p) * (twoThirds - currentHue) * 6
                        : p;

            if (i < 0) {
                red = currentHue;
            } else if (i > 0) {
                blue = currentHue;
            } else {
                green = currentHue;
            }
        }
    }

    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
};
