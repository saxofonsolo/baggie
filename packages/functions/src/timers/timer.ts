/* eslint-disable @typescript-eslint/no-explicit-any */

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
            ...this.parameters
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
