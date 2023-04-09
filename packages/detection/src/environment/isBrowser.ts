/**
 * If the current environment is a **browser**, this will be `true`.
 */
export const isBrowser: boolean =
    typeof window !== "undefined" &&
    window.document &&
    !!window.document.createElement;
