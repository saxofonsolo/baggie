import { getSiblings } from "./getSiblings";

export const getPreviousSiblings = (
    element: Element,
    includeOriginalElement = false
): Element[] => getSiblings(element, includeOriginalElement, undefined, element);
