module.exports = {
    ignorePatterns: ["lib/"],
    parserOptions: {
        ecmaVersion: "2018",
    },
    env: { es6: true },
    plugins: ["import"],
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript",
            ],
            globals: {
                document: true,
                window: true,
            },
        },
        {
            files: ["*.ts"],
            excludedFiles: ["**/src/index.ts", "*.test.ts"],
            rules: {
                "import/no-unused-modules": [
                    1,
                    { missingExports: true, unusedExports: true },
                ],
            },
        },
        {
            files: ["*.test.ts"],
            globals: {
                describe: true,
                expect: true,
                test: true,
            },
        },
        {
            files: ["*.js"],
            globals: {
                console: true,
                exports: true,
                module: true,
                process: true,
                require: true,
            },
        },
    ],
};
