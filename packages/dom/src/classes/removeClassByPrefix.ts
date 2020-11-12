import { getClassByPrefix } from "./getClassByPrefix";

/**
 * Remove all classes of an element that starts with a specified string.
 *
 * @category Classes
 */
export const removeClassByPrefix = (
    element = document.body,
    prefix: string
): void =>
    getClassByPrefix(element, prefix).forEach((className) =>
        element.classList.remove(className)
    );
