interface GetPercentage {
    part: number;
    whole: number;
    percentage?: undefined;
}

interface GetPart {
    part?: undefined;
    whole: number;
    percentage: number;
}

interface GetWhole {
    part: number;
    whole?: undefined;
    percentage: number;
}

/**
 * Perform calculations with percentage.
 *
 * @example
 * **Get percentage:**
 * ```ts
 * import { getPercentage } from "@baggie/math";
 *
 * const part = 5;
 * const whole = 50;
 *
 * const percentage = getPercentage({ part, whole });
 * // percentage = 10
 * ```
 *
 * @example
 * **Get part:**
 * ```ts
 * import { getPercentage } from "@baggie/math";
 *
 * const whole = 50;
 * const percentage = 10;
 *
 * const part = getPercentage({ whole, percentage });
 * // part = 5
 * ```
 *
 * @example
 * **Get whole:**
 * ```ts
 * import { getPercentage } from "@baggie/math";
 *
 * const part = 5;
 * const percentage = 10;
 *
 * const whole = getPercentage({ part, percentage });
 * // whole = 50
 * ```
 *
 * @category Percentage
 */
export const getPercentage = ({
    part,
    whole,
    percentage,
}: GetPart | GetWhole | GetPercentage): number => {
    if (part && whole) {
        return (part / whole) * 100;
    }

    if (whole && percentage) {
        return (percentage / 100) * whole;
    }

    if (part && percentage) {
        return part / (percentage / 100);
    }

    return 0;
};
