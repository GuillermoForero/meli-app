module.exports = {
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/interfaces',
    '<rootDir>/src/{theme, types}',
    '<rootDir>/src/constants.dist.js',
  ],
  collectCoverageFrom: ['src/**/*.{tsx,ts}'],
  moduleDirectories: ['node_modules', 'src'],
};
