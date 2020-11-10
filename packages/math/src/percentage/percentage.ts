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

export const percentage = ({
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
