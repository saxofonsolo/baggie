/**
 * If the current environment is **JSDOM**, this will be `true`.
 */
export const isJsDom: boolean =
    typeof window !== "undefined" &&
    (window.name === "nodejs" ||
        (Array.isArray(window.navigator?.userAgent) &&
            (window.navigator.userAgent.includes("Node.js") ||
                window.navigator.userAgent.includes("jsdom"))));
