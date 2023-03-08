# vuetify3-testing-utilities

Starter & showcase for cohabitation of VueJS 3, Vuetify 3, Vite, Cypress as E2E runner (visit pages) and as Component runner (mount components).

In the [Making-of](making-of.md), you will see hom to reproduce the full setup from scratch.
It might be useful if some dependencies are to be updated or as a sample repository to reproduce an issue.

**Credits**

- https://github.com/elevatebart/cy-ct-vuetify
- https://css-tricks.com/testing-vue-components-with-cypress/
- https://github.com/vuetifyjs/vuetify/issues/14749#issuecomment-1098227529
- https://github.com/mpont91/vue3-vuetify-tests

**Setup**

- [Environment setup](Environment-setup.md)

**Utilities and extensions**

- [vuetify-scaffolding-and-utilities](vuetify-scaffolding-and-utilities.md)
- [vue-test-utils-extensions](vue-test-utils-extensions.md)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run built application

The application must have been built before

```sh
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm lint
```

### Run tests with vitest

```shell
npm test
```

### Run component tests with Cypress Component

```sh
npm run test:component
```

### Run end 2 end tests wit Cypress

```sh
npm run test:e2e
```
