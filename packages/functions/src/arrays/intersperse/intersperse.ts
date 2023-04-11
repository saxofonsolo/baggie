/**
 * Insert new values between all values in an array.
 */
export const intersperse = (array: any[], ...insertion: any[]): any[] =>
    array.reduce((accumulator: any[], element, index, array) => {
        accumulator.push(element);
        if (index < array.length - 1) {
            insertion.forEach((insert: any) =>
                accumulator.push(
                    typeof insert === "function"
                        ? (
                              insert as (args: {
                                  previous: any;
                                  next: any;
                              }) => any
                          )({
                              previous: array[index],
                              next: array[index + 1],
                          })
                        : insert,
                ),
            );
        }
        return accumulator;
    }, []);
