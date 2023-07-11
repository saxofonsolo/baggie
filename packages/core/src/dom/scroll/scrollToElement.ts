import { isBrowser, prefersReducedMotion } from "../../detection";
import { convertToCoordinates, CoordinatesXY } from "../../math";
import { getElementPosition } from "../properties/getElementPosition";

/**
 * Scroll to an element.
 */
export const scrollToElement = (
    element: Element | string,
    options?: {
        scrollOnXAxis: boolean;
        offset?: number | [number, number] | CoordinatesXY;
        smooth?: boolean;
    },
): void => {
    if (isBrowser) {
        const actualElement =
            typeof element === "string"
                ? document.querySelector(element)
                : element;

        if (actualElement) {
            const offset = convertToCoordinates(options?.offset);
            const elementPosition = getElementPosition(actualElement);
            const targetX = options?.scrollOnXAxis
                ? elementPosition.x - offset.x
                : 0;
            const targetY = elementPosition.y - offset.y;

            if (options?.smooth !== false && !prefersReducedMotion) {
                window.scrollTo({
                    behavior: "smooth",
                    left: targetX,
                    top: targetY,
                });
            } else {
                window.scrollTo(targetX, targetY);
            }
        }
    }
};
