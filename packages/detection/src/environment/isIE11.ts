import { isBrowser } from "./isBrowser";

interface InternetExplorerDocument extends Document {
    documentMode: number;
}

/**
 * If the current environment is an **IE11 browser**, this will be `true`.
 *
 * @category Environment
 */
export const isIE11 =
    isBrowser &&
    (document as InternetExplorerDocument).documentMode &&
    (document as InternetExplorerDocument).documentMode <= 11;
