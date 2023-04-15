import { getYouTubeIdRegex } from "../../regex/getYouTubeIdRegex";

/**
 * Convert a YouTube URL to a video ID.
 */
export const getYouTubeId = (input: string): string | undefined => {
    const match = input.trim().match(getYouTubeIdRegex());
    return match && match.length > 1 ? match[1] : undefined;
};
