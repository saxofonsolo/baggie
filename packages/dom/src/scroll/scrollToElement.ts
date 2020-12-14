import {
    isBrowser,
    prefersReducedMotion,
    supportsSmoothScroll,
} from "@baggie/detection";
import { getElementPosition } from "..";
import { convertToCoordinates } from "../../../math/src";
import { CoordinatesXY } from "../../../math/src/coordinates/_interfaces/coordinatesXY.interface";
import { smoothScrollFallback } from "./_helpers/smoothScrollFallback.helper";

/**
 * Scroll to an element.
 *
 * @category Scroll
 */
export const scrollToElement = (
    element: Element | string,
    options?: {
        scrollOnXAxis: boolean;
        offset?: number | [number, number] | CoordinatesXY;
        smooth?: boolean;
    }
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
                if (supportsSmoothScroll) {
                    window.scrollTo({
                        behavior: "smooth",
                        left: targetX,
                        top: targetY,
                    });
                } else {
                    void smoothScrollFallback(targetX, targetY);
                }
            } else {
                window.scrollTo(targetX, targetY);
            }
        }
    }
};
