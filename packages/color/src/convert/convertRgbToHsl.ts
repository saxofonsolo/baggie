import { HSLA } from "../_interfaces/hsla.interface";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Convert an RGB color to an HSL color value.
 *
 * @category Convert
 */
export const convertRgbToHsl = ({
    red,
    green,
    blue,
    alpha = 1,
}: RGBA): HSLA => {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    const difference = max - min;
    const saturation =
        difference === 0 ? 0 : difference / (1 - Math.abs(2 * lightness - 1));

    let hue = 0;

    if (difference) {
        if (max === r) {
            hue = ((g - b) / difference) % 6;
        } else if (max === g) {
            hue = (b - r) / difference + 2;
        } else if (max === b) {
            hue = (r - g) / difference + 4;
        }

        hue *= 60;
    }

    return {
        hue,
        saturation,
        lightness,
        alpha,
    };
};
