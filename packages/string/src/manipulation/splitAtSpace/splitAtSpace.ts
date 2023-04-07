export const splitAtSpace = (string: string, nearestIndex: number) => {
    const trimmed = string.trim();
    const index = Math.max(nearestIndex, 1);
    const regex = new RegExp(
        `[\\S]{${index},}|([\\S].{0,${index - 1}}(?!\\S))`,
        "g",
    );

    return trimmed.match(regex) || [trimmed];
};
