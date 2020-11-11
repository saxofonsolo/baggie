import { getScrollPosition } from "../..";

interface OffsetObject {
    x?: number;
    y?: number;
}

/**
 * Get the position of an element on the page.
 *
 * @category Properties
 */
export const getElementPosition = (
    element: Element,
    offset?: number | OffsetObject
): { x: number; y: number } => {
    const { left: elementPositionX, top: elementPositionY } = element.getBoundingClientRect();
    const { x: currentScrollX, y: currentScrollY } = getScrollPosition();
    const offsetIsNumber = typeof offset === "number";
    const offsetX = offsetIsNumber ? offset as number : (offset as OffsetObject).x || 0;
    const offsetY = offsetIsNumber ? offset as number : (offset as OffsetObject).y || 0;

    return {
        x: Math.round(currentScrollX + elementPositionX - offsetX),
        y: Math.round(currentScrollY + elementPositionY - offsetY),
    };
};
