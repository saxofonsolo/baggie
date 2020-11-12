import { isBrowser } from "./isBrowser";

/**
 * If the current environment is **React Native**, this will be `true`.
 *
 * @category Environment
 */
export const isReactNative =
    isBrowser && window.navigator && window.navigator.product === "ReactNative";
