/**
 * Get all siblings of an element.
 *
 * @category Siblings
 */
export const getSiblings = (
    element: Element,
    options?: {
        includeOriginalElement?: boolean;
        fromElement?: Element;
        untilElement?: Element;
        matchSelector?: string;
    },
): Element[] => {
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

    // Start looking for siblings starting with this element
    let nextElement = fromElement || parent.firstElementChild;

    do {
        if (nextElement) {
            const currentElement = nextElement;
            const sameAsOriginalElement = element === currentElement;

            // Set next element to look at
            nextElement = nextElement.nextElementSibling;

            // Add this element to the list of sibling
            // unless it is the same as the original element (and this should be left out)
            if (
                (!sameAsOriginalElement || includeOriginalElement) &&
                (!matchSelector || currentElement.matches(matchSelector))
            ) {
                siblings.push(currentElement);
            }

            // Stop looking for siblings, if the loop is set to stop at the current element
            if (currentElement === untilElement) {
                break;
            }
        }
    } while (nextElement);

    // Return array of elements
    return siblings;
};
