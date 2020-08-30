module.exports = {
    verbose: true,
    moduleNameMapper: {
      ".scss$": "scss-stub.js"
    },
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
      ],
      clearMocks :true,
      collectCoverage:true,
      transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest',
      },
      setupFiles:["<rootDir>/enzyme.config.js"],
      snapshotSerializers: ["enzyme-to-json/serializer"],
      moduleFileExtensions : ["js","jsx",]
  }