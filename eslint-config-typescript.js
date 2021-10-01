module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['@vue/typescript/recommended'],
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/array-type': 'error',

    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'objectLiteralMethod',
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
      { selector: 'typeProperty', format: ['camelCase', 'snake_case'] },
    ],

    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/sort-type-union-intersection-members': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          { selector: 'enumMember', format: ['UPPER_CASE'] },
          { selector: 'typeLike', format: ['PascalCase'] },
          {
            selector: 'objectLiteralProperty',
            format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'objectLiteralMethod',
            format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
          },
          { selector: 'typeProperty', format: ['camelCase', 'snake_case'] },
          { selector: 'variable', format: ['camelCase', 'PascalCase'] },
        ],
      },
    },
  ],
};
