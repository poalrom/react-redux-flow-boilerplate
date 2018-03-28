# Boilerplate for projects in React-Redux-Flow stack

> Fully compatible with [react-ui-lib-boilerplate](https://github.com/poalrom/react-ui-lib-boilerplate)

## What is this?

This is a prepared flow with convenient utils for building your own apps.
Development, testing, creating docs never been so simple!

## Features

- preconfigured [webpack](https://webpack.js.org/)
- static type checking with [flow](https://flow.org/)
- js and stylus linting using [eslint](https://eslint.org/) and [stylint](https://www.npmjs.com/package/stylint)
- snapshot testing with [jest](https://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme/)
- preconfigured [react styleguidist](https://react-styleguidist.js.org) for building docs
- [redux-devtools-extension](http://extension.remotedev.io/) included
- prepared file structure

## Getting Started

Clone this repo to your local machine and install dependencies
```
git clone https://github.com/poalrom/react-redux-flow-boilerplate.git
cd react-redux-flow-boilerplate
npm install
```
That's all. Start write your own components, create tests and docs and do all other cool things!

## How to create new component?

- Add new folder to `components` named in [kebab case](http://wiki.c2.com/?KebabCase).
- Write component markup in `js` file and styles in `styl` file.
Don't forget to import `styl` file to `js`.
- Write docs in `md` file like it's writed in [Button component](https://github.com/poalrom/react-ui-lib-boilerplate/blob/master/src/components/button/Button.md)
- Create tests in `.test.js` file near your component's `js` file.

## About file structure in src

- `actions` and `reducers` - folders for redux parts of app
- `components` - folder for 'stupid' and reusable components
- `containers` - folder for component's containers, connected to redux store
- `interfaces` - folder for flow interface definitions

You can create other folders like utils, exceptions or everything you want. Fill free to transform this stub structure =)

## CLI commands

```
npm run start // Start dev server

npm run build // Build app to dist folder

npm run lint // Lint styles and js

npm run test // Run jest tests

npm run test:coverage // Run jest tests and collect coverage

npm run styleguide // Start styleguidist on 6060 port

npm run styleguide:build // Build styleguide docs
```
