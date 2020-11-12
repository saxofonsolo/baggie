/* global process */

/**
 * If the current environment is **Node.js**, this will be `true`.
 *
 * @category Environment
 */
export const isNode: boolean =
    typeof process !== "undefined" &&
    process.versions &&
    !!process.versions.node;
