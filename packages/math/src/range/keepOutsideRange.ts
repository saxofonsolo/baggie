export const keepOutsideRange = (
    input: number,
    rangeStart: number,
    rangeStop: number,
    roundDownMidpoint = false
): number =>
    input < rangeStop && input > rangeStart
        ? [rangeStart, rangeStop].reduce(
              (previous: number, current: number) => {
                  const a = Math.abs(current - input);
                  const b = Math.abs(previous - input);
                  const comparison = roundDownMidpoint ? a < b : a <= b;
                  return comparison ? current : previous;
              }
          )
        : input;
