/**
 * Replace the type of all properties in an interface.
 */
export type ReplaceAllTypes<T, K> = {
    [PropertyKey in keyof T]: K;
};
