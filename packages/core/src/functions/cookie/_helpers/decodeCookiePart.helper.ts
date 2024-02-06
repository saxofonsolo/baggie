/**
 * @internal
 * @category Cookie
 */
export function decodeCookieParts(part: string): string {
    return part.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
}
