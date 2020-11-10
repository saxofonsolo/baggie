interface ScrollPosition {
    x: number;
    y: number;
}

export const getScrollPosition = (): ScrollPosition => ({
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
});
