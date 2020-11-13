import { encodeCookieValue } from "./_helpers/encodeCookieValue";
import { encodeCookieName } from "./_helpers/encodeCookieName";

/**
 * These are the properties that can be set in the `attributes` objects of the
 * cookie functions.
 *
 * @remarks
 * Using `maxAge` is preferred over `expires`. If both `expires` and `maxAge`
 * are set, `maxAge` has precedence.
 *
 * @category Cookie
 */
export interface CookieAttributes {
    path?: string;
    domain?: string;
    maxAge?: number;
    expires?: number | Date;
    httpOnly?: boolean;
    secure?: boolean;
}

/**
 * Set a cookie with a name, value and optional attributes.
 *
 * @category Cookie
 */
export function setCookie(
    name: string,
    value: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    attributes: CookieAttributes
): void {
    // Changeable variables for name and value
    let cookieName = name;
    let cookieValue = value;

    // Set object with attributes
    const cookieAttributes: { [key: string]: string | boolean | undefined } = {
        Path: attributes.path || "/",
        Domain: attributes.domain || "",
        HttpOnly: !!attributes.httpOnly,
        Secure: !!attributes.secure,
    };

    if (typeof attributes.maxAge === "number") {
        cookieAttributes["Max-Age"] = attributes.maxAge.toString();
    } else if (attributes.expires) {
        if (typeof attributes.expires === "number") {
            cookieAttributes.Expires = new Date(
                Date.now() + attributes.expires * 864e5
            ).toUTCString();
        } else {
            cookieAttributes.Expires = attributes.expires.toUTCString();
        }
    }

    // Turn values supplied as arrays and objects into strings
    try {
        const result = JSON.stringify(cookieValue);
        if (/^[{[]/.test(result)) {
            cookieValue = result;
        }
    } catch (error) {
        // Could not stringify, probably because the value was already a string
    }

    // Encode name and value
    cookieName = encodeCookieName(cookieName);
    cookieValue = encodeCookieValue(cookieValue as string);

    // Convert attributes to a string
    let attributesString = "";
    for (const attributeName in cookieAttributes) {
        if (
            Object.prototype.hasOwnProperty.call(
                cookieAttributes,
                attributeName
            ) &&
            cookieAttributes[attributeName]
        ) {
            // Set name
            attributesString += `; ${attributeName}`;

            // If value is a boolean, don't set a value
            if (cookieAttributes[attributeName] === true) {
                continue;
            }

            // Set value
            attributesString += `=${
                String(cookieAttributes[attributeName]).split(";")[0]
            }`;
        }
    }

    // Set cookie
    document.cookie = `${cookieName}=${cookieValue + attributesString}`;
}
