module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'off',
      {singleQuote: true},
      'error',
      {'no-inline-styles': false},
    ],
  },
};
