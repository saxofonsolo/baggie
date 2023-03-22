import { getSiblings } from "./getSiblings";

/**
 * Get all siblings preceding an element.
 *
 * @category Siblings
 */
export const getPreviousSiblings = (
    element: Element,
    options?: {
        includeOriginalElement?: boolean;
        matchSelector?: string;
    },
): Element[] => {
    const { includeOriginalElement, matchSelector } = {
        ...options,
    };
    return getSiblings(element, {
        includeOriginalElement,
        matchSelector,
        untilElement: element,
    });
};
