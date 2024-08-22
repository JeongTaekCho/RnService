import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginReact.configs.flat.recommended,

    rules: {
      semi: ['error', 'always'], // 세미콜론 사용을 강제
      quotes: ['error', 'single'], // 작은 따옴표 사용을 강제
      'react/react-in-jsx-scope': 'off', // React v17 이상에서 필요 없는 설정
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용되지 않는 변수 경고, 이름이 _로 시작하는 변수는 무시
    },
  },
];
