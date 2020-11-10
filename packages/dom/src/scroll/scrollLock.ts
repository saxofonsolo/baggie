import { getScrollPosition } from "./getScrollPosition";

interface ScrollLockSettings {
    className?: string;
    callback?: (isScrollLocked: boolean) => void;
}

let settings: ScrollLockSettings = {
    className: "scroll-lock",
};

let scrollTop = 0;

export let isScrollLocked = false;

export function setScrollLockSettings(options: ScrollLockSettings): void {
    settings = {
        ...settings,
        ...options,
    };
}

export function enableScrollLock(): void {
    if (!isScrollLocked) {
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
        isScrollLocked = true;
        scrollTop = scrollPosition.y;

        if (settings.callback) {
            settings.callback(isScrollLocked);
        }
    }
}

export function disableScrollLock(): void {
    if (isScrollLocked) {
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
        isScrollLocked = false;

        if (settings.callback) {
            settings.callback(isScrollLocked);
        }
    }
}

export function toggleScrollLock(): void {
    if (isScrollLocked) {
        disableScrollLock();
    } else {
        enableScrollLock();
    }
}
