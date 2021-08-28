[comment]: <> (<h1 align="center">oxford-prime-academy</h1>)

[comment]: <> (<p align="center">)

[comment]: <> (  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>)

[comment]: <> (  <br>)

[comment]: <> (  <i>Angular starter for enterprise-grade front-end projects, built under a clean architecture )

[comment]: <> (    <br> that helps to scale and maintain a fast workflow.</i>)

[comment]: <> (  <br>)

[comment]: <> (</p>)

[comment]: <> (<p align="center">)

[comment]: <> (  <a href="https://angularboilerplate.vercel.app"><strong>https://angularboilerplate.vercel.app</strong></a>)

[comment]: <> (  <br>)

[comment]: <> (</p>)

[comment]: <> (<p align="center">)

[comment]: <> (  <a href="CONTRIBUTING.md">Contributing Guidelines</a>)

[comment]: <> (  ·)

[comment]: <> (  <a href="https://github.com/juanmesa2097/angular-boilerplate/issues">Submit an Issue</a>)

[comment]: <> (  <br>)

[comment]: <> (  <br>)

[comment]: <> (</p>)

[comment]: <> (<p align="center">)

[comment]: <> (  <a href="https://github.com/facebook/jest">)

[comment]: <> (    <img src="https://jestjs.io/img/jest-badge.svg" alt="unit tests with Jest" />)

[comment]: <> (  </a>&nbsp;)

[comment]: <> (  <a href="https://www.cypress.io">)

[comment]: <> (    <img src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg" alt="e2e with Cypress" />)

[comment]: <> (  </a>&nbsp;)

[comment]: <> (  <a href="https://github.com/juanmesa2097/angular-boilerplate/issues">)

[comment]: <> (    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="Contributions welcome" />)

[comment]: <> (  </a>)

[comment]: <> (</p>)

[comment]: <> (<hr>)

[comment]: <> (## ⚗️ Features)

[comment]: <> (- Strict mode.)

[comment]: <> (- Lazy loading.)

[comment]: <> (- Smart and pure components pattern.)

[comment]: <> (- SCAM pattern.)

[comment]: <> (- Self-contained components and encapsulated modules.)

[comment]: <> (- Components types &#40;e.g. component, page&#41;.)

[comment]: <> (- Amazing directory structure.)

[comment]: <> (- Unit tests with Jest instead of Karma & Jasmine.)

[comment]: <> (- e2e tests with Cypress instead of Protractor.)

[comment]: <> (- PWA)

[comment]: <> (- Dynamic titles and content meta tags.)

[comment]: <> (- TailwindCSS + Autoprefixer + PurgeCSS setup.)

[comment]: <> (- Dark mode and theme configuration.)

[comment]: <> (- Scalable CSS architecture in favor of TailwindCSS layers.)

[comment]: <> (- [Lighthouse]&#40;https://developers.google.com/web/tools/lighthouse&#41; reports improved.)

[comment]: <> (- Migration from TSLint to ESLint.)

[comment]: <> (- Run unit tests & lint code on Git Hooks using [Husky]&#40;https://github.com/typicode/husky&#41; & validate commit messages using [commitlint]&#40;https://github.com/conventional-changelog/commitlint&#41;)

[comment]: <> (- GitHub Actions workflows for code analysis and unit tests.)

[comment]: <> (## 📄 Pages)

[comment]: <> (```)

[comment]: <> (Types of pages)

[comment]: <> (public: everybody can see them)

[comment]: <> (private: only logged in users can see them)

[comment]: <> (```)

[comment]: <> (- General)

[comment]: <> (  - home)

[comment]: <> (  - not-found)

[comment]: <> (- Auth)

[comment]: <> (  - sign-in)

[comment]: <> (  - sign-up)

[comment]: <> (  - forgot-password)

[comment]: <> (  - forgot-password-email-sent)

[comment]: <> (  - password-reset)

[comment]: <> (  - password-reset-succeeded)

[comment]: <> (  - password-reset-failed)

[comment]: <> (- Settings)

[comment]: <> (  - account)

[comment]: <> (  - appearance)

[comment]: <> (  - billing)

[comment]: <> (  - blocked-Users)

[comment]: <> (  - notifications)

[comment]: <> (  - security)

[comment]: <> (  - security-log)

[comment]: <> (- User)

[comment]: <> (  - my-profile)

[comment]: <> (  - overview)

[comment]: <> (- Features)

[comment]: <> (  - dashboard)

[comment]: <> (## 🧱 Self-contained components)

[comment]: <> (- footer)

[comment]: <> (- header)

[comment]: <> (- layout)

[comment]: <> (## 📡 Services)

[comment]: <> (- AuthService)

[comment]: <> (- SeoService)

[comment]: <> (- ThemeService)

[comment]: <> (## 📛 Custom directives)

[comment]: <> (- click-outside &#40;detects when the user clicks outside an element&#41;.)

[comment]: <> (## 🧪 Custom pipes)

[comment]: <> (- bytes &#40;transforms a numeric value into bytes, KB, MB, GB, etc.&#41;.)

[comment]: <> (## 🛠️ Make some initial tweaks)

[comment]: <> (- Change application title:)

[comment]: <> (  Go to `src/index.html` and inside the `title` tag, replace "Angular Boilerplate" with your app name.)

[comment]: <> (- Change paths of the pages:)

[comment]: <> (  Go to `src/app/core/utils/router.utils.ts` to find all the registered routes inside a config object.)

[comment]: <> (  For example, you could replace `sign-in` with `SignIn`, `login` or `iniciar_sesion`)

[comment]: <> (- Change titles, descriptions, and robots of the pages:)

[comment]: <> (  Every page has a `.route` file that contains an exported constant that holds the title, description and a robot's metatag that indicates if it can be indexed or followed by a web crawler.)

[comment]: <> (- Change your TailwindCSS configuration:)

[comment]: <> (  You can find the config file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.)

[comment]: <> (- Set a default theme &#40;First time load&#41;)

[comment]: <> (  Go to `src\app\@core\services\theme\theme.config.ts` and change the following line of code)

[comment]: <> (  from operating system preference)

[comment]: <> (  ```ts)

[comment]: <> (  export const DEFAULT_BASE_THEME = ThemeList.System;)

[comment]: <> (  ```)

[comment]: <> (  to light mode)

[comment]: <> (  ```ts)

[comment]: <> (  export const DEFAULT_BASE_THEME = ThemeList.Light;)

[comment]: <> (  ```)

[comment]: <> (  or dark mode)

[comment]: <> (  ```ts)

[comment]: <> (  export const DEFAULT_BASE_THEME = ThemeList.Dark;)

[comment]: <> (  ```)

[comment]: <> (## 🗑️ Remove features)

[comment]: <> (There are certain features that you may or may not like to have in your projects, and here's how to remove them:)

[comment]: <> (### 🌠 Husky & commitlint)

[comment]: <> (> Husky allows you to easily run scripts on Git Hooks & commitlint validates if a commit message follows a certain convention.)

[comment]: <> (- Remove execution of tests and linting on pre-commit:)

[comment]: <> (  - Go to `angular-boilerplate\.husky` and remove the npm scripts inside the `pre-commit` file or the file itself.)

[comment]: <> (- Remove execution of build on pre-push:)

[comment]: <> (  - Go to `angular-boilerplate\.husky` and remove the npm scripts inside the `pre-push` file or the file itself.)

[comment]: <> (- Remove conventional commit messages validation:)

[comment]: <> (  1. Go to `angular-boilerplate\.husky` and remove the command `npx commitlint --edit $1` inside the `commit-msg` file or the file itself.)

[comment]: <> (  2. Remove the file `angular-boilerplate\.commitlintrc`.)

[comment]: <> (  3. Run the following command:)

[comment]: <> (  ```)

[comment]: <> (  npm uninstall @commitlint/cli @commitlint/config-conventional)

[comment]: <> (  ```)

[comment]: <> (  OR)

[comment]: <> (  ```)

[comment]: <> (  yarn remove @commitlint/cli @commitlint/config-conventional)

[comment]: <> (  ```)

[comment]: <> (- Fully remove Husky & commitlint)

[comment]: <> (  1. Remove the folder `angular-boilerplate\.husky`.)

[comment]: <> (  2. Remove the file `angular-boilerplate\.commitlintrc`.)

[comment]: <> (  3. Run the following commands:)

[comment]: <> (  ```)

[comment]: <> (  npm uninstall husky @commitlint/cli @commitlint/config-conventional)

[comment]: <> (  ```)

[comment]: <> (  OR)

[comment]: <> (  ```)

[comment]: <> (  yarn remove husky @commitlint/cli @commitlint/config-conventional)

[comment]: <> (  ```)

[comment]: <> (### 🌠 GitHub Actions workflows)

[comment]: <> (> A GitHub Action workflow is a configurable automated process made up of one or more jobs that will help us to validate if some actions pass before we integrate new code into the repository &#40;E.g., run unit tests on pull-requests or branch pushes&#41;.)

[comment]: <> (- Remove CodeQL analysis:)

[comment]: <> (  - Go to `angular-boilerplate\.github\workflows` and remove the file codeql-analysis.yml)

[comment]: <> (- Remove tests workflow:)

[comment]: <> (  - Go to `angular-boilerplate\.github\workflows` and remove the file test.yml)

[comment]: <> (### 🌠 TailwindCSS)

[comment]: <> (> TailwindCSS is a utility-first CSS Framework fully customizable & fully tree shakeable. If you want to replace it with another CSS framework or don't want to use a CSS framework at all, you can easily remove it from the project.)

[comment]: <> (1. Remove `angular-boilerplate\tailwind.config.js` file.)

[comment]: <> (2. Run the following command:)

[comment]: <> (```)

[comment]: <> (npm uninstall tailwindcss autoprefixer postcss)

[comment]: <> (```)

[comment]: <> (OR)

[comment]: <> (```)

[comment]: <> (yarn remove tailwindcss autoprefixer postcss)

[comment]: <> (```)

[comment]: <> (## ⛩️ Project structure)

[comment]: <> (```console)

[comment]: <> (├───app)

[comment]: <> (│   ├───@core)

[comment]: <> (│   │   ├───directives)

[comment]: <> (│   │   │   └───click-outside)

[comment]: <> (│   │   ├───guards)

[comment]: <> (│   │   ├───interceptors)

[comment]: <> (│   │   ├───pipes)

[comment]: <> (│   │   │   └───bytes)

[comment]: <> (│   │   ├───services)

[comment]: <> (│   │   │   ├───seo)

[comment]: <> (│   │   │   └───theme)

[comment]: <> (│   │   └───utils)

[comment]: <> (│   ├───@shell)

[comment]: <> (│   │   ├───ft)

[comment]: <> (│   │   └───ui &#40;layout components&#41;)

[comment]: <> (│   │       ├───footer)

[comment]: <> (│   │       ├───header)

[comment]: <> (│   │       ├───layout)

[comment]: <> (│   │       └───not-found)

[comment]: <> (│   ├───components &#40;generic shared components&#41;)

[comment]: <> (│   └───pages)

[comment]: <> (│       ├───auth)

[comment]: <> (│       │   ├───pages)

[comment]: <> (│       │   │   ├───forgot-password)

[comment]: <> (│       │   │   ├───forgot-password-email-sent)

[comment]: <> (│       │   │   ├───password-reset)

[comment]: <> (│       │   │   ├───password-reset-failed)

[comment]: <> (│       │   │   ├───password-reset-succeeded)

[comment]: <> (│       │   │   ├───sign-in)

[comment]: <> (│       │   │   └───sign-up)

[comment]: <> (│       │   └───services)

[comment]: <> (│       ├───dashboard)

[comment]: <> (│       ├───home)

[comment]: <> (│       ├───settings)

[comment]: <> (│       │   └───pages)

[comment]: <> (│       │       ├───account)

[comment]: <> (│       │       ├───appearance)

[comment]: <> (│       │       ├───billing)

[comment]: <> (│       │       ├───blocked-users)

[comment]: <> (│       │       ├───notifications)

[comment]: <> (│       │       ├───security)

[comment]: <> (│       │       └───security-log)

[comment]: <> (│       └───user)

[comment]: <> (│           └───pages)

[comment]: <> (│               ├───my-profile)

[comment]: <> (│               └───overview)

[comment]: <> (├───assets)

[comment]: <> (├───environments)

[comment]: <> (└───theme)

[comment]: <> (    ├───01-base)

[comment]: <> (    ├───02-components)

[comment]: <> (    └───03-utilities)

[comment]: <> (```)

[comment]: <> (## 🧙‍♂️ Commands)

[comment]: <> (| Command       | Description                                                    | NPM                   | Yarn               | Background command                                          |)

[comment]: <> (| ------------- | -------------------------------------------------------------- | --------------------- | ------------------ | ----------------------------------------------------------- |)

[comment]: <> (| ng            | See available commands                                         | npm run ng            | yarn ng            | ng                                                          |)

[comment]: <> (| start         | Run your app in development mode                               | npm start             | yarn start         | ng serve                                                    |)

[comment]: <> (| build         | Build your app for production                                  | npm run build         | yarn build         | ng build                                                    |)

[comment]: <> (| build:stats   | Build your app for production and generate a "stats.json" file | npm run build:stats   | yarn build:stats   | ng build --stats-json                                       |)

[comment]: <> (| watch         | Run build when files change.                                   | npm run watch         | yarn watch         | ng build --watch --configuration development                |)

[comment]: <> (| test:unit     | Run your unit tests                                            | npm run test          | yarn test          | ng test                                                     |)

[comment]: <> (| test:e2e      | Run your e2e tests                                             | npm run e2e           | yarn e2e           | ng e2e                                                      |)

[comment]: <> (| test:coverage | Run your unit tests & generates a coverage report              | npm run test:coverage | yarn test:coverage | ng test --coverage                                          |)

[comment]: <> (| lint          | Use ESLint to lint your app                                    | npm run lint          | yarn lint          | ng lint                                                     |)

[comment]: <> (| analyze       | Open webpack-bundle-analyzer                                   | npm run analyze       | yarn analyze       | webpack-bundle-analyzer dist/angular-boilerplate/stats.json |)
