import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'no-restricted-globals': 'off',
      'no-nested-ternary': 'off',
      'no-restricted-syntax': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-empty': 'off',
    },
  },
];
