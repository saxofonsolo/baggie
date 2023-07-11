/**
 * @internal
 * @category Cookie
 */
export const encodeCookieValue = (value: string): string =>
    encodeURIComponent(String(value)).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent,
    );
