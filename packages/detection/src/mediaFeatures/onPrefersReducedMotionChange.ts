import { OnMatchMediaChange } from "./_helpers/onMatchMediaChange.helper";

/**
 * Detect changes in the **reduced motion** settings.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { OnPrefersReducedMotionChange } from "@baggie/detection";
 *
 * const callback = (state: boolean) => {
 *     if (state === true) {
 *         // User prefers reduced motion
 *     } else {
 *         // User doesn't prefer reduced motion
 *     }
 * };
 *
 * const reducedMotion = new OnPrefersReducedMotionChange(callback);
 *
 * // Destroy the instance when you no longer need it
 * reducedMotion.destroy();
 * ```
 *
 * @category Media Features
 */
export class OnPrefersReducedMotionChange extends OnMatchMediaChange {
    constructor(callback: (state: boolean) => void) {
        super(callback);
        this.query = "(prefers-reduced-motion: reduce)";
    }
}
