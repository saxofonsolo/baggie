export const isJsDom: boolean =
    (typeof window !== "undefined" && window.name === "nodejs") ||
    navigator.userAgent.includes("Node.js") ||
    navigator.userAgent.includes("jsdom");
