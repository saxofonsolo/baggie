import { CIELAB } from "../../_interfaces/cielab.interface";
import { RGBA } from "../../_interfaces/rgba.interface";

/**
 * Convert an object with RGB color values to Lab (CIELAB CIE76).
 */
export function convertRgbToLab({ red, green, blue, alpha = 1 }: RGBA): CIELAB {
    let r = red / 255;
    let g = green / 255;
    let b = blue / 255;
    let x;
    let y;
    let z;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

    return {
        l: (116 * y - 16) / 100,
        a: 500 * (x - y),
        b: 200 * (y - z),
        alpha,
    };
}
