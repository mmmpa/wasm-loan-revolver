module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'typescript',
    'airbnb-base',
    'standard-jsx',
  ],
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'no-storage',
    'react-hooks',
  ],
  globals: {
    APP_ENV: true,
    document: true,
    window: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      'pragma': 'h',
    },
  },
  rules: {
    'lines-between-class-members': 0,
    'import/no-named-as-default': 0,
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-console': 2,
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'block-scoped-var': 2,
    curly: [
      2,
      'all',
    ],
    'default-case': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-floating-decimal': 2,
    'no-multi-spaces': [
      2,
      {
        exceptions: {
          Property: true,
          ImportDeclaration: true,
          VariableDeclarator: true,
          AssignmentExpression: true,
        },
      },
    ],
    'no-self-compare': 2,
    'wrap-iife': [
      2,
      'inside',
    ],
    'react-hooks/rules-of-hooks': 'error',
    'dot-notation': 1,
    'guard-for-in': 1,
    'no-extend-native': 1,
    'no-iterator': 1,
    'no-loop-func': 1,
    'no-multi-str': 1,
    'no-process-env': 0,
    'no-proto': 1,
    'no-throw-literal': 1,
    'no-unused-expressions': 0,
    radix: 1,
    'no-alert': 0,
    'no-extra-bind': 0,
    yoda: 0,
    'class-methods-use-this': 0,
    'require-jsdoc': 0,
    'typescript/explicit-member-accessibility': 0,
    'typescript/member-delimiter-style': 0,
    'no-unused-vars': 'error',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': 'error',
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-cycle': 0,
    'indent': [
      'error', 2, {
        'SwitchCase': 0,
        'MemberExpression': 1,
      },
    ],
    'no-param-reassign': 0,
    'camelcase': 0,
    'object-curly-newline': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'max-len': 0,
    'no-return-assign': 0,
    'no-sequences': 0,
    'no-shadow': 0,
    'import/named': 'off',
    'typescript/explicit-function-return-type': 'off',
    'prefer-arrow-callback': 'off',
    'import/no-named-default': 'off',
  },
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
};