/**
 * An object containing the values for a CIELAB color type + alpha.
 *
 * @remarks
 * Take a look at these, if you're interested:
 * [CIELAB Color Space](https://en.wikipedia.org/wiki/CIELAB_color_space)
 * and [color difference](https://en.wikipedia.org/wiki/Color_difference).
 */
export interface CIELAB {
    /**
     * The lightness value (0 to 1)
     */
    l: number;

    /**
     * The green–red value (-128 to 128)
     */
    a: number;

    /**
     * The blue–yellow value (-128 to 128)
     */
    b: number;

    /**
     * The alpha value (0-1)
     */
    alpha?: number;
}
