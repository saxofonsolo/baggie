export function getAge(birth: Date, death?: Date): number {
    const today = death || new Date();
    const birthDate = new Date(birth);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
