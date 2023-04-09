/**
 * If the current environment is **JSDOM**, this will be `true`.
 */
export const isJsDom: boolean =
    typeof window !== "undefined" &&
    (window.name === "nodejs" ||
        window.navigator.userAgent.includes("Node.js") ||
        window.navigator.userAgent.includes("jsdom"));
