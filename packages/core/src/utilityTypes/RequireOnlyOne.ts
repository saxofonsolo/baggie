/**
 * Require only one of the properties of an interface.
 */
export type RequireOnlyOne<T, TKey extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, TKey>
> &
    {
        [K in TKey]-?: Required<Pick<T, K>> &
            Partial<Record<Exclude<TKey, K>, undefined>>;
    }[TKey];
