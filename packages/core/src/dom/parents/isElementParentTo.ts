/**
 * Find out if an element is a parent to another element.
 */
export const isElementParentTo = (
    parent: Element,
    child: Element,
    immediateParent = false,
): boolean =>
    immediateParent ? child.parentNode === parent : parent.contains(child);
