import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    // add testing environment variables here
    // SECRET: process.env.SECRET
    // usage: Cypress.env("SECRET")
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // add tasks here -- must always return null:
      // on("task", () => { "task1": () => doThis().then(() => null)})
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
