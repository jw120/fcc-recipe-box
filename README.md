# Recipe box

FreeCodeCamp exercise for React. Keeps a list of recipes which contain lists of ingredients, stored
in the browser's local storage.

Implemented with React, redux, React Bootstrap and Immutable. Built with the `create-react-app` initial boilerplate adding flow.

Flow is now working with full coverage - except for the `Modal` from react-bootstrap. Needs `flow-typed` definitions for `jest`, `redux` and `react-redux` to be installed. Note also

* Does not catch extra props added in JSX (does catch missing props)
* Does not fail if we import a type which is not exported

## TODO

* Auto-focus the modal's form when opening it
* Flow-type for react-bootstrap, alternatives?
* Tidy code
* Add ingredients
* Add localStorage

* Other tests
* Should we do something better with threading state into our components - forms?
* Remove ; and ""
* Can we use exact types {| |} - seems not supported by current babel
* Decide where to keep css (one file, or many?)
* Do we need PropTypes?
* Check markdown formatting of this file
* better way to write first selected test (lambda?)

# Notes

Compared to our TypeScript/VS Code setup
* No docs on mouseover
* No type checking of imports on libraries (e.g., using { } vs default, or importing from the wrong library)
* Primitive git support

## Design

Hierarchy of containers/components
* App
  + RecipeBox
    - RecipeName
    - if selected: IngredientsList
    - if selected: IngredientsControl
    - if selected: IngredientsModal
  + RecipeControls
  + AddRecipeModal

Application State:
* `recipes`: `OrderedMap<string, ingredients>` where `ingredients` is a `List<string>`
* `selectedRecipe` is the name of the recipe that is
selected or null


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
