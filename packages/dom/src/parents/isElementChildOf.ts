import { isElementParentTo } from "./isElementParentTo";

/**
 * Find out if an element is a child to another element.
 *
 * @category Parents
 */
export const isElementChildOf = (
    child: Element,
    parent: Element,
    immediateChild = false
): boolean => isElementParentTo(parent, child, immediateChild);
