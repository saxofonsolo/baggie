import { getVimeoIdRegex } from "../../regex/getVimeoIdRegex/getVimeoIdRegex";

/**
 * Get the Vimeo ID from a URL.
 */
export function getVimeoId(url: string): string | undefined {
    const match = url.match(getVimeoIdRegex());
    return match && match.length > 0 ? match[1] : undefined;
}
