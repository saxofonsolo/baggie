import { CookieAttributes, setCookie } from "./setCookie";

/**
 * Delete a cookie matching a certain name and attributes.
 *
 * @remarks
 * The expiration date will be set to yesterday, which will unset the cookie.
 */
export function deleteCookie(
    name: string,
    attributes: CookieAttributes = {},
): void {
    return setCookie(name, "", {
        ...attributes,
        expires: -1,
    });
}
