import { getSiblings } from "./getSiblings";

/**
 * Get all siblings preceding an element.
 *
 * @category Siblings
 */
export const getPreviousSiblings = (
    element: Element,
    includeOriginalElement = false
): Element[] =>
    getSiblings(element, includeOriginalElement, undefined, element);
