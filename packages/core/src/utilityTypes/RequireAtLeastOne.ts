/**
 * Require at least one of the properties of an interface.
 */
export type RequireAtLeastOne<T, TKey extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, TKey>
> &
    {
        [K in TKey]-?: Required<Pick<T, K>> &
            Partial<Pick<T, Exclude<TKey, K>>>;
    }[TKey];
