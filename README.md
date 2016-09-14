# Recipe box

FreeCodeCamp exercise for React. Keeps a list of recipes which contain lists of ingredients, stored
in the browser's local storage.

Implemented with React, redux, React Bootstrap and Immutable. Built with the `create-react-app` initial boilerplate adding flow.

Flow is now working with decent coverage - except for the some of the `react-bootstrap` components and `redux`. Needs `flow-typed` definitions for `jest`, `redux` and `react-redux` to be installed. Note additional issues with Flux:

* Does not catch extra props added to a component in JSX (does catch missing props)
* Have to manually update WrappedActionProps in actions.js
* Don't have props typed on our containers created by connect
* Redux type exports not picked up by eslint-import
* {| |} seems not to work yet with out tool-chain
* Comparing flow/Atom to Typescript/VS Code we lose mouseover docs and the better git support

`Create-react-app` does not allow configuration of the eslint rules and is set up to ignore formatting inconsistencies. As we
cannot override this and prefer a stricter linter, we provide an additional strict configuration which we run manually. Atom runs
the provided less-strict version.


## TODO

* Positioning of confirm modal
* Code clean
* Other tests?

## Steps followed to set up this project

`create-react-app` makes project setup much simpler, but adding flow and additional libraries
makes it not quite trivial. Logging all the steps here for future reference. This is based on version
0.3 of `create-react-app`

### Downloads

```sh
npm upgrade -g create-react-app
create-react-app recipe-box
cd recipe-box
npm i --save redux react-redux immutable
npm i --save react-bootstrap bootstrap@3
```

### Boilerplate

* Create somewhere to hold the files we replace but might need again while offline

```sh
mkdir downloaded
mv README.md downloaded/create-react-app-installed-README.md
```

* Create `README.md`
* Replace `src/favicon.ico`
* Remove `src/logo.svg`
* Add `downloaded` to `.gitignore`
* Add `.flowconfig` as recommended in `create-react-app` user guide (`[ignore]
<PROJECT_ROOT>/node_modules/fbjs/.*`)
* Add to package.json `"homepage": "http://jw120.github.io/recipe-box"`

### Editor config

This works well with atom using the language-babel, linter-eslint and linter-flow plugins.

To make this work, `create-react-app` documents suggest we need:

```
npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtyp
```
