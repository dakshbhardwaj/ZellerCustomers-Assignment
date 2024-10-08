module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TypeScript files
    '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest for JavaScript files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|my-project|react-native-button)/)',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node'],
};
