/**
 * Require only one of the properties of an interface.
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
> &
    {
        [K in Keys]-?: Required<Pick<T, K>> &
            Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];
