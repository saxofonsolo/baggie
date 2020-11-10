import { isBrowser } from "./isBrowser";

export const isReactNative =
    isBrowser && navigator && navigator.product === "ReactNative";
