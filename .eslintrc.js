module.exports = {
    ignorePatterns: ["lib/", "docs/"],
    parserOptions: {
        ecmaVersion: "2018",
        sourceType: "module",
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
            // ALL TS-files (including tests and barrels)
            // ------------------------------------------
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
            // ALL TS-files (except for tests and barrels)
            // -------------------------------------------
            files: ["*.ts"],
            excludedFiles: ["**/src/index.ts", "*.test.ts"],
            plugins: ["eslint-plugin-tsdoc", "jsdoc"],
            rules: {
                "import/no-unused-modules": [
                    1,
                    { missingExports: true, unusedExports: true },
                ],
                "tsdoc/syntax": "warn",
                // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
                "jsdoc/check-alignment": 1,
                "jsdoc/require-description": [1, { exemptedBy: ["internal"]}],
                "jsdoc/newline-after-description": 1,
                "jsdoc/require-jsdoc": [
                    1,
                    {
                        enableFixer: false,
                        publicOnly: true,
                        require: {
                            ArrowFunctionExpression: true,
                            ClassDeclaration: true,
                            ClassExpression: true,
                            FunctionDeclaration: true,
                            FunctionExpression: true,
                            MethodDefinition: true,
                        },
                    },
                ],
            },
        },
        {
            // Only test-files
            // ---------------
            files: ["*.test.ts"],
            globals: {
                describe: true,
                expect: true,
                test: true,
            },
        },
        {
            // Only JS-files
            // -------------
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
