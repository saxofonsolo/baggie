/* Environment */
export { isBrowser } from "./environment/isBrowser";
export { isJsDom } from "./environment/isJsDom";
export { isNodeJs } from "./environment/isNodeJs";
export { isReactNative } from "./environment/isReactNative";
export { isWebWorker } from "./environment/isWebWorker";

/* Input */
export type { DetectInputMethodOptions } from "./input/detectInputMethod";
export { DetectInputMethod } from "./input/detectInputMethod";

/* Media Features */
export { orientationIsLandscape } from "./mediaFeatures/orientationIsLandscape";
export { orientationIsPortrait } from "./mediaFeatures/orientationIsPortrait";
export { prefersDarkColorScheme } from "./mediaFeatures/prefersDarkColorScheme";
export { prefersReducedMotion } from "./mediaFeatures/prefersReducedMotion";
