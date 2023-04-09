import { OnMatchMediaChange } from "./_helpers/onMatchMediaChange.helper";

/**
 * Detect if **preferred color scheme** changes.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { OnPrefersDarkColorSchemeChange } from "@baggie/detection";
 *
 * const callback = (state: boolean) => {
 *     if (state === true) {
 *         // User prefers dark mode
 *     } else {
 *         // User prefers light mode
 *     }
 * };
 *
 * const darkMode = new OnPrefersDarkColorSchemeChange(callback);
 *
 * // Destroy the instance when you no longer need it
 * darkMode.destroy();
 * ```
 */
export class OnPrefersDarkColorSchemeChange extends OnMatchMediaChange {
    constructor(callback: (state: boolean) => void) {
        super(callback);
        this.query = "(prefers-color-scheme: dark)";
    }
}
