const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  "preset": "jest-puppeteer",
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
  },
}

module.exports = createJestConfig(customJestConfig)


