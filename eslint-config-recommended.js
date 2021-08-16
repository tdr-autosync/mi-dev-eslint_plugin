module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['@motoinsight/eslint-plugin-motoinsight', 'simple-import-sort'],
  reportUnusedDisableDirectives: true,
  rules: {
    'no-console': 'error',

    'no-promise-executor-return': 'error',

    'no-unreachable-loop': 'error',

    'array-callback-return': 'error',

    'consistent-return': 'error',

    curly: ['error', 'all'],

    'default-case': 'error',

    'default-param-last': 'error',

    eqeqeq: ['error', 'always', { null: 'ignore' }],

    'grouped-accessor-pairs': 'error',

    'no-alert': 'error',

    'no-caller': 'error',

    'no-constructor-return': 'error',

    'no-empty-function': 'error',

    'no-eval': 'error',

    'no-extra-bind': 'error',

    'no-extra-label': 'error',

    'no-floating-decimal': 'error',

    'no-implicit-coercion': ['error', { boolean: false }],

    'no-implicit-globals': 'error',

    'no-implied-eval': 'error',

    'no-invalid-this': 'error',

    'no-lone-blocks': 'error',

    'no-loop-func': 'error',

    'no-multi-str': 'error',

    'no-new-wrappers': 'error',

    'no-octal-escape': 'error',

    'no-return-assign': 'error',

    'no-return-await': 'error',

    'no-self-compare': 'error',

    'no-sequences': 'error',

    'no-throw-literal': 'error',

    'no-unmodified-loop-condition': 'error',

    'no-unused-expressions': 'error',

    'no-useless-call': 'error',

    'no-useless-concat': 'error',

    'no-useless-return': 'error',

    'prefer-promise-reject-errors': 'error',

    'prefer-regex-literals': 'error',

    'require-await': 'error',

    yoda: 'error',

    'no-shadow': 'error',

    'no-use-before-define': 'error',

    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

    'consistent-this': ['error', 'self'],

    'max-depth': ['error', 4],

    'max-nested-callbacks': ['error', 4],

    'new-cap': 'error',

    'new-parens': 'error',

    'no-bitwise': 'error',

    'no-negated-condition': 'error',

    'no-nested-ternary': 'error',

    'no-unneeded-ternary': 'error',

    'one-var': ['error', 'never'],

    'operator-assignment': 'error',

    'prefer-object-spread': 'error',

    'no-duplicate-imports': 'error',

    'no-var': 'error',

    'object-shorthand': 'error',

    'prefer-arrow-callback': 'error',

    'prefer-const': 'error',

    'prefer-rest-params': 'error',

    'prefer-spread': 'error',

    'prefer-template': 'error',

    'jest/no-deprecated-functions': 'off',

    'vue/attribute-hyphenation': ['error', 'never'],

    'vue/component-definition-name-casing': ['error', 'PascalCase'],

    // Off because autofix will break the app.
    'vue/prop-name-casing': ['off', 'camelCase'],

    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],

    // Allow 'v-html' attribute
    'vue/no-v-html': 'off',

    'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    'vue/no-boolean-default': 'error',

    'vue/no-duplicate-attr-inheritance': 'error',

    'vue/no-empty-component-block': 'error',

    'vue/no-multiple-objects-in-class': 'error',

    'vue/no-potential-component-option-typo': 'error',

    'vue/no-static-inline-styles': 'error',

    'vue/no-unused-properties': 'error',

    'vue/no-useless-v-bind': 'error',

    'vue/padding-line-between-blocks': 'error',

    'vue/require-name-property': 'error',

    'vue/no-deprecated-scope-attribute': 'error',

    'vue/no-deprecated-slot-attribute': 'error',

    'vue/no-deprecated-slot-scope-attribute': 'error',

    'vue/v-slot-style': 'error',

    'vue/valid-v-bind-sync': 'error',

    'vue/valid-v-slot': 'error',

    'simple-import-sort/imports': 'error',
  },
};
