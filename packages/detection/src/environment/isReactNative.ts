import { isBrowser } from "./isBrowser";

export const isReactNative =
    isBrowser && window.navigator && window.navigator.product === "ReactNative";
