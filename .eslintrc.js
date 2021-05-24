module.exports = {
    ignorePatterns: ["lib/", "docs/", "node_modules/"],
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
    rules: {
        "import/first": 1,
        "import/newline-after-import": 1,
        "import/no-default-export": 1,
        "import/no-deprecated": 1,
        "import/no-mutable-exports": 1,
        "import/no-unused-modules": 1,
        "import/order": 1,
    },
    overrides: [
        {
            // ALL TS-files
            // ------------
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
            rules: {
                "import/no-commonjs": 1,
                "import/no-amd": 1,
            },
        },
        {
            // ALL TS-files (except for tests)
            // -------------------------------
            files: ["*.ts"],
            excludedFiles: ["*.test.ts"],
            plugins: [
                "eslint-plugin-filenames",
                "eslint-plugin-tsdoc",
                "jsdoc",
            ],
            rules: {
                "@typescript-eslint/explicit-function-return-type": ["error"],
                "@typescript-eslint/explicit-module-boundary-types": ["error"],
                "import/no-unused-modules": [
                    2,
                    {
                        missingExports: true,
                        unusedExports: true,
                        src: ["**/src/**/!(*.test.ts)"],
                        ignoreExports: ["**/src/index.ts"],
                    },
                ],
                "tsdoc/syntax": "warn",
                // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
                "jsdoc/check-alignment": 1,
                "jsdoc/require-description": [1, { exemptedBy: ["internal"] }],
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
                            MethodDefinition: false,
                        },
                    },
                ],
            },
        },
        {
            // Only test-files
            // ---------------
            files: ["*.test.ts"],
            plugins: ["jest", "jest-formatting"],
            extends: [
                "plugin:jest/recommended",
                "plugin:jest-formatting/recommended",
            ],
            env: {
                "jest/globals": true,
            },
        },
        {
            // Only helper-files
            // -----------------
            files: ["**/_helpers/**/*.ts"],
            rules: {
                "filenames/match-regex": [2, "^[a-zA-Z0-9]+.helper$"],
            },
        },
        {
            // Only interface-files
            // --------------------
            files: ["**/_interfaces/**/*.ts"],
            rules: {
                "filenames/match-regex": [2, "^[a-zA-Z0-9]+.interface$"],
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
