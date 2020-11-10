/* global process */

const message = (linesOfText) => {
    const maxCharacters = linesOfText.reduce(
        (accumulator, currentLineOfText) =>
            Math.max(accumulator, currentLineOfText.length),
        0
    );
    console.log(` `);
    console.log(`-`.repeat(maxCharacters));
    console.log(` `);
    linesOfText.forEach((currentLineOfText) => console.log(currentLineOfText));
    console.log(` `);
    console.log(`-`.repeat(maxCharacters));
    console.log(` `);
};

const error = (linesOfText) => {
    message(linesOfText);
    process.exitCode = 1;
};

exports.message = message;
exports.error = error;
