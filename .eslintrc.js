module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-console': ['warn'],
    'eol-last': ['error', 'always'],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 1
    }],
    'no-trailing-spaces': ['error']
  }
};
