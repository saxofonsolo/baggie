/**
 * Check if an element is empty.
 */
export function isElementEmpty(
    element: Element,
    trimWhitespace = false,
): boolean {
    return trimWhitespace
        ? !element.innerHTML.trim().length
        : !element.childNodes.length;
}
