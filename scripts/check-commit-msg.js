const fs = require("fs");
const path = require("path");
const log = require("./_helpers/log.helper");

const filePath = path.join(__dirname, "../", process.argv[2]);
const textFromFile = fs.readFileSync(filePath, "utf-8");

const minLength = 10;
const maxLength = 70;

const acceptedStart = {
    Merge: { ignoreMaxLength: true },
    Revert: { ignoreMaxLength: true },
    "feat:": {},
    "remove:": {},
    "fix:": {},
    "refactor:": {},
    "test:": {},
    "docs:": {},
    "chore:": {},
    "config:": {},
    "deploy:": {},
    "debug:": {},
};

// Remove excessive whitespace and trailing dot
const message = textFromFile.trim().replace(/ +/, " ").replace(/\.$/, "");

const test = new RegExp(
    `^(${Object.keys(acceptedStart)
        .map((key) => key.replace(/^([a-z]+):$/, "$1(?:\\([a-z]+\\))?!?:"))
        .join("|")})\\s+(.*)`,
);
const match = message.match(test);

if (!match) {
    log.error([
        `Commit messages must start with on of the string below:`,
        Object.keys(acceptedStart).join(", ").toLocaleLowerCase(),
        `followed by a space and a description.`,
        ` `,
        `Your message is not valid:`,
        message,
    ]);
} else if (
    message.length > maxLength &&
    !acceptedStart[match[1].replace(/\(.*?\)!?/, "")].ignoreMaxLength
) {
    log.error([
        `Commit message is too long at ${message.length} characters.`,
        `Keep it at ${maxLength} characters or less. Remove ${
            message.length - maxLength
        } characters.`,
        ` `,
        `Your message is not valid:`,
        message,
    ]);
} else if (match[2].length < minLength) {
    const missingCharacters = minLength - match[2].length;
    log.error([
        `Commit message is too short at ${message.length} characters.`,
        `Add ${missingCharacters} character${
            missingCharacters === 1 ? "" : "s"
        }.`,
        ` `,
        `Your message is not valid:`,
        message,
    ]);
} else {
    fs.writeFileSync(filePath, message);
}
