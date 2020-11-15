/**
 * Returns regular expression for extracting the ID of a YouTube video from a
 * URL.
 *
 * This works with both the URLs of normal links, embedded videos and the
 * shorter `youtu.be/{ID}`
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getYouTubeIdRegex } from "./utils/patternMatching/youTubeId";
 *
 * const youTubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
 * const youTubeId = youTubeUrl.match(getYouTubeIdRegex())[1];
 * // youTubeId = "dQw4w9WgXcQ"
 * ```
 *
 * @category Regex
 */
export const getYouTubeIdRegex = (): RegExp =>
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/+|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
