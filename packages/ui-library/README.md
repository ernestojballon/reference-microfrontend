# UiLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Storybook 6.4.19
Run `npm run storybook` to start the development server
on localhost:9000

## Build

`npm run build:lib` to build the library.

## Running unit tests

Run `npm run test`

## Using the library from projects on the one-repo setup

Run `npm i ../ui-library/dist/ui-lib`

Add to the global styles.scss:
`@import "../node_modules/ui-lib/_ui-lib.styles.scss";`

Add the followed code to tsconfig.json file from target project.
` "compilerOptions": { ...​ "paths": { ​ "@angular/*": [ "./node_modules/@angular/*" ],​ "my-lib": [ "../ui-library/projects/ui-lib/src/public-api" ] }​ ... }`
