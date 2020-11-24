/* globals Document, HTMLCollection, Node, NodeList, Window */
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { isBrowser } from "@baggie/detection";

/**
 * **Iterate over just about any iterable object type** - primarily for node lists, arrays and objects, but will also
 * yield results for single elements such as elements (nodes), strings or numbers.
 *
 * @example
 * **Iterating through an array:**
 * ```ts
 * import { forEach } from "@baggie/functions";
 *
 * forEach([value1, value2, value3], (value, index) => {
 *     // Loop through the values in the array
 * });
 * ```
 *
 * @example
 * **Iterating through an object:**
 * ```ts
 * import { forEach } from "@baggie/functions";
 *
 * forEach({"key1": value1, "key2": value2}, (value, key) => {
 *     // Loop through the values in the object
 * });
 * ```
 *
 * @example
 * **Iterating through a DOM-collection:**
 * ```ts
 * import { forEach } from "@baggie/functions";
 *
 * const collection = document.querySelectorAll("div");
 * forEach(collection, element => {
 *     // "element" is a reference to the current DOM-element.
 * });
 * ```
 *
 * @category Iterators
 * @author [\@DonGissel](https://github.com/DonGissel)
 */
export function forEach(
    collection:
        | Node
        | NodeList
        | Window
        | Document
        | any[]
        | Record<string, unknown>
        | HTMLCollection
        | Map<any, any>
        | Set<any>
        | any,
    iterator: (value: any, key: number | string) => void,
    allowNullValues = false
): void {
    // ** NODE LISTS
    // If we're dealing with a node list (see document.querySelectorAll()) or HTMLCollections (see eg. document.getElementByClassName, node.children),
    // we'll iterate through it the old fashioned way.
    if (
        isBrowser &&
        (collection instanceof NodeList || collection instanceof HTMLCollection)
    ) {
        for (let i = 0; i < collection.length; i += 1) {
            iterator(collection.item(i), i);
        }
    }

    // ** ARRAYS
    // Regular arrays are, you know, completely easy.
    else if (Array.isArray(collection)) {
        // Why not use `Array.prototype.forEach()`? Because for all the optimizations behind
        // the scenes, it's still much slower than a simple for-loop.
        for (let i = 0; i < collection.length; i += 1) {
            iterator(collection[i], i);
        }
    }

    // ** ITERATORS
    // If we have an iterator object we'll use the "for ... of" method of iterating through it.
    else if (collection && collection.constructor.name === "Iterator") {
        let index = 0;
        for (const item of collection) {
            iterator(item, index);
            index += 1;
        }
    }

    // ** MAP
    else if (collection && collection instanceof Map) {
        collection.forEach((value, key) => iterator(value, key));
    }

    // ** SET
    else if (collection && collection instanceof Set) {
        let index = 0;
        collection.forEach((value) => {
            iterator(value, index);
            index += 1;
        });
    }

    // ** REGULAR OBJECTS
    // Objects that are *NOT* HTML-elements of some kind get special treatment.
    else if (
        collection &&
        typeof collection === "object" &&
        (!isBrowser ||
            !(
                collection instanceof Node ||
                collection instanceof Window ||
                collection instanceof Document
            ))
    ) {
        forEach(Object.keys(collection), (key: string) => {
            // We only want to deal with properties that exist on the object itself,
            // not some prototyped stuff.
            if (Object.prototype.hasOwnProperty.call(collection, key)) {
                iterator(collection[key], key);
            }
        });
    }

    // ** SINGLE NODES OR ELEMENTS
    // Anything that doesn't fit in the cases above will be handled here. We'll just fire the iterator once with the
    // given collection argument, and 0 as the key, and hope that is enough for the use case.
    else {
        if (collection || allowNullValues) {
            iterator(collection, 0);
        }
    }
}
