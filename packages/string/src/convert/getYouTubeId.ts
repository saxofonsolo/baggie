import { getYouTubeIdRegex } from "..";

/**
 * Convert a YouTube URL to a video ID.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getYouTubeId } from "@baggie/string";
 *
 * const youTubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
 * const youTubeId = getYouTubeId(youTubeUrl);
 * // youTubeId = "dQw4w9WgXcQ"
 *
 * const noYouTubeId = getYouTubeId("http://google.com");
 * // noYouTubeId = ""
 * ```
 *
 * @category Convert
 */
export function getYouTubeId(url: string): string {
    const match = url.match(getYouTubeIdRegex());
    return match && match.length > 1 ? match[1] : "";
}
