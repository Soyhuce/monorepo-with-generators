import eslint from '@eslint/js'
import react from '@eslint-react/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import tailwindcss from 'eslint-plugin-tailwindcss'

const GLOB_TS = '**/*.?([cm])ts'
const GLOB_TSX = '**/*.tsx'

const GLOB_JS = '**/*.?([cm])js'
const GLOB_JSX = '**/*.jsx'

const GLOB_MDX = '**/*.mdx'

const GLOB_ASTRO = '**/*.astro'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Envs
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Syntax rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/all'],
  ...tailwindcss.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: './configs/tailwind-config/src/index.ts',
      },
    },
  },

  // Code style rules
  stylistic.configs['disable-legacy'],
  stylistic.configs.customize({
    flat: true,
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
  }),

  {
    files: [
      GLOB_TS,
      GLOB_TSX,
      GLOB_JS,
      GLOB_JSX,
      GLOB_ASTRO,
      GLOB_MDX,
    ],
    ...jsxA11y.flatConfigs.strict,
    languageOptions: {
      ...jsxA11y.flatConfigs.strict.languageOptions,
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
      'astro/semi': ['error', 'never'],
    },
  },

  // React
  {
    files: [
      GLOB_TS,
      GLOB_TSX,
      GLOB_JS,
      GLOB_JSX,
      GLOB_MDX,
    ],
    ...react.configs.recommended,
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/coverage',
      '**/storybook-static',
    ],
  },
]
