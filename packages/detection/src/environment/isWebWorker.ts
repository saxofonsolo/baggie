export const isWebWorker: boolean = typeof self === "object"
    && self.constructor
    && self.constructor.name === "DedicatedWorkerGlobalScope";
