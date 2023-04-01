const settings = require("../../jest.config.js");

module.exports = {
    ...settings,
    moduleNameMapper: {
        "@baggie/(.+)": "<rootDir>../$1/src",
    },
};
