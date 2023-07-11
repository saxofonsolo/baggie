/**
 * Check if an element is empty.
 */
export const isElementEmpty = (
    element: Element,
    trimWhitespace = false,
): boolean =>
    trimWhitespace
        ? !element.innerHTML.trim().length
        : !element.childNodes.length;
