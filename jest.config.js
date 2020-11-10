module.exports = {
    verbose: true,
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    testRegex: "(/src/.*)\\.test.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
