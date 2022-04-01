const { defaults } = require("jest-config");
module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
  },
};
