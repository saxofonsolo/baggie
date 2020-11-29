import { getVimeoIdRegex } from "..";

/**
 * Convert a YouTube URL to a video ID.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getVimeoId } from "@baggie/string";
 *
 * const vimeoUrl = "https://vimeo.com/265700921";
 * const vimeoId = getVimeoId(vimeoUrl);
 * // vimeoId = "265700921"
 *
 * const noVimeoId = getVimeoId("http://google.com");
 * // noYouTubeId = ""
 * ```
 *
 * @category Convert
 */
export function getVimeoId(url: string): string | undefined {
    const match = url.match(getVimeoIdRegex());
    return match && match.length > 0 ? match[1] : undefined;
}
