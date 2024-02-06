import { getElementSiblings } from "./getElementSiblings";

/**
 * Check if two elements are siblings.
 * @param element1 - An element to check
 * @param element2 - Another element to check
 * @param adjacentOnly - Set to `true` if elements have to be right next to each other
 */
export function isElementSibling(
    element1: Element,
    element2: Element,
    adjacentOnly = false,
): boolean {
    if (adjacentOnly) {
        return (
            element1.nextElementSibling === element2 ||
            element1.previousElementSibling === element2
        );
    }

    // We'll start off with assuming that the elements aren't siblings, since most aren't
    let siblingsCheck = false;

    // Get siblings of element1
    const siblingElements = getElementSiblings(element1);

    // Loop though siblings and check if any of them are element2
    for (let i = 0; i < siblingElements.length; i += 1) {
        if (siblingElements[i] === element2) {
            siblingsCheck = true;
        }
    }

    // If element2 wasn't found amongst element1's children, return false
    return siblingsCheck;
}
