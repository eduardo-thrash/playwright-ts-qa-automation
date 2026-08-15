import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '.features-gen/**',
      'allure-report/**',
      'allure-results/**',
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/lines-between-class-members': [
        'error',
        {
          enforce: [{ blankLine: 'always', prev: 'method', next: 'method' }],
        },
      ],
    },
  },
];
