/**
 * @internal
 * @category Cookie
 */
export const encodeCookieName = (name: string): string =>
    encodeURIComponent(String(name))
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, encodeURIComponent);
