export const getClassByPrefix = (
    prefix: string,
    element = document.body
): string[] =>
    element.className.match(new RegExp(`\\b${prefix}[-_a-z0-9]*\\b`, "gi")) ||
    [];
