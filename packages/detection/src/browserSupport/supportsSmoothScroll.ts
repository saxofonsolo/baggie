import { isBrowser } from "..";

export const supportsSmoothScroll =
    isBrowser && "scrollBehavior" in document.documentElement.style;
