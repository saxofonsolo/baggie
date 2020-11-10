import { getScrollPosition } from "..";

export const getElementYPosition = (element?: Element): number => {
    if (element) {
        const { top: elementYPosition } = element.getBoundingClientRect();
        const { y: currentYScroll } = getScrollPosition();
        const offset = 30;

        return Math.round(currentYScroll + elementYPosition - offset);
    }

    return 0;
};
