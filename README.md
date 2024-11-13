# Monorepo with generators

This is a starter pnpm monorepo project.

## Using this example

Run the following command:

```sh
pnpm i
pnpm gen
```

## What's inside?

This monorepo includes the following generators:

### Apps

- `typescript-react-vite`: a [React.js](https://react.dev/) app

### Packages

- `javascript`: a simple javascript package
- `typescript`: a simple typescript package
- `typescript-react-ui`: a [React.js](https://react.dev/) package with [Storybook.js](https://storybook.js.org/)

Each package/app comes with [Vitest.js](https://vitest.dev/).

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
