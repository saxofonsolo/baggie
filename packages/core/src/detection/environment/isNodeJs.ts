/* global process */

/**
 * If the current environment is **Node.js**, this will be `true`.
 */
export const isNodeJs: boolean =
    typeof process !== "undefined" &&
    process.versions &&
    !!process.versions.node;
