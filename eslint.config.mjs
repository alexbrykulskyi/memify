import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import eslintPluginPrettier from 'eslint-plugin-prettier'; // Підключаємо плагін Prettier для ESLint
import prettierConfig from './prettier.config.js';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default {
  extends: [
    ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  ],
  plugins: {
    prettier: eslintPluginPrettier, // Підключаємо плагін Prettier
  },
  rules: {
    'prettier/prettier': ['warn', prettierConfig], // Використовуємо конфіг Prettier
  },
};
