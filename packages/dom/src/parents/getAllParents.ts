/**
 * Get all parents of an element.
 *
 * | Option | Description |
 * | ------ | ----------- |
 * | `matchSelector` | A selector which the returned parents must match. |
 * | `limit` | Set a max number of returned parents. |
 * | `maxDistance` | Set a max distance. This can be a `number`, a `string` (selector) to match or an `HTMLElement`. |
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getAllParents } from "@baggie/dom";
 *
 * const childElement = document.querySelector(".start");
 *
 * const allParents = getAllParents(childElement);
 * // allParents = all the parents of childElement
 *
 * const nearParents = getAllParents(childElement, { limit: 3 });
 * // nearParents = the three nearest parents of childElement
 *
 * const twoDivParents = getAllParents(childElement, { limit: 2, matchSelector: "div" });
 * // twoDivParents = the two nearest parents of childElement of the type DIV
 *
 * const parentsUntilMain = getAllParents(childElement, { maxDistance: ".main" });
 * // parentsUntilMain = all the parents of childElement until (and including)
 * // a parent matching the selector ".main"
 * ```
 *
 * @category Parents
 */
export const getAllParents = (
    element: HTMLElement,
    options?: {
        matchSelector?: string;
        limit?: number;
        maxDistance?: number | string | HTMLElement;
    }
): Element[] => {
    const matchSelector = options?.matchSelector || "*";
    const limit = options?.limit || Infinity;
    const maxDistance = options?.maxDistance || Infinity;
    const maxDistanceIsNumber = typeof maxDistance === "number";
    const maxDistanceIsString = typeof maxDistance === "string";

    const parents = [];
    let currentElement = element;
    let distance = 0;
    let passedMaxDistance = false;

    while (
        currentElement.parentElement &&
        (currentElement = currentElement.parentElement) &&
        !passedMaxDistance &&
        parents.length < limit
    ) {
        if (currentElement.matches(matchSelector)) {
            parents.push(currentElement);
        }

        distance += 1;
        passedMaxDistance = maxDistanceIsNumber
            ? distance === maxDistance
            : maxDistanceIsString
            ? currentElement.matches(maxDistance as string)
            : currentElement === maxDistance;
    }

    return parents;
};
