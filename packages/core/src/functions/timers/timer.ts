/**
 * An alternative to `setTimeout` that can be paused, resumed and reset.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { Timer } from "@baggie/functions";
 *
 * // Create a timer that executes a function after 2 seconds
 * const timer = new Timer((a, b) => {
 *     window.console.log(`${a}, ${b}`);
 * }, 2000, "Hello", "friend");
 *
 * // Start timer
 * timer.start();
 *
 * // Pause timer after 1 second
 * setTimeout(() => {
 *     timer.pause();
 *
 *     // And resume it after 3 seconds
 *     setTimeout(() => {
 *         timer.start();
 *     }, 3000);
 * }, 1000);
 *
 * // After 5 seconds the function will output "Hello, friend" to the console.
 * ```
 */
export class Timer {
    protected startMs: number;
    protected durationMs: number;
    protected remainingMs: number;
    protected parameters: any[];
    protected callback: (...parameters: any[]) => void;
    protected timerId?: number;

    constructor(
        callback: (...parameters: any[]) => void,
        timeoutMs = 0,
        ...parameters: any[]
    ) {
        this.startMs = 0;
        this.durationMs = timeoutMs;
        this.remainingMs = timeoutMs;
        this.parameters = parameters;
        this.callback = callback;
    }

    pause(): void {
        window.clearTimeout(this.timerId);
        this.remainingMs -= new Date().getTime() - this.startMs;
    }

    start(): void {
        this.startMs = new Date().getTime();
        window.clearTimeout(this.timerId);
        this.timerId = window.setTimeout(
            () => this.done(),
            this.remainingMs,
            ...this.parameters,
        );
    }

    reset(): void {
        this.destroy();
        this.startMs = 0;
        this.remainingMs = this.durationMs;
    }

    protected done(): void {
        this.callback();
    }

    destroy(): void {
        window.clearTimeout(this.timerId);
    }
}
