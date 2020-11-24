/**
 * Get all classes of an element that ends with a specified string.
 *
 * @category Classes
 */
export const getClassByPostfix = (
    element: Element = document.body,
    postfix: string
): string[] =>
    element.className
        .match(new RegExp(`\\S*${postfix}($|\\s)`, "gi"))
        ?.map((result) => result.trim()) || [];
