module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 0,
    indent: ['error', 2],
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['error'] }],
  },
}
