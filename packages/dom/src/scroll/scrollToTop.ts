import { isBrowser, prefersReducedMotion } from "@baggie/detection";
import { getScrollPosition } from "./getScrollPosition";

/**
 * Scroll to the top of the page.
 *
 * @category Scroll
 */
export const scrollToTop = (options?: {
    offset?: number;
    smooth?: boolean;
}): void => {
    if (isBrowser) {
        const targetX = getScrollPosition().x;
        const targetY = options?.offset ? Math.abs(options.offset) : 0;

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
};
