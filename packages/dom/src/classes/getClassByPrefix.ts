/**
 * Get all classes of an element that starts with a specified string.
 *
 * @category Classes
 */
export const getClassByPrefix = (
    element = document.body,
    prefix: string
): string[] =>
    element.className.match(new RegExp(`\\b${prefix}[-_a-z0-9]*\\b`, "gi")) ||
    [];
