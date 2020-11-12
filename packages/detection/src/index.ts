/* browser support */
export { supportsSmoothScroll } from "./browserSupport/supportsSmoothScroll";

/* environment */
export { isBrowser } from "./environment/isBrowser";
export { isJsDom } from "./environment/isJsDom";
export { isNode } from "./environment/isNode";
export { isReactNative } from "./environment/isReactNative";
export { isWebWorker } from "./environment/isWebWorker";

/* input */
export { DetectInputMethod } from "./input/detectInputMethod";

/* media features */
export { OnPrefersDarkColorSchemeChange } from "./mediaFeatures/onPrefersDarkColorSchemeChange";
export { OnPrefersReducedMotionChange } from "./mediaFeatures/onPrefersReducedMotionChange";
export { prefersDarkColorScheme } from "./mediaFeatures/prefersDarkColorScheme";
export { prefersReducedMotion } from "./mediaFeatures/prefersReducedMotion";
