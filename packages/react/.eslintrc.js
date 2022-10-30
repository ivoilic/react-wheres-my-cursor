module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [1],
    '@typescript-eslint/no-unsafe-call': [1],
    '@typescript-eslint/no-unsafe-member-access': [1],
    '@typescript-eslint/no-misused-promises': [1],
    '@typescript-eslint/no-empty-interface': [1],
  },
  ignorePatterns: ['.eslintrc.js', '**/dist/**'],
};
