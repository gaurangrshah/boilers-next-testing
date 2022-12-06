# Next.js + Jest



## Configure ESLint + Prettier 

> ```shell
> touch .eslintignore
> ```
>
> ```shell
> yarn add -D --exact prettier
> ```
>
> ```shell
> touch .prettierrc && touch .prettierignore
> ```
>
> **sha**: 94d0dbd9eda78fe8844da7a2a14dac933129a625



## ESLint Configs

> ### ESLint Plugins
>
> > ```shell
> > yarn add -D eslint-config-airbnb eslint-config-airbnb-base eslint-config-next eslint-config-prettier eslint-config-react eslint-import-resolver-typescript eslint-plugin-cypress eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-testing-library
> > ```
>
> 
>
> ### ESLint Typescript
>
> > ```shell
> > yarn add -D @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript-eslint
> > ```
>
> **sha**: ca4f37c154c729732acac0cba4c934827894f7d3



## Cypress

> ```shell
> yarn add -D cypress @testing-library/cypress
> ```
>
> ```json
> // tsconfig.json
> 
> {
>   "compilerOptions": {
>     "types": ["cypress", "@testing-library/cypress"]
>   }
> }
> ```
>
> ```js
> // cypress/support/command.ts
> 
> /// <reference types="cypress" />
> import "@testing-library/cypress/add-commands";
> ```
>
> 
>
> ```json
> // cypress.json
> 
> {
>   "video": false,
>   "screenshotOnRunFailure": false
> }
> ```
>
> > This will keep vidoes from being auto saved and recorded during tests along with screenshots.
> >
> > **NOTE**: 
> >
> > Just as a second step we'll make sure that if any videos do get generated they are not committed:
> >
> > ```shell
> > # .gitignore
> > 
> > #cypress
> > cypress/videos
> > ```
>
> 
>
> **sha**: 0b5b0b56f6c381855328de82012be6fc2bc9ca15

## 

## Jest Types

>>```shell
>>yarn add -D ts-jest @types/jest
>>```
>
>if no jest config exists you can add a typescript config for jest:
>
>```shell
>npx ts-jest config:init
>```
>
>> This will generate a jest.config.js file which adds the following properties:
>>
>> ```js
>> // jest.config.js
>> 
>> module.exports= {
>>   preset: 'ts-jest',
>>   testEnvironment: "jsdom" // "jest-environment-jsdom"
>> }
>> ```
>
>**sha**: dc0d3bd6a562c44f753518ec52a2a552de63b4f7



## Isolate Jest / Cypress Test Runners

> This keeps jest from picking up cypress tests. 
>
> ```js
> // jest.config.js
> {
>   roots: ['<rootDir>/.']
> }
> ```
>
> **NOTE:** not sure if this is neccessary in newer versions as the config looks a bit different and it seems we're using the `dir` property for the same:
>
> ```js
> // jest.config.js
> 
> const createJestConfig = nextJest({
>   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
>   dir: './',
> });
> ```
>
> 

## Cypress Scripts

> ```json
> // package.json
> 
>     "cy:open": "yarn cypress open",
>     "cy:run": "yarn cypress run",
>     "build:test": "export NODE_ENV=\"test\" && next build",
>     "start:test": "export NODE_ENV=\"test\" && next start"
> ```
>
>
> Alternative with database + `start-server-and-test`
>
> ```json
> // package.json
> 
>     "db:reset": "source scripts/reset-db.sh",
>     "build:test": "yarn db:reset && export NODE_ENV=\"test\" && next build",
>     "start:test": "export NODE_ENV=\"test\" && next start",
>     "cy:open": "env-cmd -f .env.test.local cypress open",
>     "cy:start": "start-server-and-test 'yarn start:test' 3000 'yarn cy:open'",
>     "cy:build": "yarn build:test && yarn cy:start",
>     "cy:run": "start-server-and-test 'yarn start:test' 3000 'env-cmd -f .env.test.local cypress run'"
> ```



**TODO:**

- [x] add eslint configs + plugins
- [x] typescript eslint support
- [x] typescript absolute imports (.tsconfig)
- [x] add `@types/react`
- [x] configure cypress + @testing-library/cypress 
  - [x] add cypress test scripts
- [x] Add Jest Types
- [ ] install **[next-auth](https://next-auth.js.org/getting-started/example)** `yarn add next-auth`

