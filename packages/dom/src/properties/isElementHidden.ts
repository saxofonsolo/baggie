/**
 * Check if an element is hidden in the DOM with `display: none;`
 *
 * @param element The element to check.
 * @returns **True** if element is hidden.
 */
export const isElementHidden = (element: HTMLElement): boolean =>
    element.offsetParent === null;
