# shop-organiser

## Tech setup

1. [Vue 3](https://vuejs.org/guide/introduction.html): JavaScript framework for building user interfaces.
2. [Vite](https://v2.vitejs.dev/guide): a build tool which glues everything together.
3. [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): wrapper around JavaScript.
4. [Vitest](https://vitest.dev/guide/): unit testing framework (test runner).
5. [Vue Test Utils](https://test-utils.vuejs.org): set of utility functions aimed to simplify testing Vue.js components.

## Local development Guide

1. Recommended IDE setup: [Visual Studio Code](https://vuejs.org/guide/quick-start#:~:text=IDE%20setup%20is-,Visual%20Studio%20Code,-%2B%20Vue%20%2D%20Official) + [Vue - Official extension](https://vuejs.org/guide/quick-start#:~:text=Vue%20%2D%20Official%20extension) ([source](https://vuejs.org/guide/quick-start)).
2. As browser for development I recommend [Chrome](https://www.google.com/chrome/) because it supports official [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
3. Install dependencies with *npm install* (called in main project directory)
4. To run the app locally call *npx vite* (alias: *npm run dev*) or *npx vite --port <specify_port>*

## Style convention

Project has *.vscode/settings.json* to impose certain typescript formatting on file save. If you use different IDE than VS Code, please config below convention into your preferred IDE.

Convention:

1. When semicolon is optional: use it anyway, for example: *import { expect } from 'vitest';*