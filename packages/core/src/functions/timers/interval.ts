import { Timer } from "./timer";

/**
 * An alternative to `setInterval` that can be paused, resumed and reset.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { Interval } from "@baggie/core";
 *
 * // Create an interval timer that executes a function after 2 seconds
 * const interval = new Interval((a, b) => {
 *     window.console.log(`${a}, ${b}`);
 * }, 2000, "Hello", "friend");
 *
 * // Start interval timer
 * interval.start();
 *
 * // Pause interval timer after 1 second
 * setTimeout(() => {
 *     interval.pause();
 *
 *     // And resume it after 3 seconds
 *     setTimeout(() => {
 *         interval.start();
 *     }, 3000);
 * }, 1000);
 *
 * // After 5 seconds the function will output "Hello, friend" to the console.
 * ```
 */
export class Interval extends Timer {
    constructor(
        callback: (...parameters: any[]) => void,
        timeoutMs = 0,
        ...parameters: any[]
    ) {
        super(callback, timeoutMs, ...parameters);
    }

    protected done(): void {
        this.reset();
        this.start();
        this.callback();
    }
}
