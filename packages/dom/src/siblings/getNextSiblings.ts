import { getSiblings } from "./getSiblings";

/**
 * Get all siblings following an element.
 *
 * @category Siblings
 */
export const getNextSiblings = (
    element: Element,
    includeOriginalElement = false
): Element[] => getSiblings(element, includeOriginalElement, element);
