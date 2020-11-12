import {
    isBrowser,
    prefersReducedMotion,
    supportsSmoothScroll,
} from "@baggie/detection";
import { getElementPosition } from "..";
import { smoothScrollFallback } from "./_helpers/smoothScrollFallback.helper";

/**
 * Scroll to an element.
 *
 * @category Scroll
 */
export const scrollToElement = (
    element: Element | string,
    offset = 0
): void => {
    if (!isBrowser) {
        return;
    }

    const scrollToElement =
        typeof element === "string" ? document.querySelector(element) : element;

    if (scrollToElement) {
        const targetY = getElementPosition(scrollToElement).y - offset;

        if (supportsSmoothScroll && !prefersReducedMotion) {
            window.scrollTo({ behavior: "smooth", top: targetY });
        } else {
            void smoothScrollFallback(0, targetY);
        }
    }
};
