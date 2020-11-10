/**
 * Check if an element is empty.
 *
 * @param element Check if this element is empty.
 * @param trimWhitespace Set this to **false** to ignore nodes with whitespace.
 * @returns **True** if the element is empty.
 */
export const isElementEmpty = (
    element: Element,
    trimWhitespace = false
): boolean =>
    trimWhitespace
        ? !element.innerHTML.trim().length
        : !element.childNodes.length;
