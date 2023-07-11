/**
 * @internal
 * @category Cookie
 */
export const decodeCookieParts = (part: string): string =>
    part.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
