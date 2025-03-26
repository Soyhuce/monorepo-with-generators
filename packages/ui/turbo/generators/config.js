// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PlopTypes } from '@turbo/gen'

// @ts-check

/**
 * @param {PlopTypes.NodePlopAPI} plop
 */
export default function generator(plop) {
  plop.setGenerator('ui component', {
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
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase type}}/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase type}}/index.ts',
        template: '',
        // We just need to ensure the file exists. In case it already does, just
        // silently go to the next action.
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/{{kebabCase type}}/index.ts',
        template: `export * from './{{kebabCase name}}'`,
      },
    ],
  })
}
