/* eslint-disable */
const chunkFiles = require("lint-staged/lib/chunkFiles");

// The linters fail for very large lists of files
const MAX_ARGUMENT_LENGTH = 8000;

module.exports = {
    "./packages/**/*.{js,jsx,ts,tsx}": [
        "prettier --write",
        (allFiles) => {
            const chunkedFiles = chunkFiles({
                files: allFiles,
                maxArgLength: MAX_ARGUMENT_LENGTH,
                gitDir: "./",
            });
            return chunkedFiles.map(
                (chunk) =>
                    `eslint --max-warnings 1 --fix --cache ${chunk.join(" ")}`
            );
        },
    ],
};
