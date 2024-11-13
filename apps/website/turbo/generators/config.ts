import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('website component', {
    description: '🧩 Add component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is the type of the component?',
        choices: [
          { name: 'Components', value: 'components' },
          { name: 'Layouts', value: 'layouts' },
          { name: 'Pages', value: 'pages' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/{{kebabCase type}}/index.ts',
        template: '',
        // We just need to ensure the file exists. In case it already does, just
        // silently go to the next action.
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/{{kebabCase type}}/index.ts',
        template: `export * from './{{kebabCase name}}'`,
      },
    ],
  })
}
