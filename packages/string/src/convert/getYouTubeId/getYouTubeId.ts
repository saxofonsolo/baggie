import { getYouTubeIdRegex } from "../../regex/getYouTubeIdRegex";

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
 */
export const getYouTubeId = (input: string): string | undefined => {
    const match = input.match(getYouTubeIdRegex());
    return match && match.length > 1 ? match[1] : undefined;
};
