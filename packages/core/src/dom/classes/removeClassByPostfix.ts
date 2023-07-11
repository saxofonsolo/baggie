import { getClassByPostfix } from "./getClassByPostfix";

/**
 * Remove all classes of an element that ends with a specified string.
 */
export const removeClassByPostfix = (
    element: Element = document.body,
    prefix: string,
): void =>
    getClassByPostfix(element, prefix).forEach((className) =>
        element.classList.remove(className),
    );
