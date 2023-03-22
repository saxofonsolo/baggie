/**
 * Check if an element is empty.
 *
 * @category Properties
 * @param element - Element to check
 * @param trimWhitespace - Set this to `true` to trim whitespace before checking if element is empty
 */
export const isElementEmpty = (
    element: Element,
    trimWhitespace = false,
): boolean =>
    trimWhitespace
        ? !element.innerHTML.trim().length
        : !element.childNodes.length;
