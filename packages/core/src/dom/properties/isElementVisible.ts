import { isElementHidden } from "./isElementHidden";

/**
 * Check if an element is visible in the DOM (doesn't have `display: none;`)
 */
export function isElementVisible(element: HTMLElement): boolean {
    return !isElementHidden(element);
}
