module.exports = {
  rootDir: '../',
  transform: { '^.+\\.(ts|tsx)?$': 'babel-jest' },
  testMatch: [`**/__tests__/**/*.test.ts?(x)`],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1'
  }
}
