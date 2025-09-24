module.exports = {
  extends: ['athom'],
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Allow string concatenation for logging
    'prefer-template': 'off',
    // Allow missing semicolons in some cases
    'semi': ['error', 'always'],
    // Allow trailing commas
    'comma-dangle': ['error', 'always-multiline'],
    // Allow longer lines for some cases
    'max-len': ['warn', { code: 200 }],
    // Allow console.log for debugging
    'no-console': 'off',
    // Allow unused vars with underscore prefix
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Allow string concatenation
    'prefer-template': 'off',
    // Allow spacing around operators
    'space-infix-ops': 'error',
    // Require trailing spaces to be removed
    'no-trailing-spaces': 'error',
    // Require padding in blocks
    'padded-blocks': ['error', 'never'],
  },
};
