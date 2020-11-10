const fs = require("fs");
const log = require("../_helpers/log.helper");

const filePath = process.env.HUSKY_GIT_PARAMS;
const textFromFile = fs.readFileSync(filePath, "utf-8");

const minLength = 10;
const maxLength = 70;

const acceptedStart = {
    Merge: { emoji: "🔀", ignoreMaxLength: true },
    Revert: { emoji: "⏪", ignoreMaxLength: true },
    "Feature:": { emoji: "✨" },
    "Remove:": { emoji: "🔥" },
    "Bugfix:": { emoji: "🐛" },
    "Hotfix:": { emoji: "🚑" },
    "Refactor:": { emoji: "♻" },
    "Test:": { emoji: "✅" },
    "Docs:": { emoji: "📝" },
    "Chore:": { emoji: "👷" },
    "Config:": { emoji: "🔧" },
    "Deploy:": { emoji: "🚀" },
    "Perf:": { emoji: "⚡" },
    "A11y:": { emoji: "♿" },
    "SEO:": { emoji: "🔎" },
};

// Remove excessive whitespace and trailing dot
const message = textFromFile.trim().replace(/ +/, " ").replace(/\.$/, "");

const test = new RegExp(`^(${Object.keys(acceptedStart).join("|")})\\s+(.*)`);
const match = message.match(test);

if (!match) {
    log.error([
        `Commit messages must start with on of the string below:`,
        Object.keys(acceptedStart).join(", "),
        `followed by a space and a description.`,
        ` `,
        `Your message is not valid:`,
        message,
    ]);
} else if (
    message.length > maxLength &&
    !acceptedStart[match[1]].ignoreMaxLength
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
    const newMessage = `${acceptedStart[match[1]].emoji} ${message}`;
    fs.writeFileSync(filePath, newMessage);
}
