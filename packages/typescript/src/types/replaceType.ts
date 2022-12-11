/* eslint-disable */
/**
 * Replace one type with another.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { ReplaceType } from "@baggie/typescript";
 *
 * interface Dictionary {
 *     title: string;
 *     amount: number;
 *     common: {
 *         ok: string;
 *         cancel: string;
 *     };
 *     screen1: {
 *         header: {
 *             text: string;
 *             quantity: number;
 *         };
 *     };
 * };
 *
 * const dictionary: Dictionary = {
 *     title: "Headline",
 *     amount: 1,
 *     common: {
 *         ok: "Okay",
 *         cancel: "Cancel",
 *     },
 *     screen1: {
 *         header: {
 *             text: "Lorem ipsim",
 *             quantity: 9,
 *         },
 *     },
 * };
 *
 * type Translations = ReplaceType<Dictionary, string, (language: "en" | "da") => string>;
 *
 * const translations: Translations = {
 *     title: (language) => language === "da" ? "Overskrift" : "Headline",
 *     amount: 1,
 *     common: {
 *         ok: (language) => language === "da" ? "Fint" : "Okay",
 *         cancel: (language) => language === "da" ? "Annuller" : "Cancel",
 *     },
 *     screen1: {
 *         header: {
 *             text: (language) => language === "da" ? "Volapyk" : "Lorem ipsim",
 *             quantity: 9,
 *         },
 *     },
 * };
 * ```
 */
export type ReplaceType<T, F, R> = T extends F
    ? R
    : T extends object
    ? { [K in keyof T]: ReplaceType<T[K], F, R> }
    : T;
