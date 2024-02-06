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
    whole?: never;
    percentage: number;
}

type Properties = GetPart | GetWhole | GetPercentage;

/**
 * Perform calculations with percentage.
 */
export function getPercentage(
    { part, whole, percentage }: Properties,
    percentageAsDecimal = true,
): number {
    const factor = percentageAsDecimal ? 1 : 100;

    if (part && whole) {
        return (part / whole) * factor;
    }

    if (whole && percentage) {
        return (percentage / factor) * whole;
    }

    if (part && percentage) {
        return part / (percentage / factor);
    }

    return 0;
}
