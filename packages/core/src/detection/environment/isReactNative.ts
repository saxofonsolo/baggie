import { isBrowser } from "./isBrowser";

/**
 * If the current environment is **React Native**, this will be `true`.
 */
export const isReactNative =
    isBrowser && window.navigator && window.navigator.product === "ReactNative";
