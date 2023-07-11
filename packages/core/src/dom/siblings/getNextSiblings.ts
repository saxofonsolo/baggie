import { getSiblings } from "./getSiblings";

/**
 * Get all siblings following an element.
 */
export const getNextSiblings = (
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
        fromElement: element,
    });
};
