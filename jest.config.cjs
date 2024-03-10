module.exports = {
    collectCoverageFrom: [
      'app/**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/build/**',
      '!**/test/**',
      '!**/coverage/**',
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
          "lines": 80
        }
    },
    moduleNameMapper: {
      // Handle absolute imports in Remix
      '~/(.*)': './app/$1',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/.cache/',
      '<rootDir>/build/',
      '<rootDir>/test/',
      '<rootDir>/coverage/',
    ],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      customExportConditions: [''],
    },    
    transform: {
      // Use @swc/jest to transpile tests
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
      '^.+\\.(css|scss|sass|less)$': 'jest-preview/transforms/css',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
        'jest-preview/transforms/file',
    },
    transformIgnorePatterns: ['/node_modules/'],
};
