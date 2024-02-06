import { getCprRegex } from "../../regex/getCprRegex/getCprRegex";
import { convertToDate } from "../../convert/convertToDate/convertToDate";

/**
 * Check if a CPR number is valid.
 */
export function isCprValid(
    cprNumber: string | number | HTMLInputElement,
    gender?: "f" | "female" | "m" | "male",
): boolean {
    const cpr =
        typeof cprNumber === "string"
            ? cprNumber
            : typeof cprNumber === "number"
              ? String(cprNumber)
              : cprNumber.value;

    // Check that the format is correct and that the date is valid
    if (
        !getCprRegex().test(cpr) ||
        !convertToDate(cpr.slice(0, 4) + "19" + cpr.slice(4, 6))
    ) {
        return false;
    }

    // Should we check if the gender matches the CPR number?
    const checkGender = typeof gender === "string";

    // If not, return true
    if (!checkGender) {
        return true;
    }

    // Otherwise, check that the gender matches the CPR number
    const genderLetter = (gender as string).charAt(0).toLowerCase();
    const lastDigit = parseInt(cpr.slice(-1));
    const lastDigitIsEven = lastDigit % 2;

    return !!(
        (genderLetter === "f" && !lastDigitIsEven) ||
        (genderLetter === "m" && lastDigitIsEven)
    );
}
