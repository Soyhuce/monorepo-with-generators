# Monorepo with generators

This is a starter pnpm monorepo project.

## Using this monorepo

Run the following command:

```sh
# download monorepo
pnpm dlx degit git@github.com:Soyhuce/monorepo-with-generators.git my-project
cd my-project

# set current node.js
nvm use

# install dependencies with pnpm
pnpm i

# generate your first app or package
pnpm gen
```

## What's inside?

This monorepo includes the following generators:

### Apps

- `typescript-react-vite`: a [React.js](https://react.dev/) app
- `typescript-astro-react`: a [Astro.js](https://astro.build/) and [React.js](https://react.dev/) app

### Packages

- `javascript`: a simple javascript package
- `typescript`: a simple typescript package
- `typescript-react-ui`: a [React.js](https://react.dev/) package with [Storybook.js](https://storybook.js.org/)

Each package/app comes with [Vitest.js](https://vitest.dev/).

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formating

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

### Test

To test all apps and packages, run the following command:

```
pnpm test
```

### Lint

To lint all apps and packages, run the following command:

```
pnpm lint
```

### Check

To check dependencies for all apps and packages, run the following command:

```
pnpm check
```

### Update dependencies

To update dependencies for all apps and packages, run the following command:

```
pnpm check -u
```
