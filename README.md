# Nuxt 3 Starter

This is my Nuxt 3 starter with following modules, packages or configurations set after the official create-project cmd `npx nuxi@latest init <project-name>`:

## `nuxt.config.ts`

extract css files with `features.inlineStyles` set to false

```ts
export default defineNuxtConfig({
  features: {
    inlineStyles: false,
  },
});
```

## Nuxt Modules

- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/): default settings
- [@nuxt/eslint](https://eslint.nuxt.com/): default settings
- [@pinia/nuxt](https://nuxt.com/modules/pinia)

## Linters and Formatters

- [prettier](https://prettier.io/): default settings with `.prettierrc`
- [commitlint](https://commitlint.js.org/): default setting with `commitlint.config.js`
- [husky](https://typicode.github.io/husky/):
  - commit-msg hook: run default commitlint cmd `npx --no -- commitlint --edit $1`
  - pre-commit hook: run `npx lint-staged`
- [lint-staged](https://github.com/lint-staged/lint-staged): with settings `.lintstagedrc` to `eslint` and `prettier --write` all staged files
