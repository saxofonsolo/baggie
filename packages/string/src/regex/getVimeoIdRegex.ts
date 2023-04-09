/**
 * Returns regular expression for extracting the ID of a Vimeo video from a URL.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getVimeoIdRegex } from "@baggie/string";
 *
 * const vimeoUrl = "https://vimeo.com/265700921";
 * const vimeoId = vimeoUrl.match(getVimeoIdRegex())[1];
 * // vimeoId = "265700921"
 * ```
 */
export const getVimeoIdRegex = (): RegExp =>
    /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i;
