/**
 * Check if an element is hidden in the DOM with `display: none;`
 */
export function isElementHidden(element: HTMLElement): boolean {
    return element.offsetParent === null;
}
