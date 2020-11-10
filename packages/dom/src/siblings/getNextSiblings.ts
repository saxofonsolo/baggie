import { getSiblings } from "./getSiblings";

export const getNextSiblings = (
    element: Element,
    includeOriginalElement = false
): Element[] => getSiblings(element, includeOriginalElement, element);
