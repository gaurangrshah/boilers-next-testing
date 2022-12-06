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



## ESLint Plugins

> ```shell
> yarn add -D eslint-config-airbnb eslint-config-airbnb-base eslint-config-next eslint-config-prettier eslint-config-react eslint-import-resolver-typescript eslint-plugin-cypress eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-testing-library
> ```



## ESLint Typescript

> ```shell
> yarn add -D @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript-eslint
> ```



**TODO:**

- [ ] add eslint configs + plugins
- [ ] typescript eslint support
- [ ] typescript absolute imports (.tsconfig)
- [ ] configure cypress + @testing-library/cypress 
  - [ ] add cypress test scripts
- [ ] add `@types/react`
- [ ] install **[next-auth](https://next-auth.js.org/getting-started/example)** `yarn add next-auth`

