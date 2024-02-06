import { isElementParentTo } from "./isElementParentTo";

/**
 * Find out if an element is a child to another element.
 */
export function isElementChildOf(
    child: Element,
    parent: Element,
    immediateChild = false,
): boolean {
    return isElementParentTo(parent, child, immediateChild);
}
