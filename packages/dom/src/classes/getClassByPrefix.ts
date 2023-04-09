/**
 * Get all classes of an element that starts with a specified string.
 */
export const getClassByPrefix = (
    element: Element = document.body,
    prefix: string,
): string[] =>
    element.className
        .match(new RegExp(`(^|\\s)${prefix}\\S*`, "gi"))
        ?.map((result) => result.trim()) || [];
