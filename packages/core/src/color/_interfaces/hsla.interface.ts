/**
 * An interface containing the values for hue, saturation, lightness and alpha.
 */
export interface HSLA {
    /**
     * The hue value (0-360)
     */
    hue: number;

    /**
     * The saturation value (0-1)
     */
    saturation: number;

    /**
     * The lightness value (0-1)
     */
    lightness: number;

    /**
     * The alpha value (0-1)
     */
    alpha?: number;
}
