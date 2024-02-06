/**
 * Get all siblings of an element.
 */
export function getElementSiblings(
    element: Element,
    options?: {
        includeOriginalElement?: boolean;
        fromElement?: boolean | Element;
        untilElement?: boolean | Element;
        matchSelector?: string;
    },
): Element[] {
    const { includeOriginalElement, fromElement, untilElement, matchSelector } =
        {
            ...options,
        };
    const parent = element.parentNode;

    if (!parent) {
        throw "Element not in DOM";
    }

    if (includeOriginalElement && !fromElement && !untilElement) {
        // Return array including the original element and all its siblings
        return Array.from(parent.children).filter(
            (element) => !matchSelector || element.matches(matchSelector),
        );
    }

    const siblings = [];

    // Look for siblings starting with this element
    let firstElement =
        fromElement === true
            ? element
            : fromElement || parent.firstElementChild;

    // Look for siblings ending with this element
    const lastElement =
        untilElement === true
            ? element
            : untilElement || parent.lastElementChild;

    do {
        if (firstElement) {
            const currentElement = firstElement;
            const sameAsOriginalElement = element === currentElement;

            // Set next element to look at
            firstElement = firstElement.nextElementSibling;

            // Add this element to the list of sibling
            // unless it is the same as the original element (and this should be left out)
            if (
                (!sameAsOriginalElement || includeOriginalElement) &&
                (!matchSelector || currentElement.matches(matchSelector))
            ) {
                siblings.push(currentElement);
            }

            // Stop looking for siblings, if the loop is set to stop at the current element
            if (currentElement === lastElement) {
                break;
            }
        }
    } while (firstElement);

    // Return array of elements
    return siblings;
}
