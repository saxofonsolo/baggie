/**
 * Find out if an element is a parent to another element.
 */
export function isElementParentTo(
    parent: Element,
    child: Element,
    immediateParent = false,
): boolean {
    return immediateParent
        ? child.parentNode === parent
        : parent.contains(child);
}
