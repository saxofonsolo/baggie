module.exports = {
    ignorePatterns: ["lib/"],
    parserOptions: {
        ecmaVersion: "2018",
    },
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
    ],
};
