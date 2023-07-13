module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "src", __dirname],
    testPathIgnorePatterns: ["/node_modules/", "/lib/"],
};
