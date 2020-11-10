export const isJsDom: boolean =
    (typeof window !== "undefined" && window.name === "nodejs") ||
    window.navigator.userAgent.includes("Node.js") ||
    window.navigator.userAgent.includes("jsdom");
