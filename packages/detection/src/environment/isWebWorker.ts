/* globals self */

/**
 * If the current environment is a **Web Worker**, this will be `true`.
 *
 * @category Environment
 */
export const isWebWorker: boolean =
    typeof self === "object" &&
    self.constructor &&
    self.constructor.name === "DedicatedWorkerGlobalScope";
