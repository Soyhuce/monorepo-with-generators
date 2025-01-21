import { exec } from 'node:child_process'

import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setActionType('installDeps', function () {
    return new Promise((resolve, reject) => {
      exec('pnpm i --no-frozen-lockfile', (error, stdout, stderr) => {
        if (error) {
          console.error(`${error.message}`)
          reject(error)
        }
        if (stderr) {
          console.error(`${stderr}`)
          reject(new Error(stderr))
        }
        console.log(`${stdout}`)
        resolve(stdout)
      })
    })
  })

  plop.setGenerator('package', {
    description: '📦 Add a new package inside monorepo',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What kind of package?',
        choices: [
          { name: 'Typescript', value: 'typescript' },
          { name: 'Javascript', value: 'javascript' },
          { name: 'Typescript React UI + Storybook', value: 'typescript-react-ui' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'templates/common',
        destination: 'packages/{{kebabCase name}}',
        templateFiles: [
          'templates/common/LICENCE.md.hbs',
          'templates/common/CHANGELOG.md.hbs',
          'templates/common/README.md.hbs',
        ],
      },
      {
        type: 'addMany',
        base: 'templates/packages/{{kebabCase type}}',
        destination: 'packages/{{kebabCase name}}',
        templateFiles: [
          'templates/packages/{{kebabCase type}}/**/*.hbs',
        ],
      },
      { type: 'installDeps' },
    ],
  })

  plop.setGenerator('application', {
    description: '🌐 Add a new application inside monorepo',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What kind of application?',
        choices: [
          { name: 'Typescript Vite React (Typescript, Vite, React)', value: 'typescript-react-vite' },
          { name: 'Typescript Astro React (Typescript, Vite, Astro)', value: 'typescript-astro-react' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the application?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'templates/common',
        destination: 'apps/{{kebabCase name}}',
        templateFiles: [
          'templates/common/LICENCE.md.hbs',
          'templates/common/CHANGELOG.md.hbs',
          'templates/common/README.md.hbs',
        ],
      },
      {
        type: 'addMany',
        base: 'templates/apps/{{kebabCase type}}',
        destination: 'apps/{{kebabCase name}}',
        templateFiles: 'templates/apps/{{kebabCase type}}/**/*.hbs',
      },
      { type: 'installDeps' },
    ],
  })
}
