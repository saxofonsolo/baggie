import { getClassByPrefix } from "./getClassByPrefix";

export const removeClassByPrefix = (
    prefix: string,
    element = document.body
): void =>
    getClassByPrefix(prefix, element).forEach((className) =>
        element.classList.remove(className)
    );
