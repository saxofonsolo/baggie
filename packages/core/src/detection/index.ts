/* Environment */
export { isBrowser } from "./environment/isBrowser";
export { isJsDom } from "./environment/isJsDom";
export { isNode } from "./environment/isNode";
export { isReactNative } from "./environment/isReactNative";
export { isWebWorker } from "./environment/isWebWorker";

/* Input */
export type { DetectInputMethodOptions } from "./input/detectInputMethod";
export { DetectInputMethod } from "./input/detectInputMethod";

/* Media Features */
export { OnPrefersDarkColorSchemeChange } from "./mediaFeatures/onPrefersDarkColorSchemeChange";
export { OnPrefersReducedMotionChange } from "./mediaFeatures/onPrefersReducedMotionChange";
export { orientationIsLandscape } from "./mediaFeatures/orientationIsLandscape";
export { orientationIsPortrait } from "./mediaFeatures/orientationIsPortrait";
export { prefersDarkColorScheme } from "./mediaFeatures/prefersDarkColorScheme";
export { prefersReducedMotion } from "./mediaFeatures/prefersReducedMotion";
