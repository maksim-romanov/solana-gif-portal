module.exports = {
  extends: ['@jetrockets/base', '@jetrockets/react'],

  rules: {
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
