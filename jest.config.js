module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "@baggie/(.+)": "<rootDir>../$1/src",
    },
    testPathIgnorePatterns: ["/node_modules/", "/lib/"],
};
