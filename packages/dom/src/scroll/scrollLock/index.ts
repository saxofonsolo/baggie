import { getScrollPosition } from "../getScrollPosition";

interface ScrollLockSettings {
    className?: string;
    callback?: (scrollLockState: boolean) => void;
}

let settings: ScrollLockSettings = {
    className: "scroll-lock",
};

let scrollLockState = false;
let scrollTop = 0;

/**
 * Get to know if scroll is locked.
 *
 * @category Scroll - Scroll Lock
 */
export const isScrollLocked = (): boolean => scrollLockState;

/**
 * Set scroll lock settings.
 * Probably just the class name that is set on the HTML element.
 *
 * @category Scroll - Scroll Lock
 */
export const setScrollLockSettings = (options: ScrollLockSettings): void => {
    settings = {
        ...settings,
        ...options,
    };
};

/**
 * Enable scroll lock.
 *
 * @category Scroll - Scroll Lock
 */
export const enableScrollLock = (): void => {
    if (!scrollLockState) {
        // Get scroll position
        const scrollPosition = getScrollPosition();

        // Reset scroll position
        window.scrollTo(scrollPosition.x, 0);

        const htmlTag = document.documentElement;
        htmlTag.style.marginTop = `${-scrollPosition.y}px`;
        htmlTag.style.position = "fixed";
        htmlTag.style.width = "100%";
        if (settings.className) {
            htmlTag.classList.add(settings.className);
        }

        // Remember state
        scrollLockState = true;
        scrollTop = scrollPosition.y;

        if (settings.callback) {
            settings.callback(scrollLockState);
        }
    }
};

/**
 * Disable scroll lock.
 *
 * @category Scroll - Scroll Lock
 */
export const disableScrollLock = (): void => {
    if (scrollLockState) {
        const scrollPosition = getScrollPosition();

        const htmlTag = document.documentElement;
        htmlTag.style.marginTop = "";
        htmlTag.style.position = "";
        htmlTag.style.width = "";
        if (settings.className) {
            htmlTag.classList.remove(settings.className);
        }

        // Set the scroll position to what it was before
        window.scrollTo(scrollPosition.x, scrollTop);

        // Remember state
        scrollLockState = false;

        if (settings.callback) {
            settings.callback(scrollLockState);
        }
    }
};

/**
 * Toggle scroll lock.
 *
 * @category Scroll - Scroll Lock
 */
export const toggleScrollLock = (): void => {
    if (scrollLockState) {
        disableScrollLock();
    } else {
        enableScrollLock();
    }
};
