/**
 * Check if an element is hidden in the DOM with `display: none;`
 *
 * @category Properties
 */
export const isElementHidden = (element: HTMLElement): boolean =>
    element.offsetParent === null;
