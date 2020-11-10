/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timer } from "./timer";

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
