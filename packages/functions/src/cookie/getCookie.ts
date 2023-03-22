import { decodeCookieParts } from "./_helpers/decodeCookiePart.helper";

/**
 * Get a cookie.
 *
 * Be default the value will be parsed using `JSON.parse()`, but if you want to
 * keep it a string (even though it might look like a number, an array or an
 * object), set the parameter `dontParseCookie` to `true`.
 *
 * @category Cookie
 */
export const getCookie = (name: string, dontParseCookie = false): any => {
    // Object for storing cookies
    const cookieJar: { [name: string]: string } = {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    const cookies = document.cookie ? document.cookie.split("; ") : [];

    cookies.forEach((cookie) => {
        // Search for cookie or loop through all cookies if no name is defined.
        // If the defined cookie name is already found, skip all of this.
        if (!name || typeof cookieJar[name] === "undefined") {
            // Split string into name and value
            const parts = cookie.split("=");
            const cookieName = parts[0];
            let cookieValue = parts.slice(1).join("=");

            // If cookie value is a string and shouldn't be parsed, just remove the surrounding quotes
            if (dontParseCookie && cookieValue.charAt(0) === `"`) {
                cookieValue = cookieValue.slice(1, -1);
            }

            // Decode cookie name and value
            try {
                const decodedName = decodeCookieParts(cookieName);
                cookieValue = decodeCookieParts(cookieValue);

                if (!dontParseCookie) {
                    // Try parsing cookie
                    try {
                        cookieValue = JSON.parse(cookieValue);
                    } catch (error) {
                        // Cookie value could not be parsed - return unparsed string
                    }
                }

                // Add cookie to cookie jar
                cookieJar[decodedName] = cookieValue;
            } catch (error) {
                // Failed retrieving or decoding cookie - return undefined
            }
        }
    });

    // Return specific cookie if a name is defined - otherwise return all cookies in an object
    return name ? cookieJar[name] : cookieJar;
};
