import {
    isBrowser,
    prefersReducedMotion,
    supportsSmoothScroll,
} from "@baggie/feature-detection";
import { smoothScrollFallback } from "./_helpers/smoothScrollFallback.helper";
import { getElementYPosition } from "..";

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
        const targetY = getElementYPosition(scrollToElement) - offset;

        if (supportsSmoothScroll && !prefersReducedMotion) {
            window.scrollTo({ behavior: "smooth", top: targetY });
        } else {
            void smoothScrollFallback(0, targetY);
        }
    }
};
