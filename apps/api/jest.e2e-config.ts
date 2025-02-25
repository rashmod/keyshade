/* eslint-disable */
export default {
  forceExit: true,
  displayName: 'api',
  testEnvironment: 'node',
  testMatch: ['**/*.e2e.spec.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api'
}
