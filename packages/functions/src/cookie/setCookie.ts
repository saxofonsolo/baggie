import { encodeCookieValue } from "./_helpers/encodeCookieValue.helper";
import { encodeCookieName } from "./_helpers/encodeCookieName.helper";

/**
 * These are the properties that can be set in the `attributes` objects of the
 * cookie functions.
 *
 * @remarks
 * Using `maxAge` is preferred over `expires`. If both `expires` and `maxAge`
 * are set, `maxAge` has precedence.
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
 */
export const setCookie = (
    name: string,
    value: any,
    attributes?: CookieAttributes,
): void => {
    const options: CookieAttributes = {
        path: "",
        domain: "",
        maxAge: undefined,
        expires: undefined,
        httpOnly: false,
        secure: false,
        ...attributes,
    }; // Changeable variables for name and value
    let cookieName = name;
    let cookieValue = value;

    // Set object with attributes
    const cookieAttributes: { [key: string]: string | boolean | undefined } = {
        Path: options.path,
        Domain: options.domain,
        HttpOnly: options.httpOnly,
        Secure: options.secure,
    };

    if (typeof options.maxAge === "number") {
        cookieAttributes["Max-Age"] = options.maxAge.toString();
    } else if (options.expires) {
        if (typeof options.expires === "number") {
            cookieAttributes.Expires = new Date(
                Date.now() + options.expires * 864e5,
            ).toUTCString();
        } else {
            cookieAttributes.Expires = options.expires.toUTCString();
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
                attributeName,
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
    document.cookie = `${cookieName}=${
        cookieValue as string
    }${attributesString}`;
};
