/**
 * An interface containing the values for red, green, blue and alpha.
 *
 * @category Interfaces
 */
export interface RGBA {
    /**
     * The red color value (0-255)
     */
    red: number;

    /**
     * The green color value (0-255)
     */
    green: number;

    /**
     * The blue color value (0-255)
     */
    blue: number;

    /**
     * The alpha value (0-1)
     */
    alpha?: number;
}
