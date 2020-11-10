import { isElementHidden } from "./isElementHidden";

/**
 * Check if an element is visible in the DOM (doesn't have `display: none;`)
 *
 * @param element The element to check.
 * @returns **True** if element is visible.
 */
export const isElementVisible = (element: HTMLElement): boolean =>
    !isElementHidden(element);
