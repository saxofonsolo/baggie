import { isBrowser } from "./isBrowser";

export const supportsSmoothScroll =
    isBrowser && "scrollBehavior" in document.documentElement.style;
